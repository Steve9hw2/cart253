class Counter {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.score = 0;
    this.text = 'Score: '
  }

  display() {
    push();
    textSize(60);
    fill(255);
    text(this.text + this.score, this.x, this.y);
    pop();
  }

}
