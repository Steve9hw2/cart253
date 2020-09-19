/**************************************************
Variables Experiment
Steve Berthiaume

Here is a description of this template p5 project.
**************************************************/

let backgroundHue = 0;
let backgroundBrightener = 1

let circle = {
  x:250,
  y:0,
  size:100,
  speed:2,
};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
    backgroundHue += backgroundBrightener
    background(backgroundHue);
    ellipse(circle.x,circle.y,circle.size);
    circle.y += circle.speed;
  }
