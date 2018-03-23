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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modules = __webpack_require__(1);

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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _master = __webpack_require__(3);

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
/* 2 */
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
  }

  _createClass(Canvas, [{
    key: 'draw',
    value: function draw(actors, particles) {
      this.clear();
      this.ctx.fillStyle = '#f00';
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
      this.cvs.drawImage(image, x, y, w, h);
    }
  }, {
    key: 'toScreenSpace',
    value: function toScreenSpace(x, y) {
      // x, y [0, 1]
      return {
        x: -500 + x * 1000,
        y: -250 + y * 500
      };
    }
  }, {
    key: 'resize',
    value: function resize() {
      this.cvs.width = window.innerWidth;
      this.cvs.height = window.innerHeight;
    }
  }, {
    key: 'setStyle',
    value: function setStyle() {
      this.cvs.style.position = 'fixed';
      this.cvs.style.top = 0;
      this.cvs.style.left = 0;
      this.cvs.style.border = '1px solid red';
      this.cvs.style.zIndex = 9999;
      this.cvs.style.pointerEvents = 'none';
    }
  }]);

  return Canvas;
}();

exports.Canvas = Canvas;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Master = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _timer = __webpack_require__(4);

var _canvas = __webpack_require__(2);

var _scene = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Master = function () {
  function Master() {
    _classCallCheck(this, Master);

    this.timer = new _timer.Timer();
    this.canvas = new _canvas.Canvas();
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scene = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _actor = __webpack_require__(6);

var _particle = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
  function Scene() {
    _classCallCheck(this, Scene);

    this.initScene();
  }

  _createClass(Scene, [{
    key: 'initScene',
    value: function initScene() {
      // create crowd and particles
      var n = 80;
      this.actors = [];
      for (var i = 0; i < n; i++) {
        this.actors.push(new _actor.Actor(i, n));
      }
      this.particles = [];
      for (var i = 0; i < n; i++) {
        this.particles.push(new _particle.Particle());
      }
    }
  }, {
    key: 'update',
    value: function update(delta) {
      for (var i = 0, len = this.particles.length; i < len; ++i) {
        this.particles[i].update(delta);
      }
    }
  }]);

  return Scene;
}();

exports.Scene = Scene;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(index, max) {
  _classCallCheck(this, Actor);
};

exports.Actor = Actor;

/***/ }),
/* 7 */
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

/***/ })
/******/ ]);