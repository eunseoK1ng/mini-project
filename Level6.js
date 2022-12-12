class Level6 {
    constructor(images, sounds) {
        this.stage2 = sounds['stage2'];
        this.how = images['how'];
        this.end = false;
        this.score = 0;
    }
    
    init(score){
      this.score = score;
      this.end = false;
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
        this.end = true;
    }
  
    display(){
        this.stage2.stop();
        imageMode(CORNER);
        image(this.how[3], 0, 0);
      }
}


