import { Timer } from './time';
import { Canvas } from './draw';
import { Scene } from './scene';

class Master {
  constructor() {
    this.timer = new Timer();
    this.canvas = new Canvas();
    this.scene = new Scene();
    this.paused = false;
    this.loading();
  }

  update(delta) {
    this.scene.update(delta);
    this.canvas.draw(this.scene.actors, this.scene.particles);
  }

  loading() {
    // wait until loaded
    if (!this.scene.isLoaded()) {
      window.requestAnimationFrame(() => { this.loading(); });
    } else {
      this.canvas.fadeIn();
      this.loop();
    }
  }

  loop() {
    if (!this.paused) {
      window.requestAnimationFrame(() => { this.loop(); });
      this.update(this.timer.update());
    }
  }
}

export { Master };
