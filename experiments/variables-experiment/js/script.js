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
  fill:255
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

    circle.y += circle.speed;
    circle.y = constrain(circle.y,0,height);
    circle.size = map(mouseY,0,height,5,500)
    circle.fill = map(mouseX,0,width,0,255);
    fill(circle.fill);
    
    ellipse(circle.x,circle.y,circle.size);

    console.log(`circle.x: ${circle.x}, circle.y: ${circle.y}, circle.size: ${circle.size}, circle.speed: ${circle.speed}`);
    //console.log("circle.x: " + circle.x);
  }
