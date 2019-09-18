class StarGame {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.height = 600;
    this.width = 1000;
    this.img = new Image();
  }

  draw() {
    this.img.src = './assets/testes/05-GAME-SCREEN-TEST.png';
    this.img.onload = () => {
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  }
}
