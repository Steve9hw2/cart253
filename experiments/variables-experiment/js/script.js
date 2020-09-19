/**************************************************
Variables Experiment
Steve Berthiaume

Here is a description of this template p5 project.
**************************************************/

let backgroundHue = 0;
let circleX = 250;
let circleY = 250;
let circleSize = 100;
let circleSpeed = 1;
let backgroundBrightener = 1
let circleAcceleration = 0.05

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
    ellipse(circleX,circleY,circleSize);
    circleY += circleSpeed;
    circleSpeed += circleAcceleration
  }
