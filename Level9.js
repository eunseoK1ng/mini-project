class Level9 {
    constructor(images, sounds) {
        // this.cam = createCapture(VIDEO);
        this.stage3 = sounds['stage3'];
        this.item = sounds['item'];
        this.camTest = images['camTest'];
        this.miniImg = images['lev3mini'];
        this.threshold = 80;
        this.cntThreshold = 30;
        this.miniPos = [999, 999];
        this.end = false;
        this.step = 0;
        this.miniCol = new Collider(this.miniPos[0], this.miniPos[1], 130, 190);
        this.score = 0;
    }
    
    init(score){
      this.score = score;
      this.end = false;
      this.miniCol = new Collider(this.miniPos[0], this.miniPos[1], 130, 190);
      this.miniPos = [999, 999];
      this.step = 0;
      this.threshold = 80;
      this.cntThreshold = 30;
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
      // this.cam.size(width, height);
      // // pixelDensity(1);
      // this.cam.hide();

            if(!this.stage3.isPlaying()){
              this.stage3.play();
            }


            // camera
           video.loadPixels();
            let sumx = 0;
            let sumy = 0;
            let count = 0;
            for(let y = 0; y <video.height; y++){
              for(let x = 0; x <video.width; x++){
                let index = (y *video.width + x) * 4;
                let r =video.pixels[index + 0];
                let g =video.pixels[index + 1];
                let b =video.pixels[index + 2];
                let a =video.pixels[index + 3];
                let redity = r - (g + b)/2;
                if(redity > this.threshold){
                  sumx += x;
                  sumy += y;
                  count ++;
                }
              }
            }
            
            imageMode(CORNER);
            push();
            translate(width, 0);
            scale(-1, 1);
            image(video, 0, 0);
            pop();
        
            // draw background
            image(this.camTest, 0, 0);
        
            // draw mini
            push();
            translate(width, 0);
            scale(-1, 1);
            if(count > this.cntThreshold){
              imageMode(CENTER);
              this.miniPos[0] = int((sumx)/count);
              this.miniPos[1] = int((sumy)/count);
              this.miniCol.update(width-this.miniPos[0], this.miniPos[1]);
              image(this.miniImg[0], this.miniPos[0], this.miniPos[1]);
            }else{
              this.miniCol.update(999, 999);
            }
            pop();
        
        
    
      }
}