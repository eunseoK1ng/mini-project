class Level3 {
  constructor(images, sounds){
    //sounds
    this.stage1 = sounds['stage1'];
    this.crush = sounds['crush'];
    this.sadDog = sounds['sadDog']
    // imgs
    this.stageImg = images['stage1'];
    this.miniImg = images['lev1mini'];
    this.animalImg = images['animal'];
    // params
    this.end = false;
    this.start = false;
    this.score = 20;
    //path
    this.pathCollider = [];
    this.setPathCollider();
    // mini
    this.miniCollider = new Collider(96, 197, 90, 50);
    this.prevX = 0;
    this.flip = false;
    // crocodile
    this.crocCollider = new Collider(176, 180, 270, 60);
    this.crocPos = [520, 190];
    this.crocSpeed = 3;
    // monkey
    this.monCollider = new Collider(458, 442, 100, 166);
    this.monPos = [250, -142];
    this.monSpeed = random(-7, -6);
    // bird
    this.birdCollider = new Collider(620, 390, 140, 120);
    this.birdPos = [620, 390];
    this.birdSpeed = [-1, -2];
    // goal
    this.goalCollider = new Collider(700, 545, 103, 28);
    // hurt
    this.hurt = false;
    this.hurtTime = 0;
    this.blink = 100;
    this.blink2 = 50;
    // for debug
    this.showCollider = true;
    // time check
    this.countDown = 20 * 1000;
    this.startTime = millis();
    // point Collider
    this.point0 = new Collider(425, 107, 25, 105);
    this.point1 = new Collider(555, 268, 25, 97);
    this.point2 = new Collider(161, 268, 25, 97);
    this.point3 = new Collider(613, 464, 25, 120);
    this.checkpoint = -1;
    // score
    this.score = 0;
    // etc
    this.click0 = images['stage1_click0'];
    this.click1 = images['stage1_click1'];
    this.clock = images['clock'];
    // kg
    this.minus = images['minus'];
    this.plus = images['plus1'];
    this.checkpointTime = [0, 0, 0, 0];
  }

  init(score){
    this.miniCollider = new Collider(96, 197, 90, 50);
    this.crocCollider = new Collider(176, 180, 270, 60);
    this.monCollider = new Collider(458, 442, 100, 166);
    this.birdCollider = new Collider(620, 390, 140, 120);
    this.goalCollider = new Collider(700, 545, 103, 28);

    this.start = false;
    this.end = false;
    this.pathCollider = [];
    this.setPathCollider();
    this.prevX = 0;
    this.flip = false;
    this.crocPos = [520, 190];
    this.crocSpeed = 3;
    this.monPos = [250, -142];
    this.monSpeed = random(-7, -6);
    this.birdPos = [620, 390];
    this.birdSpeed = [-1, -2];
    this.hurt = false;
    this.hurtTime = 0;
    this.blink = 100;
    this.blink2 = 50;
    this.showCollider = true;
    this.startTime = millis();
    this.countDown = 20 * 1000;
    this.score = score;
    this.checkpoint = -1;
    this.checkpointTime = [0, 0, 0, 0];
  }

  getScore(){
    return this.score;
  }

  updateCheckPoint(){
    switch(this.checkpoint){
      case -1:
        if(this.miniCollider.isCollide(this.point0) && this.start){
          this.checkpoint += 1;
          this.score -= 1;
          this.checkpointTime[0] = millis();
        }
        break;
      case 0:
        if(millis() - this.checkpointTime[0] < 1000 && this.start){
          push();
          translate(mouseX, mouseY);
          image(this.minus, -40, -80);
          pop();
        }
        if(this.miniCollider.isCollide(this.point1)){
          this.checkpoint += 1;
          this.score -= 1;
          this.checkpointTime[1] = millis();
        }
        break;
      case 1:
        if(millis() - this.checkpointTime[1] < 1000 && this.start){
          push();
          translate(mouseX, mouseY);
          image(this.minus, -40, -80);
          pop();
        }
        if(this.miniCollider.isCollide(this.point2)){
          this.checkpoint += 1;
          this.score -= 1;
          this.checkpointTime[2] = millis();
        }
        break;
      case 2:
        if(millis() - this.checkpointTime[2] < 1000 && this.start){
          push();
          translate(mouseX, mouseY);
          image(this.minus, -40, -80);
          pop();
        }
        if(this.miniCollider.isCollide(this.point3)){
          this.checkpoint += 1;
          this.score -= 1;
          this.checkpointTime[3] = millis();
        }
      case 3:
        if(millis() - this.checkpointTime[3] < 1000 && this.start){
          push();
          translate(mouseX, mouseY);
          image(this.minus, -40, -80);
          pop();
        }
        break;
        
    }
  }

  setPathCollider(){
    this.pathCollider.push(new Collider(400, 28, 800, 56));
    this.pathCollider.push(new Collider(341, 190, 682, 62));
    this.pathCollider.push(new Collider(20, 377, 20, 435));
    this.pathCollider.push(new Collider(490, 360, 690, 84));
    this.pathCollider.push(new Collider(341, 561, 609, 72));
    this.pathCollider.push(new Collider(341, 561, 609, 72));
    this.pathCollider.push(new Collider(780, 504, 45, 185));
  }

  isEnd(){
    return this.end;
  }

  mouseOnStart(){
    return (
      28 <= mouseX &&
      mouseX <= 160 &&
      73 <= mouseY &&
      mouseY <= 156
    )
  }

  keyEvent(){
    
  }

  clickEvent(){
        if(this.mouseOnStart() && !this.start){
          this.start = true;
          this.startTime = millis();
        }
  }

  drawMini(){
    if(this.start){
      if(this.hurt){
          push();
          translate(mouseX, mouseY);
          image(this.plus, -40, -60);
          pop();
        this.blink += 1;
        if(this.blink % 20 < 10){
          imageMode(CENTER);
          push();
          translate(mouseX, mouseY);
          if(this.flip) scale(-1, 1);
          image(this.miniImg[1], 0, 0);
          pop();
        }
      }else{
        imageMode(CENTER);
        push();
        translate(mouseX, mouseY);
        if(this.flip) scale(-1, 1);
        image(this.miniImg[0], 0, 0);
        pop();
      }
    }
  }


  collideCheck(){
    let isHurt = false;
    // croc
    isHurt = isHurt || (this.miniCollider.isCollide(this.crocCollider));
    // monkey
    isHurt = isHurt || (this.miniCollider.isCollide(this.monCollider));
    // bird
    isHurt = isHurt || (this.miniCollider.isCollide(this.birdCollider));
    // path
    for(let i = 0 ; i < this.pathCollider.length; i ++){
      isHurt = isHurt || (this.miniCollider.isCollide(this.pathCollider[i]));
    }
    return isHurt;
  }

  hurtUpdate(){
    if(!this.hurt && this.start){
      if(this.collideCheck()){
        this.score += 0.5;
        this.hurt = true;
        this.hurtTime = millis();
        this.sadDog.play();
        // this.crush.play();
      }
    }
    else if(millis() - this.hurtTime > 1000){
      this.hurt = false;
    }
  }

  goalUpdate(){
    if(this.miniCollider.isCollide(this.goalCollider)){
      this.end = true;
    }
  }

  drawTimer(){
    let leftTime = Math.ceil(this.countDown - (millis() - this.startTime))/1000;
    if(this.start){
      fill(255, 0, 0);
      rectMode(CORNERS);
      rect(20, 25, (leftTime*1000/this.countDown)*width, 35); 
      imageMode(CORNER);
      image(this.clock, 0, 0);
    }
    // textSize(30);
    // text(leftTime, width/2-50, 50);
  }

  display(){
    
    if (!this.stage1.isPlaying()){
      this.stage1.play();
    }
    // background
    imageMode(CORNER);
    image(this.stageImg, 0, 0);

    // start button
    if(!this.start){
      if(this.mouseOnStart()){
        // fill(255, 0, 0);
        push();
        image(this.click0, 0, 0);
        image(this.click1, 0, 0);
        pop();
      }else{
        fill(255, 100, 100);
        this.blink2 += 0.7;
        if(this.blink2 % 20 < 10){
          push();
          image(this.click0, 0, 0);
          pop();
        }
      }
      // textSize(60);
      // text('START', 20, 130);
    }

    // croc
    this.crocPos[0] += this.crocSpeed;
    if(this.crocPos[0] > 650){
      this.crocSpeed = -1;
    }
    else if(this.crocPos[0] < 520){
      this.crocSpeed = 3;
    }
    push();
    translate(this.crocPos[0]-176, this.crocPos[1]-203);
    image(this.animalImg[2], 0, 0);
    pop();

    // mon
    this.monPos[1] += this.monSpeed;
    if(this.monPos[1] < -100){
      this.monSpeed = 8;
    }
    else if(this.monPos[1] > 400){
      this.monSpeed = random(-7, -6);
    }
    push();
    translate(this.monPos[0]-458, this.monPos[1]-442);
    image(this.animalImg[1], 0, 0);
    pop();

    // bird
    this.birdPos[0] += this.birdSpeed[0];
    this.birdPos[1] += this.birdSpeed[1];
    if(this.birdPos[0] < 50 || this.birdPos[0] > width-50){
      this.birdSpeed[0] = -this.birdSpeed[0];
    }
    if(this.birdPos[1] < 83 || this.birdPos[1] > height-83){
      this.birdSpeed[1] = -this.birdSpeed[1];
    }
    
    push();
    translate(this.birdPos[0]-620, this.birdPos[1]-390);
    image(this.animalImg[0], 0, 0);
    pop();
    
    // point
    this.updateCheckPoint();
    this.point0.display();
    this.point1.display();
    this.point2.display();
    this.point3.display();
    // this.point4.display();
    // this.point5.display();
    // this.point6.display();

    // mini
    this.drawMini();

    // collider
    this.crocCollider.update(this.crocPos[0], this.crocPos[1]);
    this.monCollider.update(this.monPos[0], this.monPos[1]);
    this.birdCollider.update(this.birdPos[0], this.birdPos[1]);
    this.miniCollider.update(mouseX, mouseY);
    if(this.showCollider){
      for(let i = 0; i < this.pathCollider.length; i++){
        this.pathCollider[i].display();
      }
      this.crocCollider.display();
      this.monCollider.display();
      this.miniCollider.display();
      this.birdCollider.display();
      this.goalCollider.display();
    }

    // hurt check
    this.hurtUpdate();

    // goal check
    if(this.start){
      this.goalUpdate();
    }

    // mouse update
    if(frameCount % 20 == 0){
      this.flip = (this.prevX > mouseX);
      this.prevX = mouseX;
    }

    stroke(255, 0, 0);
    noFill();
    
    // timer
    this.drawTimer();
    if(this.start && millis() - this.startTime > this.countDown){
      this.end = true;
    }

  }
}