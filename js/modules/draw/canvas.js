class Canvas {
  constructor() {
    // create canvas elements
    this.cvs = document.createElement('canvas');
    this.ctx = this.cvs.getContext('2d');
    this.resize();
    this.setStyle();
    document.body.appendChild(this.cvs);
    window.addEventListener('resize', () => { this.resize(); });
  }

  draw(actors, particles) {
    this.clear();
    for (var i=0, len=actors.length; i<len; ++i) {
      var actor = actors[i];
      var coords = this.toScreenSpace(actor.position);
      var legOffset = (actor.path == 0) ? -2 + 2 * Math.sin(actor.proxy.y * 550) : 2 - 2 * Math.sin(actor.proxy.y * 550);
      var w = actor.image.width;
      var h = actor.image.height;
      this.drawImage(actor.image, 100, 100); //coords.x - w/2, coords.y - h/2, w, h);
      this.drawImage(actor.alt, 200, 200); //coords.x + legOffset - w/2, coords.y - h/2, w, h);
    }
    this.ctx.fillStyle = '#222';
    for (var i=0, len=particles.length; i<len; ++i) {
      particles[i].draw(this.ctx);
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
  }

  drawImage(image, x, y, w, h) {
    this.ctx.drawImage(image, x, y, w, h);
  }

  toScreenSpace(vec) {
    // input range [0, 1]
    return {
      x: -500 + vec.x * 1000,
      y: -250 + vec.y * 500
    }
  }

  resize() {
    this.cvs.width = window.innerWidth;
    this.cvs.height = window.innerHeight;
    this.redrawOverlay = true;
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
