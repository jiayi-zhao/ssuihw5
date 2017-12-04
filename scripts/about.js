var textCount = 0;
var textAni = ["software engineer", "UI/UX designer", "coffee addict", "beijing native"];
var textAniColor = ["#5669B2", "#A654B5", "#A38268", "#5BB074"]
var textLen = 4;

var currPage = 0;
var pages = 3;

// var d = new Date();
var currTime;

var animateCount = 0;
var tableFlag = 0;
var tableOpacity = [0, 0, 0];

function changeText(){
	console.log("called change text");
	textCount++;
	var ele = document.getElementById("centerText");
	ele.innerHTML = textAni[textCount%textLen];
	ele.style.color = textAniColor[textCount%textLen];
}

function setArrow(){
	var width = window.innerWidth;
	var arrowSVG = document.getElementById("arrowSVG");
	var arrowSVG2 = document.getElementById("arrowSVG2");
	var svgHeight = width*0.032;
	var svgWidth = svgHeight*5;
	arrowSVG.setAttribute("width", svgWidth.toString());
	arrowSVG.setAttribute("height", svgHeight.toString());
	var arrowLeft = document.getElementById("arrowSVGLeft");
	var arrowRight = document.getElementById("arrowSVGRight");
	arrowLeft.setAttribute("x2", (svgWidth/2).toString());
	arrowLeft.setAttribute("y2", svgHeight.toString());
	arrowRight.setAttribute("x1", (svgWidth/2).toString());
	arrowRight.setAttribute("y1", svgHeight.toString());
	arrowRight.setAttribute("x2", svgWidth.toString());
	arrowRight.setAttribute("y2", "0");
}

function addChangeFunction(){
	var ele = document.getElementById("centerText");
	// ele.addEventListener("animationend", changeText);
	setInterval("changeText()", 5000);
	setArrow();
	animateCount = 0;
	updateAnimateText();
	console.log(window.pageYOffset);
	if (window.pageYOffset == window.innerHeight)
	{
		animateText();
	}
	var d = new Date();
	currTime = d.getTime();
	if (window.pageYOffset == 2*window.innerHeight)
	{
		animateTimeLine();
	}
	// var rows = document.getElementsByClassName("timelineRow");
	// console.log("row top is");
	// console.log(rows[0].getBoundingClientRect().top);
	// console.log(rows[1].getBoundingClientRect().top);
	// console.log(rows[2].getBoundingClientRect().top);
}

function updateAnimateText(){
	var ele = document.getElementById("about2Text");
	var string = "I’m Jiayi, an aspiring software engineer and UI/UX designer. I’m currently a student at Carnegie Mellon University, majoring in Information Systems and Human Computer Interaction. I’m primarily interested in data analysis, machine learning and designing usable interfaces. I also have great passion for music and seek to understand connections between music and technology."
	var str = string.split("");
	var cont = str.map(function (str) {
		return "<span class='aniText' style='opacity: 0;'>" + str + "</span>";
	});
	ele.innerHTML = cont.join('');
}

function animateText(){
	if (animateCount == 0)
	{
		var id = setInterval(animate, 50);
		var ele = document.getElementsByClassName("aniText");
		function animate(){
			if (animateCount == ele.length){
				clearInterval(id);
			}
			else {
				ele[animateCount].style.opacity = "1";
				animateCount++;
			}
		}
	}
}

function animateTimeLine(){
	if (tableFlag == 0)
	{
		tableFlag = 1;
		var ele = document.getElementsByTagName("table")[0].rows;
		// console.log(ele);
		var id = setInterval(animateOne, 10);
		function animateOne(){
			if (tableOpacity[0] == 100 && tableOpacity[1] == 100 && tableOpacity[2] == 100)
			{
				clearInterval(id);
			} 
			else if (tableOpacity[0] == 100 && tableOpacity[1] == 100)
			{
				tableOpacity[2]++;
				ele[2].style.opacity = (tableOpacity[2]/100).toString();
			} 
			else if (tableOpacity[0]==100)
			{
				tableOpacity[1]++;
				ele[1].style.opacity = (tableOpacity[1]/100).toString();
			}
			else
			{
				tableOpacity[0]++;
				ele[0].style.opacity = (tableOpacity[0]/100).toString();
			}
		}
		// for (var i = 0; i < ele.length; i++)
		// {
		// 	// console.log(ele[i]);
		// 	var id = setInterval(animateOne, 10);
		// 	// var count = 0;
		// 	function animateOne{
		// 		if (tableOpacity[0] == 1){
		// 			clearInterval(id);
		// 		} else {
		// 			tableOpacity[0] = tableOpacity[i] + 0.01;
		// 			ele[i].style.opacity = tableOpacity[0].toString();
		// 		}
		// 	}
		// }
	}
}

function pageSlide(){
	console.log("called pageslide");
	console.log(currPage);
	var id = setInterval(move, 1);
	var des = currPage*window.innerHeight;
	function move(){
		console.log("called move");
		console.log(window.pageYOffset);
		if (window.pageYOffset == des)
		{
			clearInterval(id);
		}
		else
		{
			if (window.pageYOffset < des)
			{
				window.scrollTo(0, window.pageYOffset++);
			}
			else
			{
				window.scrollTo(0, window.pageYOffset--);
			}
		}
	}
}

function scrollUpdate(){
	console.log("callsed scroll update");
	// console.log(window.pageYOffset);
	var ds = new Date();
	var newCurrTime = ds.getTime();
	console.log(currTime);
	console.log(newCurrTime);
	if (newCurrTime-currTime > 1000){
		currTime = newCurrTime;
		if (window.pageYOffset > (currPage*window.innerHeight) && currPage!=(pages-1))
		{
			currPage++;
			window.scrollTo(0, (currPage)*window.innerHeight);
			if (currPage == 1)
			{
				animateText();
			} else if (currPage == 2){
				animateTimeLine();
			}
		}
		if (window.pageYOffset < (currPage*window.innerHeight) && currPage != 0)
		{
			currPage--;
			window.scrollTo(0, (currPage)*window.innerHeight);
			if (currPage == 1)
			{
				animateText();
			} else if (currPage == 2)
			{
				animateTimeLine();
			}
		}
	}
	else 
	{
		window.scrollTo(0, (currPage)*window.innerHeight);
	}
	// if (window.pageYOffset > (currPage*window.innerHeight) && currPage!=(pages-1))
	// {
	// 	currPage++;
	// 	window.scrollTo(0, (currPage)*window.innerHeight);
	// }
	// if (window.pageYOffset < (currPage*window.innerHeight) && currPage != 0)
	// {
	// 	currPage--;
	// 	window.scrollTo(0, (currPage)*window.innerHeight);
	// }
	// console.log(window.pageYOffset);
}







function setup(){
	noCursor(); //Hides the cursor from view.
  	createCanvas(windowWidth, windowHeight);
  	stroke(149, 152, 154);
  	line(windowWidth/2, windowHeight*0.1, windowWidth/2, windowHeight*0.9);
  	var rows = document.getElementsByClassName("timelineRow");
  	var offset = document.getElementById("about3").getBoundingClientRect().top;
  	fill(149, 152, 154);
  	for (var i = 0; i < rows.length; i++)
  	{
  		var y = rows[i].getBoundingClientRect().top - offset;
  		console.log(y);
  		ellipse(windowWidth/2, y+(windowWidth/60), windowWidth/30, windowWidth/30);
  	}
}

function draw(){

}




