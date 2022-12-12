class Level9 {
  constructor(images, sounds){
    this.end0Img = images['end0'];
    this.end1 = sounds['end1'];
    this.end = false;
    this.score = 0;
    this.originalScore = 0;
    this.earnedCloth = 0;
    this.showend = false;
    this.end0 = sounds['end0'];
    this.stage3 = sounds['stage3'];
  }

  init(score){
    this.end = false;
    this.earnedCloth = score % 10;
    this.originalScore = score;
    this.score = (score - this.earnedCloth) / 100;
    this.showend = false;
  }

  getScore(){
    return this.originalScore;
  }

  isEnd(){
    return this.end;
  }

  keyEvent(){
    
  }

  clickEvent(){
    // this.end0.stop();
    this.end = true;
    this.end1.play();
    // imageMode(CORNER);
    // images(this.end1Img[0], 0, 0);
    // if (!this.end1.isPlaying()){
    //     this.end1.play();
    // }
  }

  display(){
    if(!this.end0.isPlaying()){
      this.end0.play();
    }
    imageMode(CORNER);
    image(this.end0Img, 0, 0);

  }
}