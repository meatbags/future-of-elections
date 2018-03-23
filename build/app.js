var stk =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timer = __webpack_require__(5);

Object.keys(_timer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _timer[key];
    }
  });
});

var _maths = __webpack_require__(6);

Object.keys(_maths).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _maths[key];
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _canvas = __webpack_require__(7);

Object.keys(_canvas).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _canvas[key];
    }
  });
});

var _images = __webpack_require__(8);

Object.keys(_images).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _images[key];
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modules = __webpack_require__(3);

var Module = _interopRequireWildcard(_modules);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
  _classCallCheck(this, App);

  this.master = new Module.Master();
};

window.onload = function () {
  var app = new App();
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _master = __webpack_require__(4);

Object.keys(_master).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _master[key];
    }
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Master = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _time = __webpack_require__(0);

var _draw = __webpack_require__(1);

var _scene = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Master = function () {
  function Master() {
    _classCallCheck(this, Master);

    this.timer = new _time.Timer();
    this.canvas = new _draw.Canvas();
    this.scene = new _scene.Scene();
    this.paused = false;
    this.loop();
  }

  _createClass(Master, [{
    key: 'update',
    value: function update(delta) {
      this.scene.update(delta);
      this.canvas.draw(this.scene.actors, this.scene.particles);
    }
  }, {
    key: 'loop',
    value: function loop() {
      var _this = this;

      if (!this.paused) {
        window.requestAnimationFrame(function () {
          _this.loop();
        });
        this.update(this.timer.update());
      }
    }
  }]);

  return Master;
}();

exports.Master = Master;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function () {
  function Timer() {
    _classCallCheck(this, Timer);

    this.time = new Date().getTime();
  }

  _createClass(Timer, [{
    key: "update",
    value: function update() {
      var t = new Date().getTime();
      var delta = (t - this.time) / 1000.0;
      this.time = t;
      return delta;
    }
  }]);

  return Timer;
}();

exports.Timer = Timer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Random = function Random(range) {
  return Math.random() * range - range / 2;
};

var Vector = function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "setVector",
    value: function setVector(vec) {
      this.x = vec.x;
      this.y = vec.y;
    }
  }]);

  return Vector;
}();

;

exports.Random = Random;
exports.Vector = Vector;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
  function Canvas() {
    var _this = this;

    _classCallCheck(this, Canvas);

    // create canvas elements
    this.cvs = document.createElement('canvas');
    this.ctx = this.cvs.getContext('2d');
    this.resize();
    this.setStyle();
    document.body.appendChild(this.cvs);
    window.addEventListener('resize', function () {
      _this.resize();
    });
    for (var i = 0; i < 10; i++) {
      setTimeout(function () {
        _this.increaseOpacity();
      }, i * 50);
    }
  }

  _createClass(Canvas, [{
    key: 'increaseOpacity',
    value: function increaseOpacity() {
      this.cvs.style.opacity = this.cvs.style.opacity + 0.075; // final 0.75
    }
  }, {
    key: 'draw',
    value: function draw(actors, particles) {
      this.clear();
      for (var i = 0, len = actors.length; i < len; ++i) {
        // get actor screen position, render
        var actor = actors[i];
        var coords = this.toScreenSpace(actor.position);
        var legOffset = actor.path == 0 ? -2 + 2 * Math.sin(actor.proxy.y * 550) : 2 - 2 * Math.sin(actor.proxy.y * 550);
        var w = actor.image.width * actor.scale;
        var h = actor.image.height * actor.scale;
        if (actor.position.x < 0.05 || actor.position.x > 0.95) {
          this.ctx.globalAlpha = actor.position.x < 0.05 ? actor.position.x / 0.05 : 1 - (actor.position.x - 0.95) / 0.05;
        } else {
          this.ctx.globalAlpha = 1;
        }
        this.drawImage(actor.image, coords.x - w / 2, coords.y - h / 2, w, h);
        this.drawImage(actor.alt, coords.x + legOffset - w / 2, coords.y - h / 2, w, h);
      }
      this.ctx.globalAlpha = 1;
      this.ctx.fillStyle = '#888';
      for (var i = 0, len = particles.length; i < len; ++i) {
        particles[i].draw(this.ctx);
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
    }
  }, {
    key: 'drawImage',
    value: function drawImage(image, x, y, w, h) {
      this.ctx.drawImage(image, x, y, w, h);
    }
  }, {
    key: 'toScreenSpace',
    value: function toScreenSpace(vec) {
      // input range [0, 1]
      return {
        x: this.centreX - this.centreRadiusX + vec.x * this.centreSpanX,
        y: this.centreY - this.centreRadiusY + vec.y * this.centreSpanY
      };
    }
  }, {
    key: 'resize',
    value: function resize() {
      this.cvs.width = window.innerWidth;
      this.cvs.height = window.innerHeight;
      // set scene dimensions
      this.centreX = window.innerWidth / 2;
      this.centreY = window.innerHeight / 2;
      this.centreSpanX = window.innerWidth < 700 ? 450 : 1000;
      this.centreSpanY = this.centreSpanX / 2;
      this.centreRadiusX = this.centreSpanX / 2;
      this.centreRadiusY = this.centreSpanY / 2;
    }
  }, {
    key: 'setStyle',
    value: function setStyle() {
      this.cvs.style.opacity = 0;
      this.cvs.style.position = 'fixed';
      this.cvs.style.top = 0;
      this.cvs.style.left = 0;
      this.cvs.style.zIndex = 10; // NOTE: bridge theme .wrapper z is 1000
      this.cvs.style.pointerEvents = 'none';
      this.cvs.style.width = '100vw';
      this.cvs.style.height = '100vh';
    }
  }]);

  return Canvas;
}();

exports.Canvas = Canvas;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Images = function () {
  function Images() {
    _classCallCheck(this, Images);

    // load images
    this.path = templateDirectory + '/future-of-elections/images/';
    this.images = [];
    this.load();
  }

  _createClass(Images, [{
    key: "loadImage",
    value: function loadImage(src) {
      var _this = this;

      var im = new Image();
      im.onload = function () {
        _this.hasLoaded += 1;
        if (_this.toLoad <= _this.hasLoaded) {
          _this.loaded = true;
        }
      };
      im.src = this.path + src;
      this.images.push(im);
    }
  }, {
    key: "getRandomImage",
    value: function getRandomImage(index) {
      var base = Math.floor(Math.random() * 4) * 2;
      var row = index % 2 == 0 ? 8 : 0;
      return {
        image: this.images[base + row],
        alt: this.images[base + row + 1]
      };
    }
  }, {
    key: "isLoaded",
    value: function isLoaded() {
      return this.loaded;
    }
  }, {
    key: "load",
    value: function load() {
      this.loaded = false;
      this.toLoad = 16;
      this.hasLoaded = 0;
      this.loadImage("figure_1_L_1.png"), this.loadImage("figure_1_L_2.png"), this.loadImage("figure_2_L_1.png"), this.loadImage("figure_2_L_2.png"), this.loadImage("figure_3_L_1.png"), this.loadImage("figure_3_L_2.png"), this.loadImage("figure_4_L_1.png"), this.loadImage("figure_4_L_2.png"), this.loadImage("figure_1_R_1.png"), this.loadImage("figure_1_R_2.png"), this.loadImage("figure_2_R_1.png"), this.loadImage("figure_2_R_2.png"), this.loadImage("figure_3_R_1.png"), this.loadImage("figure_3_R_2.png"), this.loadImage("figure_4_R_1.png"), this.loadImage("figure_4_R_2.png");
    }
  }]);

  return Images;
}();

exports.Images = Images;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scene = __webpack_require__(10);

Object.keys(_scene).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scene[key];
    }
  });
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scene = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _actor = __webpack_require__(11);

var _particle = __webpack_require__(12);

var _transform = __webpack_require__(13);

var _draw = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
  function Scene() {
    _classCallCheck(this, Scene);

    this.images = new _draw.Images();
    this.transformer = new _transform.Transformer();
    this.initScene();
  }

  _createClass(Scene, [{
    key: 'initScene',
    value: function initScene() {
      // create crowd and particles
      var n = 80;
      this.actors = [];
      for (var i = 0; i < n; ++i) {
        var actor = new _actor.Actor(i, n);
        actor.setImage(this.images.getRandomImage(i));
        this.actors.push(actor);
      }
      n = 30;
      this.particles = [];
      for (var i = 0; i < n; i++) {
        this.particles.push(new _particle.Particle());
      }
    }
  }, {
    key: 'update',
    value: function update(delta) {
      // set transitions
      this.transformer.update(delta);
      var boost = this.transformer.getBoost();
      // move particles and actors
      for (var i = 0, len = this.particles.length; i < len; ++i) {
        this.particles[i].update(delta);
      }
      for (var i = 0, len = this.actors.length; i < len; ++i) {
        var actor = this.actors[i];
        actor.update(delta, this.transformer.getBoost());
        actor.position.setVector(this.transformer.getNextPosition(actor.proxy.x, actor.proxy.y, actor.path));
      }
    }
  }]);

  return Scene;
}();

exports.Scene = Scene;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Actor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _time = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function () {
  function Actor(index, max) {
    _classCallCheck(this, Actor);

    this.scale = window.innerWidth < 700 ? 0.75 : 1;
    this.path = index % 2 == 0 ? 0 : 1;
    this.position = new _time.Vector(0, 0);
    this.proxy = new _time.Vector(this.path == 0 ? index / max : 1 - index / max, index / max);
    this.speed = new _time.Vector(this.path == 0 ? 0.008 : -0.008, 0.008);
  }

  _createClass(Actor, [{
    key: 'setImage',
    value: function setImage(im) {
      // set image and alt
      this.image = im.image;
      this.alt = im.alt;
    }
  }, {
    key: 'update',
    value: function update(delta, offsetSpeed) {
      // update proxy position (pre-transform)
      this.proxy.x += delta * (this.speed.x + offsetSpeed);
      this.proxy.y += delta * this.speed.y;
      this.proxy.x = this.proxy.x > 1 ? this.proxy.x % 1 : this.proxy.x < 0 ? 1 - -1 * this.proxy.x % 1 : this.proxy.x;
      this.proxy.y = this.proxy.y > 1 ? this.proxy.y % 1 : this.proxy.y;
    }
  }]);

  return Actor;
}();

exports.Actor = Actor;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Particle = function () {
  function Particle() {
    _classCallCheck(this, Particle);

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

  _createClass(Particle, [{
    key: "update",
    value: function update(delta) {
      this.x = (this.x + this.vec.x * delta) % window.innerWidth;
      this.y = (this.y + this.vec.y * delta) % window.innerHeight;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.fillRect(this.x, this.y, this.size, this.size);
    }
  }]);

  return Particle;
}();

exports.Particle = Particle;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transformer = __webpack_require__(14);

Object.keys(_transformer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _transformer[key];
    }
  });
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transformer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transition = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transformer = function () {
  function Transformer() {
    var _this = this;

    _classCallCheck(this, Transformer);

    // section specific transforms
    this.transition = new _transition.Transition();
    this.baseline = 0.5;
    this.PI2 = Math.PI * 2;
    this.PIHalf = Math.PI / 2;
    jQuery('.menu-item a').on('click', function (e) {
      //console.log(e);
      _this.parseText(e.currentTarget.href, false);
    });
    jQuery(window).on('hashchange', function () {
      _this.onHashChange();
    });
    this.section = 1;
    this.previous = 0;
    this.onHashChange();
  }

  _createClass(Transformer, [{
    key: 'trigger',
    value: function trigger(next, previous) {
      this.section = next;
      this.previous = previous;
      this.transition.reset(previous < next ? 1 : -1);
    }
  }, {
    key: 'update',
    value: function update(delta) {
      this.transition.update(delta);
    }
  }, {
    key: 'getBoost',
    value: function getBoost() {
      return this.transition.getBoost();
    }
  }, {
    key: 'getNextPosition',
    value: function getNextPosition(x, y, path) {
      if (this.transition.isActive()) {
        var a = this.getSectionTransform(x, y, path, this.section);
        var b = this.getSectionTransform(x, y, path, this.previous);
        a.x += (b.x - a.x) * (1 - this.transition.factorSmooth);
        a.y += (b.y - a.y) * (1 - this.transition.factorSmooth);
        return a;
      } else {
        return this.getSectionTransform(x, y, path, this.section);
      }
    }
  }, {
    key: 'getSectionTransform',
    value: function getSectionTransform(x, y, path, section) {
      // get scene position
      var factor = 0;
      var sign = path == 0 ? -1 : 1;
      var p = { x: 0, y: 0 };

      switch (section) {
        case 0:case 1:
          // flat layout
          p.x = x;
          p.y = this.baseline + sign * 0.05;
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
          x1 = path == 0 ? 0.2 : 0.3;
          x2 = path == 0 ? 0.8 : 0.7;
          height = path == 0 ? 0.3 : 0.2;
          if (x < 0.5) {
            p.x = x1 + x / 0.5 * (x2 - x1);
            if (x < 0.25) {
              p.y -= height * (x / 0.25);
            } else {
              p.y -= height - height * ((x - 0.25) / 0.25);
            }
          } else {
            p.x = x2 - (x - 0.5) / 0.5 * (x2 - x1);
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
          p.y = this.baseline + (path == 0 ? -0.05 : 0.05);
          if (p.x > 0.1 && p.x < 0.9) {
            factor = (p.x - 0.1) * 1.25 * Math.PI;
            p.y += 0.15 * Math.sin(factor * 3 * sign);
          }
          break;
        case 6:
          // philippines
          p.x = x;
          p.y = this.baseline + (path == 0 ? 0.05 : 0.15);
          if (p.x > 0.15 && p.x < 0.85) {
            if (p.x < 0.5) {
              p.y -= p.x - 0.15;
            } else {
              p.y -= 0.35 - (p.x - 0.5);
            }
          }
          break;
        case 7:
          // elections wo democracy
          p.x = x;
          p.y = path == 0 ? p.x * 0.5 + 0.25 : (1.0 - p.x) * 0.5 + 0.25;
          break;
        case 8:
          // renewal
          p.x = x;
          p.y = this.baseline + (path == 0 ? 0 : 0.1);
          if (p.x > 0.15 && p.x < 0.85) {
            factor = (p.x - 0.15) * 1.428 * Math.PI;
            p.y += -0.25 * Math.sin(factor);
          }
          break;
        case 9:
          // spread of elections
          factor = path == 0 ? 0.32 : 0.22;
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
          factor = path == 0 ? 0.28 : 0.72;
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
          p.y = this.baseline + (path == 0 ? -0.05 : 0.05);
          p.x = x;
          break;
      }

      return p;
    }
  }, {
    key: 'parseText',
    value: function parseText(text, strict) {
      if (text.includes("refiguring-elections")) {
        this.trigger(1, this.section);
      } else if (text.includes("free-fair-elections")) {
        this.trigger(2, this.section);
      } else if (text.includes("public-passions")) {
        this.trigger(3, this.section);
      } else if (text.includes("new-ecologies")) {
        this.trigger(4, this.section);
      } else if (text.includes("communicative-abundance")) {
        this.trigger(5, this.section);
      } else if (text.includes("philippines")) {
        this.trigger(6, this.section);
      } else if (text.includes("without-democracy")) {
        this.trigger(7, this.section);
      } else if (text.includes("signs-of-renewal")) {
        this.trigger(8, this.section);
      } else if (text.includes("joy-of-founding")) {
        this.trigger(10, this.section);
      } else if (text.includes("political-parties")) {
        this.trigger(11, this.section);
      } else if (text.includes("extending-the-franchise")) {
        this.trigger(12, this.section);
      } else if (strict) {
        this.trigger(1, this.section);
      }
    }
  }, {
    key: 'onHashChange',
    value: function onHashChange() {
      this.parseText(window.location.pathname, true);
    }
  }, {
    key: 'test',
    value: function test() {
      this.trigger((this.section + 1) % 13, this.section);
    }
  }]);

  return Transformer;
}();

exports.Transformer = Transformer;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transition = function () {
  function Transition() {
    _classCallCheck(this, Transition);

    this.active = false;
    this.span = 2;
    this.time = 0;
    this.factor = 0;
    this.factorSin = 0;
    this.factorSmooth = 0;
    this.speedIncrease = 0.25;
    this.direction = 1;
    this.PIHalf = Math.PI / 2;
  }

  _createClass(Transition, [{
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "reset",
    value: function reset(direction) {
      this.active = true;
      this.time = 0;
      this.direction = direction;
    }
  }, {
    key: "getBoost",
    value: function getBoost() {
      return this.active ? this.factorSin * this.speedIncrease * this.direction : 0;
    }
  }, {
    key: "update",
    value: function update(delta) {
      if (this.active) {
        this.time += delta;
        this.factor = this.time / this.span;
        this.factorSin = Math.sin(this.factor * Math.PI);
        this.factorSmooth = Math.sin(this.factor * this.PIHalf);

        // check finished
        if (this.time > this.span) {
          this.active = false;
          this.time = 0;
        }
      }
    }
  }]);

  return Transition;
}();

exports.Transition = Transition;

/***/ })
/******/ ]);