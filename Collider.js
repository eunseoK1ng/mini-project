class Collider{
  constructor(posX, posY, lenX, lenY){
    this.x1 = posX - lenX/2;
    this.x2 = posX + lenX/2;
    this.y1 = posY - lenY/2;
    this.y2 = posY + lenY/2;
    this.lenX = lenX;
    this.lenY = lenY;
  }

  getBoundary(){
    return([this.x1, this.x2, this.y1, this.y2]);
  }

  inBoundary(x0, y0, x1, x2, y1, y2){
    return (
      x1 <= x0 &&
      x0 <= x2 &&
      y1 <= y0 &&
      y0 <= y2
    );
  }

  isCollide(target){
    let x1 = target.getBoundary()[0];
    let x2 = target.getBoundary()[1];
    let y1 = target.getBoundary()[2];
    let y2 = target.getBoundary()[3];
    return (
      this.inBoundary(this.x1, this.y1, x1, x2, y1, y2) ||
      this.inBoundary(this.x1, this.y2, x1, x2, y1, y2) ||
      this.inBoundary(this.x2, this.y1, x1, x2, y1, y2) ||
      this.inBoundary(this.x2, this.y2, x1, x2, y1, y2)
    );
  }

  update(posX, posY){
    this.x1 = posX - this.lenX/2;
    this.x2 = posX + this.lenX/2;
    this.y1 = posY - this.lenY/2;
    this.y2 = posY + this.lenY/2;
  }

  display(){
    noFill();
    stroke(255, 0, 0);
    strokeWeight(2);
    rectMode(CORNER);
    // rect(this.x1, this.y1, this.lenX, this.lenY);
  }
}