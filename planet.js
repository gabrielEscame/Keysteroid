class Planet {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.x = -378;
    this.y = -2;
    this.height = 600;
    this.width = 1000;
    this.atmosphere = 300;
  }

  draw() {
    this.img.src = './assets/img/earth.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  left() {
    return this.x;
  }

  right() {
    return this.atmosphere;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  crashWith(asteroids) {
    return !(
      this.bottom() < asteroids.top()
      || this.top() > asteroids.bottom()
      || this.right() < asteroids.left()
      || this.left() > asteroids.right()
    );
  }
}
