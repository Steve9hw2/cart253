/**************************************************
Functions Experiment
Steve Berthiaume

Here is a description of this template p5 project.
**************************************************/

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);

  parallels(50,100,1,100,40,10);
  parallels(50,400,1,100,40,10);
}

function parallels(x,y,lineWidth,lineHeight,numLines,lineSpacing) {
  for(let i = 0; i < numLines; i++) {
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(x,y,lineWidth,lineHeight);
    x += lineSpacing;
  }
}
