class Transition {
  constructor() {
    this.active = false;
    this.span = 2;
    this.time = 0;
    this.factor = 0;
    this.factorSin = 0;
    this.factorSmooth = 0;
    this.speedIncrease = 0.25;
    this.direction = 1;
    this.PIHalf = Math.PI / 2;
  }

  isActive() {
    return this.active;
  }

  reset(direction) {
    this.active = true;
    this.time = 0;
    this.direction = direction;
  }

  getBoost() {
    return (this.active) ? this.factorSin * this.speedIncrease * this.direction : 0;
  }

  update(delta) {
    if (this.active) {
      this.time += delta;
      this.factor = this.time / this.span;
      this.factorSin = Math.sin(this.factor * Math.PI);
      this.factorSmooth = Math.sin(this.factor * this.PIHalf);

      // check finished
      if (this.time > this.span) {
        this.active = false;
        this.time = 0;
      }
    }
  }
}

export { Transition };
