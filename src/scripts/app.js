import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

window.addEventListener("DOMContentLoaded", () => {
  function updateText(e) {
    myTextMouse = document.querySelectorAll(".move-on-mouse");
    let multiplierWidth = e.pageX / document.body.clientWidth;
    let multiplierHeight = e.pageY / document.body.clientHeight;
    let randomWeight = multiplierWidth * (1000 - 35) + 35;
    let randomWidth = multiplierHeight * (1000 - 100) + 100;
    myTextMouse.forEach(
      (element) =>
        (element.style.fontVariationSettings =
          '"wght" ' + randomWeight + ', "wdth" ' + randomWidth)
    );
  }

  let myTextMouse = document.querySelectorAll(".move-on-mouse");
  if (!myTextMouse) return;

  window.addEventListener("mousemove", updateText);

  Splitting();

  const crush = document.querySelectorAll(".crush");
  let i = 0;
  setInterval(function () {
    crush.forEach((cru) => {
      cru.style.fontVariationSettings = '"wght" 300';
      cru.style.opacity = "0.5";
    });
    crush[i].style.opacity = "1";
    crush[i].style.fontVariationSettings = '"wght" 800';
    i++;
    if (i == crush.length) i = 0;
  }, 400);
});
