class Lemming {

  constructor(variation) {
    this.x = 0;
    this.y = 0;
    this.variation = variation;
    this.moving = false;
    this.falling = false;
    this.collide = false;
    this.dead = false;
    this.safe = false;
    this.vy = 1.2;
    this.ay = 0.5;
    this.maxGrav = 10;
    this.number = undefined; // # of lemming in the sequence
    this.scream = false;
    if (variation < 0) {
      variation = 0;
    }
    if (variation > 7) {
      variation = 7;
    }
    switch(variation) {
      case 0:
      this.speed = 1;
      break;
      case 1:
      this.speed = 1;
      break;
      case 2:
      this.speed = 1;
      break;
      case 3:
      this.speed = 1;
      break;
      case 4:
      this.speed = 1;
      break;
      case 5:
      this.speed = 1;
      break;
      case 6:
      this.speed = 1;
      break;
      case 7:
      this.speed = 1;
      break;
    }
    this.variant = variation;
  }

  advance(startY,gameSpeed) {
    if (!this.moving && !this.collide && !this.safe && !this.falling && !this.dead) {
      this.x = -100 - 80*this.number ;
      this.y = startY;
    }
    else if (this.moving && !this.collide && !this.safe && !this.falling && !this.dead) {
      this.x += this.speed*gameSpeed;
    }
  }

  gravity() {
    this.vy += this.ay * gameSpeed;
    this.vy = constrain(this.vy,-this.maxGrav,this.maxGrav);
    this.y += this.vy * gameSpeed
    this.falling = true;
  }

  climb(y,gameSpeed) {
    this.y += y*gameSpeed;
  }

}
