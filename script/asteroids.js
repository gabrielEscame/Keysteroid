class Asteroid {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.x = 1000;
    this.y = Math.floor(Math.random() * 500);
    this.height = 120;
    this.width = 120;
    this.speedX = Math.floor(Math.random() * (3 - 1)) + 1;
    this.randomNum = Math.floor(Math.random() * 26);
    this.randomLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.randomImg = ['./assets/img/Letters-asteroids/A-asteroid.png', './assets/img/Letters-asteroids/B-asteroid.png', './assets/img/Letters-asteroids/C-asteroid.png', './assets/img/Letters-asteroids/D-asteroid.png', './assets/img/Letters-asteroids/E-asteroid.png', './assets/img/Letters-asteroids/F-asteroid.png', './assets/img/Letters-asteroids/G-asteroid.png', './assets/img/Letters-asteroids/H-asteroid.png', './assets/img/Letters-asteroids/I-asteroid.png', './assets/img/Letters-asteroids/J-asteroid.png', './assets/img/Letters-asteroids/K-asteroid.png', './assets/img/Letters-asteroids/L-asteroid.png', './assets/img/Letters-asteroids/M-asteroid.png', './assets/img/Letters-asteroids/N-asteroid.png', './assets/img/Letters-asteroids/O-asteroid.png', './assets/img/Letters-asteroids/P-asteroid.png', './assets/img/Letters-asteroids/Q-asteroid.png', './assets/img/Letters-asteroids/R-asteroid.png', './assets/img/Letters-asteroids/S-asteroid.png', './assets/img/Letters-asteroids/T-asteroid.png', './assets/img/Letters-asteroids/U-asteroid.png', './assets/img/Letters-asteroids/V-asteroid.png', './assets/img/Letters-asteroids/W-asteroid.png', './assets/img/Letters-asteroids/X-asteroid.png', './assets/img/Letters-asteroids/Y-asteroid.png', './assets/img/Letters-asteroids/Z-asteroid.png'];
    this.letter = this.randomLetter[this.randomNum];
    this.sound = new Audio();
  }

  draw() {
    this.img.src = this.randomImg[this.randomNum];
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  playSong() {
    this.sound.src = './assets/Keysteroid-Song/8- bit explosion sound effect [SFX].mp3';
    this.sound.volume = 0.2;
    this.sound.play();
    console.log('jorgin');
    
  }

  move() {
    this.x -= this.speedX;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }
}
