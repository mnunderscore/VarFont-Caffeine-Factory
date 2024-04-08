const myTextSlider = document.querySelector(".myTextSlider");
const input = document.querySelector("#text-slider");

function updateText(e) {
    myTextMouse = document.querySelector(".myTextMouse");
	multiplierWidth = e.offsetX / window.innerWidth;
	multiplierHeight = e.offsetY / window.innerHeight;
	randomWeight = multiplierWidth * (600 - 35) + 35;
	randomWidth = multiplierHeight * (600 - 100) + 100;
	myTextMouse.style.fontVariationSettings = "\"wght\" " + randomWeight + ", \"wdth\" " + randomWidth;
}

window.addEventListener("DOMContentLoaded", () => {
    const myTextMouse = document.querySelector(".myTextMouse"); // Add this line to select the element
    if (!myTextMouse) return; // Check if the element exists before proceeding

	window.addEventListener("mousemove", updateText);

	const input = document.querySelector("#text-slider");
	const myTextSlider = document.querySelector(".myTextSlider");

	input.addEventListener("input", (event) => {
		myTextSlider.style.fontVariationSettings = "\"wght\" " + event.target.value;
	});
});
