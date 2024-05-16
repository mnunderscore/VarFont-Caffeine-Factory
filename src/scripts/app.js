function updateText(e) {
    myTextMouse = document.querySelectorAll(".move-on-mouse");
	multiplierWidth = e.offsetX / window.innerWidth;
	multiplierHeight = e.offsetY / window.innerHeight;
	randomWeight = multiplierWidth * (1000 - 35) + 35;
	randomWidth = multiplierHeight * (1000 - 100) + 100;
	myTextMouse.forEach((element) => element.style.fontVariationSettings = "\"wght\" " + randomWeight + ", \"wdth\" " + randomWidth)
}

window.addEventListener("DOMContentLoaded", () => {
    const myTextMouse = document.querySelectorAll(".move-on-mouse");
    if (!myTextMouse) return;

	window.addEventListener("mousemove", updateText);
});
