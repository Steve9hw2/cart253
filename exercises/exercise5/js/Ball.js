class Ball {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 40;
    this.active = true;
    this.score = false;
  }

  gravity(f) {
    this.ay += f;
  }

  move() {
    this.vx += this.ax;
    this.vy += this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x += this.vx;
    this.y += this.vy;

    if (this.y - this.size/2 > height) {
      this.active = false;
    }
  }

  bounce(paddle) {
    if (this.x > paddle.x - paddle.width/2 &&
        this.x < paddle.x + paddle.width/2 &&
        this.y + this.size/2 > paddle.y - paddle.height/2 &&
        this.y - this.size/2 < paddle.y + paddle.height/2) {

        let dx = this.x - paddle.x;
        this.vx += map(dx,-paddle.width/2,paddle.width/2,-2,2);

      this.vy = -this.vy;
      this.ay = 0;
    }
  }

  point(goal) {
    if (this.x > goal.x - goal.width/2 &&
        this.x < goal.x + goal.width/2 &&
        this.y + this.size/2 > goal.y - goal.height/2 &&
        this.y - this.size/2 < goal.y + goal.height/2 &&
        this.active === true) {
          this.active = false;
          this.score = true;
        }
  }

  vanish() {
    push();
    fill(200,200,40);
    noStroke();
    ellipse(this.x,this.y,this.size);
    pop();
  }

  display() {
    push();
    fill(255,50,50);
    stroke(0);
    ellipse(this.x,this.y,this.size);
    pop();
  }

}
