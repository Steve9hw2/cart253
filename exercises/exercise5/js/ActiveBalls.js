class ActiveBalls {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.value = 0;
    this.text = `Active Balls: `;
  }

  display() {
    push();
    textSize(25);
    fill(255);
    text(this.text + this.value, this.x, this.y);
    pop();
  }

}
