class Level10 {
  constructor(images, sounds){
    this.stage3 = sounds['stage3'];
    this.item = sounds['item'];
    this.stageImg = images['stage3'];
    this.miniImg = images['lev3mini'];
    this.clothesImg = images['clothes'];
    this.threshold = 80;
    this.cntThreshold = 30;
    this.miniPos = [999, 999];
    this.miniCol = new Collider(this.miniPos[0], this.miniPos[1], 130, 190);
    this.clothes = [];
    this.step = 0;
    this.end = false;
    this.startTime = millis();
    this.score = 0;
    this.countDown = 25*1000;
    this.blink2 = 50;
    this.clock = images['clock'];
  }

  init(score){
    this.startTime = millis();
    this.score = 100*score
    this.threshold = 80;
    this.cntThreshold = 30;
    this.miniPos = [999, 999];
    this.miniCol = new Collider(this.miniPos[0], this.miniPos[1], 130, 190);
    this.clothes = [];
    this.step = 0;
    this.end = false;
    this.countDown = 25*1000;
    this.blink2 = 50;
  }

  getScore(){
    return this.score;
  }

  isEnd(){
    return this.end;
  }

  keyEvent(){
    
  }

  clickEvent(){

  }

  throwCloth(){
    if(this.step < 4){
      this.clothes.push(new Clothes(this.clothesImg[this.step]));
    }
  }

  drawTimer(){
    let leftTime = Math.ceil(this.countDown - (millis() - this.startTime))/1000;
    fill(255, 0, 0);
      rectMode(CORNERS);
      rect(20, 25, (leftTime*1000/this.countDown)*width, 35); 
      imageMode(CORNER);
      image(this.clock, 0, 0);
    // fill(255, 0, 0);
    // rectMode(CORNERS);
    // rect(0, 0, (leftTime*1000/this.countDown)*width, 10); 
  }

  checkCloth(){
    let col = this.clothes[this.clothes.length -1];
    col = col.getCol();
    if(this.miniCol.isCollide(col)){
      this.clothes[this.clothes.length-1].isEarned();
      this.item.play();
      this.score += 1;
      if(this.step < 4){
        this.step += 1;
      }
    }
  }

  display(){
    // camera
    print(this.score);
    video.loadPixels();
    let sumx = 0;
    let sumy = 0;
    let count = 0;
    for(let y = 0; y < video.height; y++){
      for(let x = 0; x < video.width; x++){
        let index = (y * video.width + x) * 4;
        let r = video.pixels[index + 0];
        let g = video.pixels[index + 1];
        let b = video.pixels[index + 2];
        let a = video.pixels[index + 3];
        let redity = r - (g + b)/2;
        if(redity > this.threshold){
          sumx += x;
          sumy += y;
          count ++;
        }
      }
    }
    
    imageMode(CORNER);
    push();
    translate(width, 0);
    scale(-1, 1);
    image(video, 0, 0);
    pop();

    // draw background
    image(this.stageImg, 0, 0);

    // draw mini
    push();
    translate(width, 0);
    scale(-1, 1);
    if(count > this.cntThreshold){
      imageMode(CENTER);
      this.miniPos[0] = int((sumx)/count);
      this.miniPos[1] = int((sumy)/count);
      this.miniCol.update(width-this.miniPos[0], this.miniPos[1]);
      image(this.miniImg[this.step], this.miniPos[0], this.miniPos[1]);
    }else{
      this.miniCol.update(999, 999);
    }
    pop();

    this.miniCol.display();

    // throw cloth
    if(frameCount % 50 == 0){
      this.throwCloth();
    }
    // draw cloth
    if(this.clothes.length > 0){
      this.clothes[this.clothes.length-1].display();
    }
    // check cloth
    if(this.clothes.length > 0){
      this.checkCloth();
    }

    // end check
    this.drawTimer();
    if(millis() - this.startTime > this.countDown){
      this.end = true;
      this.clothes = [];
      if(this.stage3.isPlaying()){
        this.stage3.stop();
      }
    }

  }
}
