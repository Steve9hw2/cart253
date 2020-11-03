class Lemming {

  constructor(variation) {
    this.x = 0;
    this.y = 0;
    this.variation = variation;
    if (variation < 0) {
      variation = 0;
    }
    if (variation > 7) {
      variation = 7;
    }
    switch(variation) {
      case 0:
      this.speed = 1.2;
      break;
      case 1:
      this.speed = 1.3;
      break;
      case 2:
      this.speed = 0.9;
      break;
      case 3:
      this.speed = 0.7;
      break;
      case 4:
      this.speed = 1;
      break;
      case 5:
      this.speed = 1.1;
      break;
      case 6:
      this.speed = 1.4;
      break;
      case 7:
      this.speed = 1.5;
      break;
    }
    this.variant = variation;
  }

}
