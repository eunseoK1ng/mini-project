class Level12 {
    constructor(images, sounds){
        this.end0Img = images['end0'];
        this.end1Img = images['end1'];
        this.end2Img = images['end2'];
        this.end3Img = images['end3'];
        this.end4Img = images['end4'];
        this.endText1 = images['endText1']
        this.endText2 = images['endText2']
        this.endText3 = images['endText3']
        this.endText4 = images['endText4']

        this.end = false;
        this.score = 0;
        this.earnedCloth = 0;
        this.end0 = sounds['end0'];
        this.end1 = sounds['end1'];
        this.end2 = sounds['end2'];
        this.end3 = sounds['end3'];
        this.end4 = sounds['end4'];
        this.index = 0;

    }
  
    init(score){
        this.end = false;
        this.earnedCloth = score % 10;
        this.score = (score - this.earnedCloth) / 100;
        this.index = 0;
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
        // print(this.score);
        // print((this.score > 15 && this.earnedCloth < 4));
        this.end0.stop();
        // imageMode(CORNER);
        // images(this.end1Img[0], 0, 0);
        // if (!this.end1.isPlaying()){
        //     this.end1.play();
        // }
        if(this.score <= 15 && this.earnedCloth == 4){
            if (!this.end1.isPlaying()){
                this.end1.play();
            }
            // image(this.end1Img, 0, 0);
            if (frameCount % 10 == 0) {
                image(this.end1Img[this.index % 2], 0, 0);
                this.index++;
            }
            image(this.endText1, 0, 0);
        }
        else if(this.score > 15 && this.earnedCloth == 4){
            if (!this.end2.isPlaying()){
                this.end2.play();
                // image(this.end2Img, 0, 0);
            }
            // image(this.end2Img, 0, 0);
            if (frameCount % 10 == 0) {
                image(this.end2Img[this.index % 3], 0, 0);
                this.index++;
            }
            image(this.endText2, 0, -75);
    
        }
        else if(this.score <= 15 && this.earnedCloth == 4){
            if (!this.end3.isPlaying()){
                this.end3.play();
                // image(this.end3Img, 0, 0);
            }
            // image(this.end3Img, 0, 0);
            if (frameCount % 10 == 0) {
                image(this.end3Img[this.index % 3], 0, 0);
                this.index++;
            }
            image(this.endText3, 0, -500);
    
        }
        else if(this.score > 15 && this.earnedCloth < 4){
            // print('bug');
            if (!this.end4.isPlaying()){
                this.end4.play();
                image(this.end4Img[0], 0, 0);
            }
            if (frameCount % 10 == 0) {
                image(this.end4Img[this.index % 10], 0, 0);
                this.index++;
            }
            image(this.endText4, 0, 0);
        }
    }
}
