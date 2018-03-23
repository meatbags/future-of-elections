class Images {
  constructor() {
    // load images
    this.path = templateDirectory + '/future-of-elections/images/';
    this.images = [];
    this.load();
  }

  loadImage(src) {
    var im = new Image();
    im.onload = () => {
      this.hasLoaded += 1;
      if (this.toLoad <= this.hasLoaded) {
        this.loaded = true;
      }
    };
    im.src = this.path + src;
    this.images.push(im);
  }

  getRandomImage(index) {
    var base = Math.floor(Math.random() * 4) * 2;
    var row = (index % 2 == 0) ? 8 : 0;
    return {
      image: this.images[base + row],
      alt: this.images[base + row + 1]
    };
  }

  isLoaded() {
    return this.loaded;
  }

  load() {
    this.loaded = false;
    this.toLoad = 16;
    this.hasLoaded = 0;
    this.loadImage("figure_1_L_1.png"),
    this.loadImage("figure_1_L_2.png"),
    this.loadImage("figure_2_L_1.png"),
    this.loadImage("figure_2_L_2.png"),
    this.loadImage("figure_3_L_1.png"),
    this.loadImage("figure_3_L_2.png"),
    this.loadImage("figure_4_L_1.png"),
    this.loadImage("figure_4_L_2.png"),
    this.loadImage("figure_1_R_1.png"),
    this.loadImage("figure_1_R_2.png"),
    this.loadImage("figure_2_R_1.png"),
    this.loadImage("figure_2_R_2.png"),
    this.loadImage("figure_3_R_1.png"),
    this.loadImage("figure_3_R_2.png"),
    this.loadImage("figure_4_R_1.png"),
    this.loadImage("figure_4_R_2.png")
  }
}

export { Images };
