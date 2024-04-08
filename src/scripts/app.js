// const myTextSlider = document.querySelector(".myTextSlider");
// const input = document.querySelector("#text-slider");

function updateText(e) {
    myTextMouse = document.querySelectorAll(".myTextMouse");
	multiplierWidth = e.offsetX / window.innerWidth;
	multiplierHeight = e.offsetY / window.innerHeight;
	randomWeight = multiplierWidth * (600 - 35) + 35;
	randomWidth = multiplierHeight * (600 - 100) + 100;
	myTextMouse.forEach((element) => element.style.fontVariationSettings = "\"wght\" " + randomWeight + ", \"wdth\" " + randomWidth)
}

window.addEventListener("DOMContentLoaded", () => {
    const myTextMouse = document.querySelectorAll(".myTextMouse");
    if (!myTextMouse) return;

	window.addEventListener("mousemove", updateText);

	// const input = document.querySelector("#text-slider");
	// const myTextSlider = document.querySelector(".myTextSlider");

	// input.addEventListener("input", (event) => {
	// 	myTextSlider.style.fontVariationSettings = "\"wght\" " + event.target.value;
	// });
});
