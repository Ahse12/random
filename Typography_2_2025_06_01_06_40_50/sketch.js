var font;
var points=[]
var r=5;
var angle=0;

function preload(){
  font=loadFont("fonts/Roboto-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  points=font.textToPoints("E",100,300,300,{
sampleFactor:0.1, simplifyThreshold:0
});
  //print(points);
angleMode(DEGREES);
}

function draw() {
  background(220);
for(let i=0; i<points.length; i++){

  ellipse(points[i].x+ r*sin(angle +i*8),points[i].y,10,10);
}
  angle +=10;//animation

  
}