var hr;
var mn;
var sc;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  hr = hour();
  mn = minute();
  sc = second();
  scAngle = map(sc, 0, 60, 0, 360);
  translate()
  stroke(255,0,0)
  arc(50, 55, 50, 50, 0, HALF_PI);
  drawSprites();
  push()
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()
}