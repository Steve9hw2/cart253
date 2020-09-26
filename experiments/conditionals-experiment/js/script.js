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
  speed:1,
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

fill(255);
  if (mouseX < width/3 && circle.x < 2 * width/3) {
    fill(255,0,0);
  }
  else if (mouseX < 2 * width/3) {
    fill(0,255,0);
  }
  else {
    fill(0,0,255);
  }



  ellipse(circle.x,circle.y,circle.size);
}

// js == should be ===
// js ~= should be !==
// js and should be &&
// js or should be ||
// js not should be ! placed before the condition
