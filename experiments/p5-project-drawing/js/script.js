/**************************************************
Drawing Experiments
Steve Berthiaume

Tests using p5 drawing and colouring functions.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);

  background(0, 125, 255);

  noStroke();
  fill(160,200,255, 100);

  rect(50,50,250,250,25,25,25,25);

  ellipseMode(CORNER);
  ellipse(250,250,100,100);
  ellipse(250,250,80,80);

}

// draw()
//
// Description of draw() goes here.
function draw() {

}
