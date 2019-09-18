// CANVAS
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.font = 'normal 20px Kavivanar';

// MENU START
const startGame = new StarGame(ctx);
startGame.draw();
let started = false;

// SCORE

let points = 0;

const score = () => {
  ctx.font = '30px serif';
  ctx.fillStyle = 'white';
  ctx.fillText(`Score: ${points}`, 800, 30);
};
// Array ASTEROIDS
const asteroids = [];

// PLANET INSTANCE
const planet = new Planet(ctx);

// SPACEBAR-INSTRUCTIONS
const instructions = new Spacebar(ctx);

// CLEAR
const clear = () => ctx.clearRect(0, 0, 1000, 600);

// FRAMES
let frames = 0;

// GAME OVER

// KEY CODE
let keyLetter = '';
document.onkeydown = function (e) {
  let start = false;
  if (e.keyCode === 32) {
    if (!started) {
      engine();
      started = true;
    }

  }
  keyLetter = e.key.toLowerCase();
};

// DESTROY ASTEROID
const destroy = () => {
  asteroids.forEach((item, idx) => {
    if (item.letter === keyLetter) {
      asteroids.splice(idx, 1);
      item.playSong();
      points += 1;
    }
  });
};

// LEVELFLOW

let quantum = 120;
const hard = () => {
  if (points >= 10) {
    quantum = 100;
  } if (points >= 20) {
    quantum = 80;
  } if (points >= 30) {
    quantum = 60;
  } if (points >= 40) {
    quantum = 50;
  } if (points >= 50) {
    quantum = 40;
  } if (points >= 60) {
    quantum = 35;
  } if (points >= 80) {
    quantum = 30;
  }
};
// CHECK GAMEOVER
const checkGameOver = () => {
  const crashed = asteroids.some(item => planet.crashWith(item));
  if (crashed) {
    const gameOver = new GameOver(ctx);
    gameOver.draw();
    bgMusic.pause();
  }
  return crashed;
};

// BG MUSIC
const bgMusic = new Audio();
bgMusic.src = './assets/Keysteroid-Song/Keysteroid-Song.mp3';
bgMusic.volume = 0.1;

// Engine
const engine = () => {
  if (frames % quantum === 0) {
    asteroids.push(new Asteroid(ctx));
  }
  clear();
  bgMusic.play();
  planet.draw();
  instructions.draw();
  asteroids.forEach((asteroid) => {
    asteroid.draw();
    asteroid.move();
  });
  hard();
  score();
  destroy();
  frames += 1;
  if (!checkGameOver()) {
    window.requestAnimationFrame(engine);
  }
};