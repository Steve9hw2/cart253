class Paddle {

  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.x = 200;
    this.y = height - this.height;
    this.speed = 5
  }

  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

}
