import { Vector } from '../time';

class Actor {
  constructor(index, max) {
    this.scale = (window.innerWidth < 700) ? 0.75 : 1;
    this.path = (index % 2 == 0) ? 0 : 1;
    this.position = new Vector(0, 0);
    this.proxy = new Vector((this.path == 0) ? index / max : 1 - (index / max), index / max);
    this.speed = new Vector((this.path == 0) ? 0.008 : -0.008, 0.008);
  }

  setImage(im) {
    // set image and alt
    this.image = im.image;
    this.alt = im.alt;
  }

  update(delta, offsetSpeed) {
    // update proxy position (pre-transform)
    this.proxy.x += delta * (this.speed.x + offsetSpeed);
    this.proxy.y += delta * this.speed.y;
    this.proxy.x = (this.proxy.x > 1) ? this.proxy.x % 1 : ((this.proxy.x < 0) ? 1 - ((-1 * this.proxy.x) % 1) : this.proxy.x);
    this.proxy.y = (this.proxy.y > 1) ? this.proxy.y % 1 : this.proxy.y;
  }
}

export { Actor };
