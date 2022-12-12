class GameController {
    constructor(levels, images){
        this.retry0 = images['retry0'];
        this.retry1 = images['retry1'];  
        this.levels = levels;
        this.stage = 0;
        this.score = 25;
        // this.threshold = 40;
        this.cursor = images['cursor'];
        this.skip0 = images['skip0'];
        this.skip1 = images['skip1'];
    }

    init(){
        // this.threshold = 40;
        this.score = 25;
        this.stage = 0;
        for(let i = 0; i < this.levels.length; i++){
            this.levels[i].init();
        }
    }

    goNextLevel(){
        this.stage += 1;
        this.levels[this.stage].init(this.score);
        // this.levels[this.stage].init(this.threshold);
    }
    
    drawScore1(){
        textSize(40);
        fill(255);
        stroke(0);
        strokeWeight(3);
        text(this.score + 'kg', width-120, 70);
    }

    drawScore2(){
        textSize(60);
        fill(255);
        stroke(255);
        strokeWeight(1);
        let finalScore = (this.score-this.score%10)/100;
        text(finalScore, width/2-100, height/2);
    }

    drawReturnButton(){
        image(this.retry0, 0, 0);
        if(mouseX>23 && mouseX<181 && mouseY>475 && mouseY<570){
            image(this.retry1, 0, 0);
        }
    }

    drawSkip(){
        image(this.skip0, 0, 0);
        if(mouseX>663 && mouseX<786 && mouseY>10 && mouseY<49){
            image(this.skip1, 0, 0);
        }
    }
    
    display(){
        this.levels[this.stage].display();
        if(this.levels[this.stage].isEnd()){
            this.goNextLevel();
        }
        // update score
        this.score = this.levels[this.stage].getScore();
        

        if (this.stage == 1){
            this.drawSkip();
        }

        if (this.stage == 3 || this.stage == 5){
            this.drawScore1();
        }
        if (this.stage == 9){
            this.drawScore2();
        }
        // return button
        if(this.stage == this.levels.length -1){
            this.drawReturnButton();
        }
        
    }

    releaseEvent(){
        if(this.stage == this.levels.length -1){
            if(mouseX>23 && mouseX<181 && mouseY>475 && mouseY<570){
                this.init();
            }
        }
    }

    clickEvent(){
        // if (this.stage == 1){
        //     if(mouseX>663 && mouseX<786 && mouseY>10 && mouseY<49){
        //         this.stage = 2;
        //     }
        // }
        this.levels[this.stage].clickEvent();
    }
    keyEvent(){
        // if (keyCode === 27) {
        //     this.stage = 0;
        // }
        this.levels[this.stage].keyEvent();
        
    }
}
