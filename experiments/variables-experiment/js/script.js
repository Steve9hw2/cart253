/**************************************************
Variables Experiment
Steve Berthiaume

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth,windowHeight);
}

// draw()
//
// Description of draw() goes here.
function draw() {
    background(0,125,225);
    rectMode(CENTER);
    rect(mouseX,mouseY,100,100);
}
