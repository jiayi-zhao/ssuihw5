var backgroundLinks = ['style/background/about.JPG', 'style/background/work.png', 'style/background/contact.png'];

function changeBackground(index){
	var ele = document.getElementById("background");
	ele.style.backgroundImage = "url(" + backgroundLinks[index] + ")";
}

function changedBackground(){
	var ele = document.getElementById("background");
	ele.style.backgroundImage = "url('style/background/defaultBg.jpg')";
}