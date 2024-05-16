import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting();

window.addEventListener("DOMContentLoaded", () => {
	function updateText(e) {
		myTextMouse = document.querySelectorAll(".move-on-mouse");
		let multiplierWidth = e.offsetX / window.innerWidth;
		let multiplierHeight = e.offsetY / window.innerHeight;
		let randomWeight = multiplierWidth * (600 - 35) + 35;
		let randomWidth = multiplierHeight * (600 - 100) + 100;
		myTextMouse.forEach((element) => element.style.fontVariationSettings = "\"wght\" " + randomWeight + ", \"wdth\" " + randomWidth)
	}

    let myTextMouse = document.querySelectorAll(".move-on-mouse");
    if (!myTextMouse) return;

	window.addEventListener("mousemove", updateText);
});
