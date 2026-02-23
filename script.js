const scene = document.getElementById("scene");

const framesOn = [
  "218am1.png",  // open eye lamp on
  "218am2.png",  // closed eye lamp on
  "218am3.png"   // open eye lamp on
];

const frameOff = "218am4.png"; // closed eye lamp off

let currentFrame = 0;
let lampOn = true;

function animate() {
  if (lampOn) {
    scene.src = framesOn[currentFrame];
    currentFrame = (currentFrame + 1) % framesOn.length;
  }
}

let interval = setInterval(animate, 500);

// Click to toggle lamp
scene.addEventListener("click", () => {
  lampOn = !lampOn;

  if (!lampOn) {
    clearInterval(interval);
    scene.src = frameOff;
  } else {
    currentFrame = 0;
    interval = setInterval(animate, 500);
  }
});
