var css = document.querySelector("h3");
//since there are two type color use class
//in js class starts with "."
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
//since the background is present in the body
var body = document.getElementById("gradient");
//never use gradient()
color1.addEventListener("input",gradient);
color2.addEventListener("input",gradient);
//input event listener is used.
//always minimize the codes.
function gradient(){
	
	body.style.background = "linear-gradient(to right," 
	+ color1.value + "," + color2.value + ") ";

	css.textContent = body.style.background + ";";
}
