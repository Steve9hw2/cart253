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
  fillr:0,
  fillg:0,
  fillb:0,
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

    fill(circle.fillr,circle.fillg,circle.fillb);
    ellipse(circle.x,circle.y,circle.size);
    circle.y += circle.speed;

    circle.fillr = random(10,255);
    circle.fillg = random(10,255);
    circle.fillb = random(10,255);
    console.log(`circle.fillr: ${circle.fillr}, circle.fillb: ${circle.fillb}, circle.fillg: ${circle.fillg}`)
    console.log(`circle.x: ${circle.x}, circle.y: ${circle.y}, circle.size: ${circle.size}, circle.speed: ${circle.speed}`);
    //console.log("circle.x: " + circle.x);
  }
