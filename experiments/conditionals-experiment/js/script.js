/**************************************************
Conditionals Experiment
Steve Berthiaume

Conditionals. Not much more to say.
(I love these things)
**************************************************/


let angle = 0;
let rectScale = 0;

function setup() {
  createCanvas(500,500)
}

function draw() {
  background(55,20,150)

  push();
  fill(0,0,255);
  rectMode(CENTER);
  translate(width/2,height/2);
  rotate(angle);
  scale(rectScale);
  rect(0,0,100,100);
  pop();

  angle += 0.01;
  rectScale += 0.01;
}



// lua -> js notes
//
// js == should be ===
// js ~= should be !==
// js and should be &&
// js or should be ||
// js not should be ! placed before the condition
// js while operates like an if
// js has += 1 and -= 1 abbreviations, ++ and --
