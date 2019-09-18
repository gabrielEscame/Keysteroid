class GameOver {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 400;
    this.y = 200;
    this.height = 170;
    this.width = 250;
    this.img = new Image();
  }

  draw() {
    this.img.src = './assets/img/game-over-02.png';
    this.img.onload = () => {
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  }
}
