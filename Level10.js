class Level10 {
    constructor(images, sounds) {
        this.test = images['test'];
        this.end0 = sounds['end0'];
        this.end = false;
    }
    
    init(score){
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
      
    }
  
    display(){
        this.end0.stop();
        imageMode(CORNER);
        image(this.test, 0, 0);
      }
}