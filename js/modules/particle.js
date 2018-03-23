class Particle {
  constructor() {
    this.x = window.innerWidth * Math.random();
    this.y = window.innerHeight * Math.random();
    this.size = 0.8 * Math.random() * 1.5;
    this.dir = -Math.random() * Math.PI * 0.4;
    this.speed = Math.random() * 30 + 10;
    this.vec = {
      x: Math.cos(this.dir) * this.speed,
      y: -Math.sin(this.dir) * this.speed
    };
  }

  update(delta) {
    this.x = (this.x + this.vec.x * delta) % window.innerWidth;
    this.y = (this.y + this.vec.y * delta) % window.innerHeight;
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

export { Particle };
