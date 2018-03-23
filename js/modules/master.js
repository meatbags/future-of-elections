import { Timer } from './timer';
import { Canvas } from './canvas';
import { Scene } from './scene';

class Master {
  constructor() {
    this.timer = new Timer();
    this.canvas = new Canvas();
    this.scene = new Scene();
    this.paused = false;
    this.loop();
  }

  update(delta) {
    this.scene.update(delta);
    this.canvas.draw(this.scene.actors, this.scene.particles);
  }

  loop() {
    if (!this.paused) {
      window.requestAnimationFrame(() => { this.loop(); });
      this.update(this.timer.update());
    }
  }
}

export { Master };
