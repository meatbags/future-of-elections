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

  fadeIn() {
    jQuery('canvas').css({opacity: 0.75});
  }

  draw(actors, particles) {
    this.clear();
    for (var i=0, len=actors.length; i<len; ++i) {
      // get actor screen position, render
      var actor = actors[i];
      var coords = this.toScreenSpace(actor.position);
      var legOffset = (actor.path == 0) ? -2 + 2 * Math.sin(actor.proxy.y * 550) : 2 - 2 * Math.sin(actor.proxy.y * 550);
      var w = actor.image.width * actor.scale;
      var h = actor.image.height * actor.scale;
      if (actor.position.x < 0.05 || actor.position.x > 0.95) {
        this.ctx.globalAlpha = (actor.position.x < 0.05) ? actor.position.x / 0.05 : 1 - (actor.position.x - 0.95) / 0.05;
      } else {
        this.ctx.globalAlpha = 1;
      }
      this.drawImage(actor.image, coords.x - w/2, coords.y - h/2, w, h);
      this.drawImage(actor.alt, coords.x + legOffset - w/2, coords.y - h/2, w, h);
    }
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = '#888';
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
      x: this.centreX - this.centreRadiusX + vec.x * this.centreSpanX,
      y: this.centreY - this.centreRadiusY + vec.y * this.centreSpanY
    }
  }

  resize() {
    this.cvs.width = window.innerWidth;
    this.cvs.height = window.innerHeight;
    // set scene dimensions
    this.centreX = window.innerWidth / 2;
    this.centreY = window.innerHeight / 2;
    this.centreSpanX = (window.innerWidth < 700) ? 450 : 1000;
    this.centreSpanY = this.centreSpanX / 2;
    this.centreRadiusX = this.centreSpanX / 2;
    this.centreRadiusY = this.centreSpanY / 2;
  }

  setStyle() {
    this.cvs.style.opacity = 0;
    this.cvs.style.transition = 'opacity 1s';
    this.cvs.style.position = 'fixed';
    this.cvs.style.top = 0;
    this.cvs.style.left = 0;
    this.cvs.style.zIndex = 10; // NOTE: bridge theme .wrapper z is 1000
    this.cvs.style.pointerEvents = 'none';
    this.cvs.style.width = '100vw';
    this.cvs.style.height = '100vh';
  }
}

export { Canvas };
