class Spacebar {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 230;
    this.y = 515;
    this.height = 73;
    this.width = 600;
    this.img = new Image();
  }

  draw() {
    this.img.src = './assets/img/INSTRUCTIONS-PNG.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
