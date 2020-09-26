/**************************************************
Conditionals Experiment
Steve Berthiaume

Conditionals. Not much more to say.
(I love these things)
**************************************************/

// setup()
//
// Description of setup() goes here.
let backgrounddShade = 0;
let circle = {
  x:100,
  y:250,
  size:100,
  speed:5,
}

function setup() {
  createCanvas(500,500)
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(backgrounddShade)

  circle.x += circle.speed;

  if (circle.x > width) {
    circle.speed = -circle.speed;
  }

  if (circle.x < 0) {
    circle.speed = -circle.speed;
  }

  if (mouseY < height/2) {
    fill(255,0,0)
  }

  if (mouseY > height/2 ) {
    fill(0,0,255)
  }
  
  ellipse(circle.x,circle.y,circle.size);
}

// js == should be ===
// js ~= should be !==
