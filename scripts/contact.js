var colors = [
  {
    "r":118,
    "g":125,
    "b":127
  },
   {
    "r":160,
    "g":230,
    "b":255
  },
  {
    "r":237,
    "g":250,
    "b":255
  },
  {
    "r":168,
    "g":198,
    "b":209
  },
  {
    "r":189,
    "g":200,
    "b":204
  }
];
function bubble(x,y,r,speedX,speedY,red,green,blue){
  this.x = x;
  this.y = y;
  this.r = r;
  this.overflow = 0;
  this.speedX = speedX;
  this.speedY = speedY;
  this.red = red;
  this.green = green;
  this.blue = blue;
  this.move = function(){
    this.x += this.speedX;
    if(this.x < 0.001 || this.x > windowWidth) 
      this.speedX = -this.speedX;
    this.y += this.speedY;
    if(this.y < 0.001 || this.y > windowHeight) 
      this.speedY = -this.speedY;

  }
  this.display = function(){
    noStroke();
    fill(this.red,this.green,this.blue,160);
    ellipse(this.x,this.y, this.r + this.overflow,this.r + this.overflow);
  }
}
var bubbles = [];
function setup(){
  noCursor(); //Hides the cursor from view.
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(10);
  for(var i = 0 ; i < 500 ; i++){
    var randomX = random(0,windowWidth);
    var randomY = random(0,windowHeight);
    var randomR = random(0,15);
    var randomSpeedX = random(-2,2);
    var randomSpeedY = random(-2,2);
    var r = colors[i%5].r;
    var g = colors[i%5].g;
    var b = colors[i%5].b;
    bubbles[i] = new bubble(randomX,randomY,randomR,randomSpeedX,randomSpeedY,r,g,b);
    bubbles[i].display();
  }
}
function draw(){
  background(255);
  for(var i = 0; i < 500; i++){
    bubbles[i].move();
    bubbles[i].display();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}