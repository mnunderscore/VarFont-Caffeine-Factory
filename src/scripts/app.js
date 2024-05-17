import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

window.addEventListener("DOMContentLoaded", () => {
  function updateText(e) {
    moveMouse = document.querySelectorAll(".move-on-mouse");
    let multiplierWidth = e.pageX / document.body.clientWidth;
    let randomWeight = multiplierWidth * (1000 - 35) + 35;
    moveMouse.forEach(
      (element) =>
        (element.style.fontVariationSettings = '"wght" ' + randomWeight)
    );
  }

  function updateTextSCAN(e) {
    moveMouseScan = document.querySelectorAll(".move-on-mouse-scan");
    let multiplierWidth = e.pageX / document.body.clientWidth;
    let randomWeight = multiplierWidth * 50 - 30;
    moveMouseScan.forEach(
      (element) =>
        (element.style.fontVariationSettings = '"SCAN" ' + randomWeight)
    );
  }

  let moveMouse = document.querySelectorAll(".move-on-mouse");
  if (!moveMouse) return;

  let moveMouseScan = document.querySelectorAll(".move-on-mouse-scan");
  if (!moveMouseScan) return;

  window.addEventListener("mousemove", updateText);
  window.addEventListener("mousemove", updateTextSCAN);

  Splitting();

  const crush = document.querySelectorAll(".crush");
  let i = 0;
  setInterval(function () {
    crush.forEach((cru) => {
      cru.style.fontVariationSettings = '"SCAN" -50';
      cru.style.opacity = "0.5";
      cru.style.color = "white";
    });
    crush[i].style.opacity = "1";
    crush[i].style.fontVariationSettings = '"SCAN" 10';
    crush[i].style.color = "#ff0000";
    i++;
    if (i == crush.length) i = 0;
  }, 800);
});
