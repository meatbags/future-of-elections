var App = {
	init: function() {
		App.section = {
			current: 1,
			previous: 0
		};
    App.transition = {
        active: false,
        span: 2.,
        time: 0,
        factor: 0,
        factorSin: 0,
        factorSmooth: 0,
        speedIncrease: 0.25,
        direction: 1,
        update: function(deltaTime) {
            // smooth transitions

            App.transition.time += deltaTime;
            App.transition.factor = App.transition.time / App.transition.span;
            App.transition.factorSin = Math.sin(App.transition.factor * Math.PI);
            App.transition.factorSmooth = Math.sin(App.transition.factor * App.PIHalf);

            // check if done

            if (App.transition.time > App.transition.span) {
                App.transition.active = false;
                App.transition.time   = 0;
            }
        },
        reset: function(dir) {
            App.transition.active = true;
            App.transition.direction = dir;
            App.transition.time = 0;
        }
    };

    // vertical centre

    App.graphic = { baseline: 0.5 };

    // generate scene

    var count = 80;

		App.actors = [];
    App.particles = [];

    for (var i=0; i<count; i++)
        App.actors.push(App.createActor(i, count));
    for (var i=0; i<30; i++)
        App.particles.push(App.createParticle());

		// hashchange

		$(window).on('hashchange', function (e) {
			App.hashChange();
		}).trigger('hashchange');

		App.loop();
	},

	loop: function() {
		var self;

		self = App;
		self.tick = 0;

		if (!self.paused) {
			requestAnimFrame(App.loop);

			// get delta time for smooth rendering

			var d = new Date();
			self.timer.now = d.getTime();
			self.timer.delta = (self.timer.now - self.timer.then) * self.timer.toSec;

			// preserve frame-rate

			if (self.timer.delta >= self.interval)
			{
				self.timer.then = self.timer.now;
				self.update(self.timer.delta, self.section.current, self.section.previous);
				self.draw(self.forceDraw, self.section.current);
				self.forceDraw = false;
			}
		}
	},

	update: function(delta, current, previous){
		App.tick += delta;

        // tween

        if (App.transition.active == true)
            App.transition.update(delta);

        // particles

        for (var i=0; i<App.particles.length; i+=1)
            App.particles[i].update(delta);

        // figures

        if (App.transition.active) {
            for (var i=0; i<App.actors.length; i+=1) {
                App.actors[i].updateTransition(delta, current, previous);
			}
		} else {
            for (var i=0; i<App.actors.length; i+=1) {
                App.actors[i].update(delta, current);
			}
        }
	},

	draw: function() {
		var cvs, ctx, scale;

        // render fog

        if (App.forceDraw) {
            var grad;

            // clear middle canvas

            cvs = Canvas.cvs.mid;
            ctx = Canvas.ctx.mid;
            Canvas.clear(cvs, ctx);
            ctx.globalAlpha = 1;

            // render radial vignette

            grad = ctx.createRadialGradient(
                Canvas.centre.x,
                Canvas.centre.y,
                Canvas.centre.halfWidth / 2,
                Canvas.centre.x,
                Canvas.centre.y,
                Canvas.centre.halfWidth - Canvas.centre.bufferZone
            );
            grad.addColorStop(0, "rgba(250, 250, 255, 0)");
            grad.addColorStop(1, "rgba(238, 238, 245, 1)");
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, Canvas.cvs.mid.width, Canvas.cvs.mid.height);
        }

        // clear background (main) canvas

        cvs = Canvas.cvs.back;
        ctx = Canvas.ctx.back;
        Canvas.clear(cvs, ctx);

        // set canvas and draw figures

        ctx.fillStyle = "#444";
        scale = (App.mode == "desktop") ? 1 : 0.5;

        if (App.loaded) {
            for (var i=0; i<App.actors.length; i+=1) {
                App.actors[i].draw(ctx, scale);
			}
		}

		Canvas.ctx.back.fillText(App.tick, 10, 10);
	},

	triggerAnimation: function(next, prev) {
		App.transition.reset((prev < next) ? 1 : -1);
		App.section.current = next;
		App.section.previous = prev;
  },

	resize: function() {
		Canvas.resize();
		App.forceDraw = true;
	},

	loadImage: function(filename){
        var self = this;

		// load image from file

        var im = new Image;
        im.src = self.imagePath + filename;
        im.onload = function() {
            self.assetsLoaded += 1;
            if (self.assetsToLoad <= self.assetsLoaded) {
                self.loaded = true;
                //console.log("Images loaded.");
            }
        }

        return im;
    },

	loadedStatus: function(){
        var self = this;

		// check if images loaded

        if (self.assetsLoaded >= self.assetsToLoad) {
            return true;
        }
        return false;
    },

	getLoadingPercent: function(){
        // get percentage loaded

        var percent = 0;

        if (self.assetsToLoad != 0)
            percent = Math.floor(100 * (self.assetsLoaded / self.assetsToLoad));

        return percent;
    },

	getSectionTransition: function(x, y, path, currentSection, previousSection){
        var self = this;

		// get tweening factor

        var p0, p1;

        p0 = self.getSectionTransform(x, y, path, previousSection);
        p1 = self.getSectionTransform(x, y, path, currentSection);
        p0.x += (p1.x - p0.x) * self.transition.factorSmooth;
        p0.y += (p1.y - p0.y) * self.transition.factorSmooth;

        return p0;
    },

	hashChange: function() {
		var hash = window.location.pathname;

		if (hash.includes("refiguring-elections")) {
			App.triggerAnimation(1, App.section.current);
		}
		else if (hash.includes("free-fair-elections")) {
			App.triggerAnimation(2, App.section.current);
		}
		else if (hash.includes("public-passions")) {
			App.triggerAnimation(3, App.section.current);
		}
		else if (hash.includes("new-ecologies")) {
			App.triggerAnimation(4, App.section.current);
		}
		else if (hash.includes("communicative-abundance")) {
			App.triggerAnimation(5, App.section.current);
		}
		else if (hash.includes("philippines")) {
			App.triggerAnimation(6, App.section.current);
		}
		else if (hash.includes("without-democracy")) {
			App.triggerAnimation(7, App.section.current);
		}
		else if (hash.includes("signs-of-renewal")) {
			App.triggerAnimation(8, App.section.current);
		}
		else if (hash.includes("joy-of-founding")) {
			App.triggerAnimation(10, App.section.current);
		}
		else if (hash.includes("political-parties")) {
			App.triggerAnimation(11, App.section.current);
		}
		else if (hash.includes("extending-the-franchise")) {
			App.triggerAnimation(12, App.section.current);
		}
		else {
			App.triggerAnimation(1, App.section.current);
		}
	},

	getSectionTransform: function(x, y, path, currentSection){
        var self = this;

		// get custom scene positions

        var p, factor;

        p = {x:0, y:0};

        // main title

        if (currentSection <= 1) {
            p.y = self.graphic.baseline + ((path == 0) ? -0.05 : 0.05);
            p.x = x;
        }

        // free & fair elections

        else if (currentSection == 2) {
            p.x = x;
            p.y = self.graphic.baseline + ((path == 0) ? -0.05 : 0.05);

            if (p.x > 0.25 && p.x < 0.75) {
                factor = (p.x - 0.25) * self.PI2;
                p.y += ((path == 1) ? 0.18 : -0.18) * Math.sin(factor);
            }
        }

        // public passions

        else if (currentSection == 3) {
            p.y = self.graphic.baseline;

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
        }

        // new ecologies

        else if (currentSection == 4) {
            if (x < 0.333) {
                factor = x * 3;
                p.x = -0.3 + factor * 0.3;
                p.y = 0.2 - factor * 0.5;
            }
            else if (x < 0.666)
            {
                factor = (x - 0.333) * 3;
                p.x = factor * 0.3;
                p.y = -0.3 + factor * 0.5;
            }
            else {
                factor = (x - 0.666) * 3;
                p.x = 0.3 - factor * 0.6;
                p.y = 0.2;
            }

            if (path == 0) {
                p.y = -(p.y - 0.05) * 0.5 + 0.05;
                p.x *= 0.5;
            }

            p.y += self.graphic.baseline;
            p.x += 0.5;

        }

        // communication

        else if (currentSection == 5) {
            p.x = x;
            p.y = self.graphic.baseline + ((path == 0) ? -0.05 : 0.05);

            if (p.x > 0.1 && p.x < 0.9) {
                factor = ((p.x - 0.1) * 1.25) * self.PI;
                p.y += ((path == 0) ?
                    0.15 * Math.sin(factor * 3) :
                    0.15 * Math.sin(factor * -3)
                );
            }
        }

        // philippines

        else if (currentSection == 6) {
            p.x = x;
            p.y = self.graphic.baseline + ((path == 0) ? 0.05 : 0.15);

            if (p.x > 0.15 && p.x < 0.85) {
                if (p.x < 0.5)
                    p.y -= (p.x - 0.15);
                else
                    p.y -= (0.35 - (p.x - 0.5));
            }
        }

        // elections without democracy

        else if (currentSection == 7) {
            p.x = x;
            p.y = (path == 0) ? p.x * 0.5 + 0.25 : (1.0 - p.x) * 0.5 + 0.25;
        }

        // renewal

        else if (currentSection == 8) {
            p.x = x;
            p.y = self.graphic.baseline + ((path == 0) ? 0 : 0.1);

            if (p.x > 0.15 && p.x < 0.85) {
                factor = (p.x - 0.15) * 1.428 * self.PI;
                p.y   += -0.25 * Math.sin(factor);
            }
        }

        // spread of elections

        else if (currentSection == 9) {
            factor = (path == 0) ? 0.32 : 0.22;

            p.x = 0.5 + Math.cos(x * self.PI2 + self.PIHalf) * factor;
            p.y = self.graphic.baseline + Math.sin(x * self.PI2 + self.PIHalf) * factor;
        }

        // joy of founding

        else if (currentSection == 10) {
            if (path == 0) {
                factor = Math.sin(self.PIHalf - x * self.PIHalf) * 0.21;
                p.x = 0.5 + Math.cos(3 * x * self.PI2 + self.PIHalf) * factor;
                p.y = self.graphic.baseline + Math.sin(3 * x * self.PI2 + self.PIHalf) * factor;
            } else {
                factor = 0.22;
                p.x = 0.5 + Math.cos(x * self.PI2 + self.PIHalf) * factor;
                p.y = self.graphic.baseline + Math.sin(x * self.PI2 + self.PIHalf) * factor;
            }

        }

        // renewal of pp

        else if (currentSection == 11) {
            factor = (path == 0) ? 0.28 : 0.72;

            p.x = factor + Math.cos(x * self.PI2 + self.PIHalf) * 0.18;
            p.y = self.graphic.baseline + Math.sin(x * self.PI2 + self.PIHalf) * 0.18;
        }

        // extending the franchise

        else if (currentSection == 12) {
            if (path == 0) {
                factor = 0.25;
                p.x = 0.5 + Math.cos(x * self.PI2 + self.PIHalf) * factor;
                p.y = self.graphic.baseline + Math.sin((x * self.PI2 + self.PIHalf) * 2) * factor;
            } else {
                factor = 0.15;
                p.x = 0.5 + Math.cos(x * self.PI2 + self.PIHalf) * factor;
                p.y = self.graphic.baseline + Math.sin((x * self.PI2 + self.PIHalf) * 2) * factor;
            }
        }

        // default

        else if (currentSection >= 13) {
            p.y = self.graphic.baseline + ((path == 0) ? -0.05 : 0.05);
            p.x = x;
        }

        return p;
    },

	createActor: function(index, max){
        // create animated figurine

        var actor, base, i;

        actor = {
            path: (index % 2 == 0) ? 0 : 1,
            position: {x: 0, y: 0},
            proxy: {
                x: (index % 2 == 0) ? index / max : 1 - (index / max),
                y: index / max
            },
            speed: { x: (index % 2 == 0) ? 0.008 : -0.008, y: 0.008 },
            update: function(deltaTime, currentSection){
                actor.proxy.x += deltaTime * actor.speed.x;
                actor.proxy.y += deltaTime * actor.speed.y;

                // wrap

                if (actor.proxy.x < 0) {
                    actor.proxy.x = 1 - ((-1 * actor.proxy.x) % 1);
				}
                else if (actor.proxy.x > 1) {
                    actor.proxy.x = actor.proxy.x % 1;
				}

                if (actor.proxy.y > 1)
                    actor.proxy.y = actor.proxy.y % 1;

                // get actual coords

                actor.position = App.getSectionTransform(actor.proxy.x, actor.proxy.y, actor.path, currentSection);
            },
            updateTransition: function(deltaTime, currentSection, previousSection) {
                // adjust speed for transition

                actor.proxy.x += deltaTime * (actor.speed.x + App.transition.factorSin * App.transition.speedIncrease * App.transition.direction);
                actor.proxy.y += deltaTime * actor.speed.y;



                // wrap

                if (actor.proxy.x < 0)
                    actor.proxy.x += 1;
                else if (actor.proxy.x > 1)
                    actor.proxy.x -= 1;
                if (actor.proxy.y > 1)
                    actor.proxy.y -= 1;

                // get transit coords

                actor.position = App.getSectionTransition(actor.proxy.x, actor.proxy.y, actor.path, currentSection, previousSection);
            },
            draw: function(ctx, scale){
                var coords, x, w, h, hw, hh;

                coords = Canvas.getScreenCoords(actor.position.x, actor.position.y);

                x = (actor.path == 0) ? -2 + 2 * Math.sin(actor.proxy.y * 550) : 2 - 2 * Math.sin(actor.proxy.y * 550);

                w = actor.image.width * scale;
                h = actor.image.height * scale;
                hw = w / 2;
                hh = h / 2;

                Canvas.drawImage(actor.image, coords.x - hw, coords.y - hh, w, h);
                Canvas.drawImage(actor.alt, coords.x + x - hw, coords.y - hh, w, h);
            }
        };

        // pick one of several sprites

        base = Math.floor(Math.random() * 4) * 2;
        i = (index % 2 == 0) ? 8 : 0;
        actor.image = App.images[base + i];
        actor.alt = App.images[base + i + 1];

        return actor;
    },

};
