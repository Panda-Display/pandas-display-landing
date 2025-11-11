import './index.css'

let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;

function initInteractiveBubble() {
  const interBubble = document.querySelector(".interactive");
  if (!interBubble) {
    // Try again until React mounts the Hero section
    requestAnimationFrame(initInteractiveBubble);
    return;
  }

  function move() {
    curX += (tgX - curX) / 3;
    curY += (tgY - curY) / 3;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  }

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(initInteractiveBubble);
});
