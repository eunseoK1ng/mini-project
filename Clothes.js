class Clothes{
	constructor(img){
	  this.img = img;
	  this.pos = [];
	  this.speed = [];
      this.initPosSpeed();
	  this.col = new Collider(this.pos[0], this.pos[1], 94, 78);
	}

  initPosSpeed(){
    this.pos = [int(random(0, 2))*width, int(random(height-100, height))];
    if(this.pos[0] == 0){
      this.speed = [random(8, 13), random(-23, -8)];
    }else{
      this.speed = [-random(8, 13), random(-23, -8)];
    }
  }
  
	move(){
    this.pos[0] += this.speed[0]
	  this.pos[1] += this.speed[1];
    this.speed[1] += 0.8;
	}

  isEarned(){
    this.pos[0] = 999;
    this.pos[1] = 999;
  }
  
	getCol(){
	  return this.col;
	}
  
	display(){
	  imageMode(CENTER);
	  image(this.img, this.pos[0], this.pos[1]);
	  this.move();
	  this.col.update(this.pos[0], this.pos[1]);
	  this.col.display();
	}
  
}