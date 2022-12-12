class Level0 {
    constructor(images, sounds) {
        this.startSound = sounds['startSound'];
        this.ButtonSound = sounds['ButtonSound'];
        this.startImgs = images['start'];
        this.cursor = images['cursor'];
        this.startButtons = images['startButton'];
        this.end = false;
    }

    getScore(){
      return 25;
    }

    init(){
        this.end = false;
    }
  
    isEnd(){
      return this.end;
    }
  
    keyEvent(){
      
    }
  
    clickEvent(){
        if (mouseX >= 231 && mouseX <= 550 && mouseY >= 410 && mouseY <= 543) {
            this.ButtonSound.play();
            this.story += 1;
            this.startSound.stop();
            this.end = true;
          }
        
    }
  
    display(){
        if (!this.startSound.isPlaying()) {
            this.startSound.play();
          }
          image(this.startImgs[0], 0, 0);
          image(this.startButtons[0], 0, 0);
          image(this.cursor, mouseX-40, mouseY-40);
          if (mouseX >= 231 && mouseX <= 550 && mouseY >= 410 && mouseY <= 543) {
            image(this.startImgs[1], 0, 0);
            image(this.startButtons[1], 0, 0);
            image(this.cursor, mouseX-40, mouseY-40);
          }
      }
}

