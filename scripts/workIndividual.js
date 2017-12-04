function addChangeFunctions(){
	var height = window.innerHeight;
	var arrowSVG = document.getElementById("arrowSVG");
	var svgHeight = height*0.03;
	var svgWidth = svgHeight*2;
	arrowSVG.setAttribute("width", svgWidth.toString());
	arrowSVG.setAttribute("height", svgHeight.toString());
	var arrowTop = document.getElementById("arrowSVGTop");
	var arrowBottom = document.getElementById("arrowSVGBottom");
	var arrowMid = document.getElementById("arrowSVGMid");
	arrowTop.setAttribute("y1", (svgHeight/2).toString());
	arrowTop.setAttribute("x2", (svgHeight/2).toString());
	arrowBottom.setAttribute("y1", (svgHeight/2).toString());
	arrowBottom.setAttribute("x2", (svgHeight/2).toString());
	arrowBottom.setAttribute("y2", svgHeight.toString());
	arrowMid.setAttribute("y1", (svgHeight/2).toString());
	arrowMid.setAttribute("x2", svgWidth.toString());
	arrowMid.setAttribute("y2", (svgHeight/2).toString());
}