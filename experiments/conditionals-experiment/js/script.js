/**************************************************
Conditionals Experiment
Steve Berthiaume

Conditionals. Not much more to say.
(I love these things)
**************************************************/

let circle = {
  x:0,
  y:250,
  size:100,
  vx:1,
  vy:1,
  ax:0,
  ay:0,
  acceleration:0.1,
  maxSpeed:3,
}

function setup() {
  createCanvas(500,500)
}

function draw() {
  background(55,20,150)

  if (mouseX < circle.x) {
    circle.ax = -circle.acceleration;
  }
  else {
    circle.ax = +circle.acceleration;
  }

  if (mouseY < circle.y) {
    circle.ay = -circle.acceleration;
  }
  else {
    circle.ay = +circle.acceleration;
  }

  circle.vx += circle.ax;
  circle.vx = constrain(circle.vx,-circle.maxSpeed,circle.maxSpeed);
  circle.vy += circle.ay;
  circle.vy = constrain(circle.vy,-circle.maxSpeed,circle.maxSpeed);

  circle.x += circle.vx;
  circle.y += circle.vy;

  ellipse(circle.x,circle.y,circle.size);
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
