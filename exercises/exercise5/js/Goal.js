class Goal {

  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.x = width - this.width*3;
    this.y = 200;
    this.speed = 3;
    this.rising = false;
  }

  anim() {
    if (!this.rising && this.y < 800) {
      this.y += 5;
    }
    if (!this.rising && this.y >= 800) {
      this.rising = true;
    }
    if (this.rising && this.y > 200) {
      this.y -= 5;
    }
    if (this.rising && this.y <= 200) {
      this.rising = false;
    }
  }

  display() {
    push();
    fill(120,120,20);
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

}
