class Paddle {

  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.x = 200;
    this.y = height - this.height;
    this.speed = 5
  }

  // move() {
  //   this.x = mouseX;
  // }

  // moveLeft() {
  //   if (!this.moving && this.x > this.width/2) {
  //     this.moving = true;
  //       this.x -= this.width;
  //   }
  // }
  //
  // moveRight() {
  //   if (!this.moving && this.x < this.width * 2.5) {
  //     this.moving = true;
  //       this.x += this.width;
  //   }
  // }

  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

}
