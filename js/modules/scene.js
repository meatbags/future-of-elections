import { Actor } from './actor';
import { Particle } from './particle';

class Scene {
  constructor() {
    this.initScene();
  }

  initScene() {
    // create crowd and particles
    var n = 80;
    this.actors = [];
    for (var i=0; i<n; i++) {
      this.actors.push(new Actor(i, n));
    }
    this.particles = [];
    for (var i=0; i<n; i++) {
      this.particles.push(new Particle());
    }
  }

  update(delta) {
    for (var i=0, len=this.particles.length; i<len; ++i) {
      this.particles[i].update(delta);
    }
  }
}

export { Scene };
