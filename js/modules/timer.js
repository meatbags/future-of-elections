class Timer {
  constructor() {
    this.time = (new Date()).getTime();
  }

  update() {
    var t = (new Date()).getTime();
    var delta = (t - this.time) / 1000.0;
    this.time = t;
    return delta;
  }
}

export { Timer };
