const scene = document.getElementById("scene");

const framesOn = [
  "218am1.png",
  "218am2.png",
  "218am3.png"
];

const framesOff = [
  "218am4.png",
  "218am5.png",
  "218am6.png"
];

let lampOn = true;
let currentFrame = 0;

function animate() {
  const activeFrames = lampOn ? framesOn : framesOff;

  scene.src = activeFrames[currentFrame];
  currentFrame = (currentFrame + 1) % activeFrames.length;
}

let interval = setInterval(animate, 500);

scene.addEventListener("click", () => {
  lampOn = !lampOn;
  currentFrame = 0; // reset animation when switching
}); 



