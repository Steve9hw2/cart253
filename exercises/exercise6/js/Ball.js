class Ball {

  constructor(x,y,note) {
    this.x = x;
    this.y = y;
    this.size = 50;
    switch(note) {
      case `F3`:
      this.r = 245;
      this.g = 115;
      this.b = 105;
      this.curvature = 6;
      break;
      case `G3`:
      this.r = 245;
      this.g = 166;
      this.b = 105;
      this.curvature = 9;
      break;
      case `Ab4`:
      this.r = 245;
      this.g = 222;
      this.b = 105;
      this.curvature = 12;
      break;
      case `Bb4`:
      this.r = 187;
      this.g = 245;
      this.b = 105;
      this.curvature = 15;
      break;
      case `C4`:
      this.r = 105;
      this.g = 245;
      this.b = 163;
      this.curvature = 16;
      break;
      case `Db4`:
      this.r = 105;
      this.g = 245;
      this.b = 233;
      this.curvature = 19;
      break;
      case `Eb4`:
      this.r = 122;
      this.g = 105;
      this.b = 245;
      this.curvature = 22;
      break;
      case `F4`:
      this.r = 245;
      this.g = 105;
      this.b = 242;
      this.curvature = 25;
      break;
    } // color is based on the note
    this.r2 = this.r - 50;
    this.g2 = this.g - 50;
    this.b2 = this.b - 50;
    this.flash = false;
    this.flashframe = 10;
    this.speed = 3;
    this.vx = random(-this.speed,this.speed);
    this.vy = random(-this.speed,this.speed);
    this.oscillator = new p5.Oscillator();
    this.nearFreq = 220;
    this.farFreq = 440;
    this.oscillator.amp(0.025);
    this.oscillator.start();
    this.note = note;
    this.synth = new p5.PolySynth();
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    let d = dist(this.x,this.y,width/2,height/2);
    let md = dist(0,0,width/2,height/2);
    let newFreq = map(d,0,md,this.nearFreq,this.farFreq);
    this.oscillator.freq(newFreq);
  }

  bounce() {
    if (this.x - this.size/2 < 0 || this.x + this.size/2 > width) {
      this.vx = -this.vx;
      this.playNote();
      this.flash = true;
    }
    if (this.y - this.size/2 < 0 || this.y + this.size/2 > height) {
      this.vy = -this.vy;
      this.playNote();
      this.flash = true;
    }

  }

  playNote() {
    this.synth.play(this.note,0.4,0,0.2);
  }

  display() {
    if (!this.flash) {
    push();
    noStroke();
    rectMode(CENTER,CENTER);
    fill(this.r,this.g,this.b);
    rect(this.x,this.y,this.size,this.size,this.curvature);
    pop();
    }
  }

  flashing() {
    if (this.flash) {
      if (this.flashframe > 0) {
        this.flashframe --;
        push();
        noStroke();
        rectMode(CENTER,CENTER);
        fill(this.r2,this.g2,this.b2);
        rect(this.x,this.y,this.size,this.size,this.curvature);
        pop();
      }
      if (this.flashframe <= 0) {
        this.flash = false
        this.flashframe = 10;
      }
    }
  }
}
