class Level4 {
    constructor(images, sounds) {
        this.stage1 = sounds['stage1'];
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
        this.stage1.stop();
        imageMode(CORNER);
        image(this.how[2], 0, 0);
      }
}

