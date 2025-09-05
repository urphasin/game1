/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

const [CANVAS_WIDTH, CANVAS_HEIGHT] = [canvas.width = 600, canvas.height = 600];


const PlayerImage = new Image();
PlayerImage.src = "./sprites/shadow_dog.png";


function animate() {
  

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillStyle = "purple";
  // ctx.fillRect(100, 100, 100, 100);

  ctx.drawImage(PlayerImage, -1850, -4700,);

  requestAnimationFrame(animate);
};

animate();