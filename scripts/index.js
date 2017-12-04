var backgroundLinks = ['style/background/bg0.jpg', 'style/background/bg1.jpg', 'style/background/bg2.jpg'];

function changeBackground(index){
	var ele = document.getElementById("background");
	ele.style.backgroundImage = "url(" + backgroundLinks[index] + ")";
}

function changedBackground(){
	var ele = document.getElementById("background");
	ele.style.backgroundImage = "url('style/background/defaultBg.jpg')";
}