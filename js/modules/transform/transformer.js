import { Transition } from './transition';

class Transformer {
  constructor() {
    // section specific transforms
    this.transition = new Transition();
    this.baseline = 0.5;
    this.PI2 = Math.PI * 2;
    this.PIHalf = Math.PI / 2;
    window.addEventListener('hashchange', (e) => { this.onHashChange(); });
    this.section = 1;
    this.previous = 0;
    this.onHashChange();
  }

  setSection(section) {
    this.section = section;
  }

  trigger(next, previous) {
    this.section = next;
    this.previous = previous;
    this.transition.reset((previous < next) ? 1 : -1);
  }

  update(delta) {
    this.transition.update(delta);
  }

  getBoost() {
    return this.transition.getBoost();
  }

  getNextPosition(x, y, path) {
    if (this.transition.isActive()) {
      var a = this.getSectionTransform(x, y, path, this.section);
      var b = this.getSectionTransform(x, y, path, this.previous);
      a.x += (b.x - a.x) * this.transition.factorSmooth;
      a.y += (b.y - a.y) * this.transition.factorSmooth;
      return a;
    } else {
      return this.getSectionTransform(x, y, path, this.section);
    }
  }

  getSectionTransform(x, y, path, section) {
		// get scene position
    var factor = 0;
    var sign = (path == 0) ? -1 : 1;
    var p = {x: 0, y: 0};
    switch (section) {
      case 0:
      case 1:
        // flat layout
        p.y = this.baseline + sign * 0.05;
        p.x = x;
        break;
      case 2:
        // free & fair elections
        p.x = x;
        p.y = this.baseline + sign * 0.05;
        if (p.x > 0.25 && p.x < 0.75) {
            factor = (p.x - 0.25) * this.PI2;
            p.y += sign * 0.18 * Math.sin(factor);
        }
        break;
      case 3:
        // public passions
        p.y = this.baseline;
        var x1, x2, height;
        x1 = (path == 0) ? 0.2 : 0.3;
        x2 = (path == 0) ? 0.8 : 0.7;
        height = (path == 0) ? 0.3 : 0.2;
        if (x < 0.5) {
            p.x = x1 + (x / 0.5) * (x2 - x1);
            if (x < 0.25) {
              p.y -= height * (x / 0.25);
            } else {
              p.y -= height - height * ((x - 0.25) / 0.25);
            }
        } else {
          p.x = x2 - ((x - 0.5) / 0.5) * (x2 - x1);
          if (x < 0.75) {
            p.y += height * ((x - 0.5) / 0.25);
          } else {
            p.y += height - height * ((x - 0.75) / 0.25);
          }
        }
        break;
      case 4:
        // new ecologies
        if (x < 0.333) {
          factor = x * 3;
          p.x = -0.3 + factor * 0.3;
          p.y = 0.2 - factor * 0.5;
        } else if (x < 0.666) {
          factor = (x - 0.333) * 3;
          p.x = factor * 0.3;
          p.y = -0.3 + factor * 0.5;
        } else {
          factor = (x - 0.666) * 3;
          p.x = 0.3 - factor * 0.6;
          p.y = 0.2;
        }
        if (path == 0) {
          p.y = -(p.y - 0.05) * 0.5 + 0.05;
          p.x *= 0.5;
        }
        p.y += this.baseline;
        p.x += 0.5;
        break;
      case 5:
        // communicative
        p.x = x;
        p.y = this.baseline + ((path == 0) ? -0.05 : 0.05);
        if (p.x > 0.1 && p.x < 0.9) {
          factor = ((p.x - 0.1) * 1.25) * this.PI;
          p.y += 0.15 * Math.sin(factor * 3 * sign);
        }
        break;
      case 6:
        // philippines
        p.x = x;
        p.y = this.baseline + ((path == 0) ? 0.05 : 0.15);
        if (p.x > 0.15 && p.x < 0.85) {
          if (p.x < 0.5) {
            p.y -= (p.x - 0.15);
          } else {
            p.y -= (0.35 - (p.x - 0.5));
          }
        }
        break;
      case 7:
        // elections wo democracy
        p.x = x;
        p.y = (path == 0) ? p.x * 0.5 + 0.25 : (1.0 - p.x) * 0.5 + 0.25;
        break;
      case 8:
        // renewal
        p.x = x;
        p.y = this.baseline + ((path == 0) ? 0 : 0.1);
        if (p.x > 0.15 && p.x < 0.85) {
          factor = (p.x - 0.15) * 1.428 * this.PI;
          p.y += -0.25 * Math.sin(factor);
        }
        break;
      case 9:
        // spread of elections
        factor = (path == 0) ? 0.32 : 0.22;
        p.x = 0.5 + Math.cos(x * this.PI2 + this.PIHalf) * factor;
        p.y = this.baseline + Math.sin(x * this.PI2 + this.PIHalf) * factor;
        break;
      case 10:
        if (path == 0) {
          factor = Math.sin(this.PIHalf - x * this.PIHalf) * 0.21;
          p.x = 0.5 + Math.cos(3 * x * this.PI2 + this.PIHalf) * factor;
          p.y = this.baseline + Math.sin(3 * x * this.PI2 + this.PIHalf) * factor;
        } else {
          factor = 0.22;
          p.x = 0.5 + Math.cos(x * this.PI2 + this.PIHalf) * factor;
          p.y = this.baseline + Math.sin(x * this.PI2 + this.PIHalf) * factor;
        }
        break;
      case 11:
        // renewal of pp
        factor = (path == 0) ? 0.28 : 0.72;
        p.x = factor + Math.cos(x * this.PI2 + this.PIHalf) * 0.18;
        p.y = this.baseline + Math.sin(x * this.PI2 + this.PIHalf) * 0.18;
        break;
      case 12:
        // extending the franchise
        if (path == 0) {
          factor = 0.25;
          p.x = 0.5 + Math.cos(x * this.PI2 + this.PIHalf) * factor;
          p.y = this.baseline + Math.sin((x * this.PI2 + this.PIHalf) * 2) * factor;
        } else {
          factor = 0.15;
          p.x = 0.5 + Math.cos(x * this.PI2 + this.PIHalf) * factor;
          p.y = this.baseline + Math.sin((x * this.PI2 + this.PIHalf) * 2) * factor;
        }
        break;
      default:
        // fallback
        p.y = this.baseline + ((path == 0) ? -0.05 : 0.05);
        p.x = x;
    }
    return p;
  }

  onHashChange() {
    var location = window.location.pathname;
		if (location.includes("refiguring-elections")) {
			this.trigger(1, this.section);
		} else if (location.includes("free-fair-elections")) {
			this.trigger(2, this.section);
		} else if (location.includes("public-passions")) {
			this.trigger(3, this.section);
		} else if (location.includes("new-ecologies")) {
			this.trigger(4, this.section);
		} else if (location.includes("communicative-abundance")) {
			this.trigger(5, this.section);
		} else if (location.includes("philippines")) {
			this.trigger(6, this.section);
		} else if (location.includes("without-democracy")) {
			this.trigger(7, this.section);
		} else if (location.includes("signs-of-renewal")) {
			this.trigger(8, this.section);
		} else if (location.includes("joy-of-founding")) {
			this.trigger(10, this.section);
		} else if (location.includes("political-parties")) {
			this.trigger(11, this.section);
		} else if (location.includes("extending-the-franchise")) {
			this.trigger(12, this.section);
		} else {
			this.trigger(1, this.section);
		}
  }
}

export { Transformer };
