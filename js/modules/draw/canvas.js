class Canvas {
  constructor() {
    // create canvas elements
    this.cvs = document.createElement('canvas');
    this.ctx = this.cvs.getContext('2d');
    this.resize();
    this.setStyle();
    document.body.appendChild(this.cvs);
    window.addEventListener('resize', () => {
      this.resize();
    });
  }

  draw(actors, particles) {
    this.clear();
    this.ctx.fillStyle = '#f00';
    for (var i=0, len=particles.length; i<len; ++i) {
      particles[i].draw(this.ctx);
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
  }

  drawImage(image, x, y, w, h) {
    this.cvs.drawImage(image, x, y, w, h);
  }

  toScreenSpace(x, y) {
    // input range [0, 1]
    return {
      x: -500 + x * 1000,
      y: -250 + y * 500
    }
  }

  resize() {
    this.cvs.width = window.innerWidth;
    this.cvs.height = window.innerHeight;
  }

  setStyle() {
    this.cvs.style.position = 'fixed';
    this.cvs.style.top = 0;
    this.cvs.style.left = 0;
    this.cvs.style.border = '1px solid red';
    this.cvs.style.zIndex = 9999;
    this.cvs.style.pointerEvents = 'none';
  }
}

export { Canvas };
