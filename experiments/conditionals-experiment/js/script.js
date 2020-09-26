/**************************************************
Conditionals Experiment
Steve Berthiaume

Conditionals. Not much more to say.
(I love these things)
**************************************************/

// setup()
//
// Description of setup() goes here.

let caterpillar = {
  x:100,
  y:250,
  segmentSize:50,
}
function setup() {
  createCanvas(500,500)
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  noStroke();
  fill(100,200,100);

  let x = caterpillar.x;
  let numSegments = 7;

  // while (segmentsDrawn < numSegments) {
  // ellipse(x,caterpillar.y,caterpillar.segmentSize);
  // x += 40;
  // segmentsDrawn++;
  // }

  for (let i = 0; i < numSegments; i++) {
    ellipse(x,caterpillar.y,caterpillar.segmentSize);
    x += 40;
  }

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
