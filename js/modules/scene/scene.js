import { Actor } from './actor';
import { Particle } from './particle';
import { Transformer } from './transformer';
import { Images } from './images';

class Scene {
  constructor() {
    this.images = new Images();
    this.transformer = new Transformer();
    this.initScene();
  }

  initScene() {
    // create crowd and particles
    var n = 80;
    this.actors = [];
    for (var i=0; i<n; i++) {
      var actor = new Actor(i, n);
      actor.setImage(this.images.getRandomImage(i));
      this.actors.push(actor);
    }
    this.particles = [];
    for (var i=0; i<n; i++) {
      this.particles.push(new Particle());
    }
  }
  
  update(delta) {
    // set transitions
    this.transformer.update();
    var boost = this.transformer.getBoost();
    // move particles and actors
    for (var i=0, len=this.particles.length; i<len; ++i) {
      this.particles[i].update(delta);
    }
    for (var i=0, len=this.actors.length; i<len; ++i) {
      var actor = this.actors[i];
      actor.update(delta, boost);
      actor.position.set(
        this.transformer.getNextPosition(actor.proxy.x, actor.proxy.y, actor.path)
      );
    }
  }
}

export { Scene };
