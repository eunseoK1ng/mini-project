class Level5 {
  constructor(images, sounds){
    //sounds
    this.stage2 = sounds['stage2'];
    this.good = sounds['good'];
    this.bad = sounds['bad'];
    // imgs
    this.stageImg = images['stage2'];
    this.miniImg = images['lev2mini'];
    this.vegImg = images['veg'];
    this.desImg = images['des'];
    // params
    this.end = false;
    this.countDown = 15 * 1000;
    // this.startTime = 0;
    this.startTime = millis();
    // items
    this.items = [];
    // mini
    this.vegEat = false;
    this.desEat = false;
    this.eatTime;
    this.miniPos = [width/2, height-100];
    this.miniSpeed = 8;
    this.miniCol = new Collider(this.miniPos[0], this.miniPos[1], 132, 163);
    // score
    this.score = 0;
    this.blink2 = 50;
    this.clock = images['clock'];
    // kg
    this.minus = images['minus'];
    this.plus = images['plus2'];
  }

  init(score){
    this.end = false;
    this.countDown = 15 * 1000;
    this.score = score;
    this.startTime = millis();
    this.items = [];
    this.vegEat = false;
    this.desEat = false;
    this.eatTime;
    this.miniPos = [width/2, height-100];
    this.miniSpeed = 7;
    this.miniCol = new Collider(this.miniPos[0], this.miniPos[1], 132, 163);
    this.blink2 = 50;
  }

  getScore(){
    return this.score;
  }

  addGoodItem(){
    let tmp = int(random(0, 3));
    let new_item;
    if(tmp <= 3){
      new_item = new Item(this.vegImg[tmp], true);
    }
    this.items.push(new_item);
  }

  addBadItem(){
    let tmp = int(random(0, 3));
    let new_item;
    if(tmp <= 3){
      new_item = new Item(this.desImg[tmp], false);
    }
    this.items.push(new_item);
  }

  drawMini(){
    imageMode(CENTER);
    if(!this.vegEat && !this.desEat){
      image(this.miniImg[2], this.miniPos[0], this.miniPos[1]);
    }
    else if(this.vegEat){
      image(this.miniImg[1], this.miniPos[0], this.miniPos[1]);
      push();
      translate(this.miniPos[0], this.miniPos[1]);
      image(this.minus, 0, -100);
      pop();
    }
    else if(this.desEat){
      image(this.miniImg[0], this.miniPos[0], this.miniPos[1]);
      push();
      translate(this.miniPos[0], this.miniPos[1]);
      image(this.plus, 0, -100);
      pop();
    }
  }

  moveMini(){
    if(keyIsDown(LEFT_ARROW)){
      this.miniPos[0] -= this.miniSpeed;
      if(this.miniPos[0] < 50){
        this.miniPos[0] = 50;
      }
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.miniPos[0] += this.miniSpeed;
      if(this.miniPos[0] > 750){
        this.miniPos[0] = 750;
      }
    }
  }

  checkMini(){
    for(let i = 0; i < this.items.length; i++){
      if(this.miniCol.isCollide(this.items[i].getCol())){
        this.items[i].isEaten();
        if(this.items[i].getIsVeg()){
          this.good.play();
          this.score -= 1;
          this.vegEat = true;
          // push();
          // translate(this.miniPos[0], this.miniPos[1]);
          // image(this.minus, -20, -80);
          // pop();
        }else{
          this.bad.play();
          this.score += 1;
          this.desEat = true;
          // push();
          // translate(this.miniPos[0], this.miniPos[1]);
          // image(this.plus, -20, -80);
          // pop();
        }
        this.eatTime = frameCount;
      }
    }
    if((this.vegEat || this.desEat) && frameCount - this.eatTime > 20){
      this.vegEat = false;
      this.desEat = false;
    }

  }

  isEnd(){
    return this.end;
  }

  keyEvent(){

  }

  clickEvent(){
    
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

  display(){
        if (!this.stage2.isPlaying()){
          this.stage2.play();
        }

        imageMode(CORNER);
        image(this.stageImg, 0, 0);

        // add item
        if(frameCount % 60 == 30){
          this.addGoodItem();
        }
        if(frameCount % 60 == 0){
          this.addBadItem();
        }

        // draw items
        for(let i = 0; i < this.items.length; i++){
          this.items[i].display();
        }

        // draw mini
        this.moveMini();
        this.drawMini();

        this.miniCol.display();
        this.miniCol.update(this.miniPos[0], this.miniPos[1]);

        // eat check
        this.checkMini();

        // end check
        this.drawTimer();
        if(millis() - this.startTime > this.countDown){
          this.end = true;
        }

        // if (this.vegEat){
        //   push();
        //   translate(this.miniPos[0], this.miniPos[1]);
        //   image(this.minus, -20, -40);
        //   pop();
        // } else if(this.desEat) {
        //   push();
        //   translate(this.miniPos[0], this.miniPos[1]);
        //   image(this.plus, -20, -40);
        //   pop();
        // }
}
}