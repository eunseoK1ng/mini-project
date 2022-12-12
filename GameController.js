class GameController {
    constructor(levels, images, fonts){
        this.retry0 = images['retry0'];
        this.retry1 = images['retry1'];  
        this.levels = levels;
        this.stage = 0;
        this.score = 25;
        // this.threshold = 40;
        this.cursor = images['cursor'];
        this.skip0 = images['skip0'];
        this.skip1 = images['skip1'];
        this.digital = fonts['digital'];
        this.nowKg = fonts['nowKg'];
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
        textFont(this.nowKg);
        fill(255);
        stroke(66, 50, 24);
        strokeWeight(5);
        text('현재 몸무게 : ' + this.score + 'kg', width/2-150, 40);
        fill(238, 112, 112);
        text(this.score, width/2+30, 40);
    }

    drawScore2(){
        textSize(70);
        textFont(this.digital);
        fill(253, 245, 20);
        stroke(253, 245, 20);
        strokeWeight(1);
        let finalScore = (this.score-this.score%10)/100;
        text(finalScore, width/2-130, height/2+15);
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
