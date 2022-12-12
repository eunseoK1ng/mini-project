class Level2 {
    constructor(images, sounds) {
      this.introSound = sounds['introSound'];
      this.how = images['how'];
      this.end = false;
      this.score = 0;
    }
    
    init(score){
      this.end = false;
      this.score = score;
    }

    getScore(){
      return 25;
    }

  
    isEnd(){
      return this.end;
    }
  
    keyEvent(){
      
    }
  
    clickEvent(){
        this.end = true;
    }
  
    display(){
      this.introSound.stop();
      imageMode(CORNER);
      image(this.how[1], 0, 0);
      }
}


