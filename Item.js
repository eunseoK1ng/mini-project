class Item{
  constructor(img, isVeg){
    this.img = img;
    this.isVeg = isVeg;
    this.pos = [int(random(100, 700)), 0];
    this.speed = 10;
    this.col = new Collider(this.pos[0], this.pos[1], 94, 78);
  }

  move(){
    this.pos[1] += this.speed;
  }

  getCol(){
    return this.col;
  }

  isEaten(){
    this.pos[1] = 999;
    return this.isVeg ? -1 : 1;
  }

  getIsVeg(){
    return this.isVeg;
  }

  display(){
    imageMode(CENTER);
    image(this.img, this.pos[0], this.pos[1]);
    this.move();
    this.col.update(this.pos[0], this.pos[1]);
    this.col.display();
  }
}