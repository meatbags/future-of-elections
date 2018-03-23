const Random = (range) => {
  return Math.random() * range - range / 2;
}

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setVector(vec) {
    this.x = vec.x;
    this.y = vec.y;
  }
};

export { Random, Vector };
