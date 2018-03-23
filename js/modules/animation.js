var App = {
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

                x = (actor.path == 0)
									? -2 + 2 * Math.sin(actor.proxy.y * 550)
									: 2 - 2 * Math.sin(actor.proxy.y * 550);

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
