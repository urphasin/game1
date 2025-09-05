/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

const [CANVAS_WIDTH, CANVAS_HEIGHT] = [canvas.width = 600, canvas.height = 600];


const PlayerImage = new Image();
PlayerImage.src = "./sprites/shadow_dog.png";

let x = 0;
let y = 0;

let recWidth = 100;
let x1 = CANVAS_WIDTH - recWidth; 
let y1 = 0;

function animate() {
  if (x > 600) {
    x = 0;
  }
  if (y > 600) {
    y = 0;
  }

  if (x1 < -100) {
    x1 = CANVAS_WIDTH - 100;
  }
  if (y1 > 600) {
    y1 = 0;
  }

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.fillStyle = "black";
  ctx.fillRect(x1, y1, 100, 100);
  
  ctx.fillStyle = "purple";
  ctx.fillRect(x, y, 100, 100);

  x++;
  y++;

  x1--;
  y1++;
  requestAnimationFrame(animate);
};

animate();