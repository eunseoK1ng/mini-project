class Level1 {
  constructor(images, sounds) {
    this.startSound = sounds['startSound'];
    this.introSound = sounds['introSound'];
    this.why = sounds['why'];
    this.soSad= sounds['soSad'];
    this.eating = sounds['eating'];
    this.pouring = sounds['pouring'];
    this.sadDog = sounds['sadDog'];
    this.walkDog = sounds['walkDog'];
    this.byeDog = sounds['byeDog'];
    this.intro0 = images['intro0'];
    this.intro1 = images['intro1'];
    this.eatImgs = images['eat'];
    this.blinkImgs = images['blink'];
    this.sceneImgs = images['scene'];
    this.story = 0;
    this.index = 0;
    this.blur = 0;
    this.end = false;
    this.score = 0;
  }

  init(score) {
    this.story = 0;
    this.index = 0;
    this.blur = 0;
    this.end = false;
    this.score = score;
  }

  getScore(){
    return 25;
  }


  makeStory(n) {
    image(this.sceneImgs[n], 0, 0);
  }

  makeBlur(n) {
    tint(255, this.blur);
    image(this.sceneImgs[n], 0, 0);
    if (this.blur < 255) {
      this.blur+= 20;
    }
  }

  isEnd(){
    tint(255, 255);
    return this.end;
  }

  keyEvent(){

  }

  clickEvent() {
    switch (this.story) {
      case 0:
        if(mouseX>663 && mouseX<786 && mouseY>10 && mouseY<49){
          this.end = true;
        }
        if (mouseX <= 200 && mouseX >= 0 && mouseY >= 400 && mouseY <= 600) {
          this.story += 1;
          this.index = 0;
          if (!this.pouring.isPlaying()) {
            this.pouring.play();
          }
        }
        this.blur = 0;
        break;                                          
      case 1:
        if(mouseX>663 && mouseX<786 && mouseY>10 && mouseY<49){
          this.end = true;
        }
          this.story += 1;
          this.blur = 0;
        break;
      case 2:
        if(mouseX>663 && mouseX<786 && mouseY>10 && mouseY<49){
          this.end = true;
        }
          this.story += 1;
          this.blur = 0;
          this.walkDog.play();
        break;
      case 3:
        if(mouseX>663 && mouseX<786 && mouseY>10 && mouseY<49){
          this.end = true;
        }
          this.story += 1;
          this.blur = 0;
          this.sadDog.play();
        break;
      case 4:
        if(mouseX>663 && mouseX<786 && mouseY>10 && mouseY<49){
          this.end = true;
        }
          this.story += 1;
          this.blur = 0;
          this.soSad.play();
        break;
      case 5:
        if(mouseX>663 && mouseX<786 && mouseY>10 && mouseY<49){
          this.end = true;
        }
          this.story += 1;
          this.blur = 0;
        break;
      case 6:
        if(mouseX>663 && mouseX<786 && mouseY>10 && mouseY<49){
          this.end = true;
        }
          this.story += 1;
          this.blur = 0;
        break;
      case 7:
        if(mouseX>663 && mouseX<786 && mouseY>10 && mouseY<49){
          this.end = true;
        }
          this.story += 1;
          this.blur = 0;
          this.why.play();
        break;
      case 8:
        if(mouseX>663 && mouseX<786 && mouseY>10 && mouseY<49){
          this.end = true;
        }
          this.story += 1;
          this.blur = 0;
        break;
      case 9:
        if(mouseX>663 && mouseX<786 && mouseY>10 && mouseY<49){
          this.end = true;
        }
        this.story += 1;
        this.blur = 0;
        this.byeDog.play();
        break;
      case 10:
        if(mouseX>663 && mouseX<786 && mouseY>10 && mouseY<49){
          this.end = true;
        }
        this.story += 1;
        this.end = true;
        this.blur = 0;
        break;
      // case 11:
      //   this.story += 1;
      //   this.end = true;
      //   this.blur = 0;
      //   break;
    }
  }

  display() {
    switch (this.story) {
      case 0:
        if (!this.introSound.isPlaying()) {
          this.introSound.play();
        }
        this.startSound.stop();
        if (frameCount % 10 == 0) {
          image(this.blinkImgs[this.index % 2], 0, 0);
          this.index++;
          if (mouseX <= 200 && mouseX >= 0 && mouseY >= 400 && mouseY <= 600) {
            image(this.sceneImgs[0], 0, 0);
          }
        }
        break;
      case 1:
        this.makeBlur(1);
        this.makeStory(1);
        if (mouseX <= 772 && mouseX >= 708 && mouseY >= 512 && mouseY <= 570) {
          image(this.intro1, 0, 0);
        }
        break;
      case 2:
        if (!this.eating.isPlaying()) {
          this.eating.play();
        }
        if (frameCount % 20 == 0) {
          image(this.eatImgs[this.index % 9], 0, 0);
          this.index++
        }
        image(this.intro0, 0, 0);
        if (mouseX <= 772 && mouseX >= 708 && mouseY >= 512 && mouseY <= 570) {
          image(this.intro1, 0, 0);
        }
        break;
      case 3:
        this.eating.stop();
        tint(255, 255);
        this.makeBlur(2);
        this.makeStory(2);
        if (mouseX <= 772 && mouseX >= 708 && mouseY >= 512 && mouseY <= 570) {
          image(this.intro1, 0, 0);
        }
        break;
      case 4:
        tint(255, 255);
        this.makeBlur(3);
        this.makeStory(3);
        if (mouseX <= 772 && mouseX >= 708 && mouseY >= 512 && mouseY <= 570) {
          image(this.intro1, 0, 0);
        }
        break;
      case 5:
        tint(255, 255);
        this.makeBlur(4);
        this.makeStory(4);
        if (mouseX <= 772 && mouseX >= 708 && mouseY >= 512 && mouseY <= 570) {
          image(this.intro1, 0, 0);
        }
        break;
      case 6:
        tint(255, 255);
        this.makeBlur(5);
        this.makeStory(5);
        if (mouseX <= 772 && mouseX >= 708 && mouseY >= 512 && mouseY <= 570) {
          image(this.intro1, 0, 0);
        }
        break;
      case 7:
        tint(255, 255);
        this.makeBlur(6);
        this.makeStory(6);
        if (mouseX <= 772 && mouseX >= 708 && mouseY >= 512 && mouseY <= 570) {
          image(this.intro1, 0, 0);
        }
        break;
      case 8:
        tint(255, 255);
        this.makeStory(7);
        if (mouseX <= 772 && mouseX >= 708 && mouseY >= 512 && mouseY <= 570) {
          image(this.intro1, 0, 0);
        }
        break;
      case 9:
        tint(255, 255);
        this.makeBlur(8);
        this.makeStory(8);
        if (mouseX <= 772 && mouseX >= 708 && mouseY >= 512 && mouseY <= 570) {
          image(this.intro1, 0, 0);
        }
        break;
      case 10:
        tint(255, 255);
        this.makeBlur(9);
        if (mouseX <= 772 && mouseX >= 708 && mouseY >= 512 && mouseY <= 570) {
          image(this.intro1, 0, 0);
        }
        break;
      // case 11:
      //   break;
    }
    
  }
}