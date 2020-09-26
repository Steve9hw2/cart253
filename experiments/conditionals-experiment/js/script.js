/**************************************************
Conditionals Experiment
Steve Berthiaume

Conditionals. Not much more to say.
(I love these things)
**************************************************/

// setup()
//
// Description of setup() goes here.

let displayCircle = false;
function setup() {
  createCanvas(500,500)
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if (mouseIsPressed) {
    displayCircle = true;
  }
  else {
    displayCircle = false;
  }

  if (displayCircle) {
    ellipse(250,250,100,100);
  }



  ellipse(circle.x,circle.y,circle.size);
}

// js == should be ===
// js ~= should be !==
// js and should be &&
// js or should be ||
// js not should be ! placed before the condition
