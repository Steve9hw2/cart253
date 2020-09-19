/**************************************************
Activity 03 | Moving Pictures
Steve Berthiaume

This is my interpretation of the guidelines for
Pippin Barr's assigned Activity 03 for CART 253.
**************************************************/

let bgfill = {
  r:0,
  g:0,
  b:0,
};

let ellipseOne = {
  x:0,
  y:125,
  size:200,
  r:252,
  g:157,
  b:50,
  a:100,
};

let ellipseTwo = {
  x:500,
  y:375,
  size:100,
  r:252,
  g:157,
  b:50,
  a:255,
};

// setup()
//
// Canvas creation.
function setup() {
    createCanvas(500,500);
}

// draw()
//
// Active changes to the image.
function draw() {
      ellipseMode(CENTER);

      bgfill.r += 0.5; // Background slowly becoming red.
      background(bgfill.r,bgfill.g,bgfill.b);

      ellipseOne.x += 1; // Motion of both ellipses.
      ellipseTwo.x -= 1;

      ellipseOne.x = constrain(ellipseOne.x,0,250); // Constraint on ellipses' motion.
      ellipseTwo.x = constrain(ellipseTwo.x,250,500);

      ellipseOne.size = constrain(ellipseOne.size,50,400); // Constraint on ellipses' size.
      ellipseTwo.size = constrain(ellipseTwo.size,50,300);

      ellipseOne.size += 0.5; // Size increase of ellipses.
      ellipseTwo.size += 0.5;

      ellipseOne.g = map(mouseX,0,500,0,255); // Mouse controlled green value, for fun.
      ellipseTwo.g = map(mouseX,0,500,0,255);

      fill(ellipseOne.r, ellipseOne.g, ellipseOne.b, ellipseOne.a); // Creation of Ellipse One.
      ellipse(ellipseOne.x, ellipseOne.y, ellipseOne.size);

      fill(ellipseTwo.r, ellipseTwo.g, ellipseTwo.b, ellipseTwo.a); // Creation of Ellipse Two.
      ellipse(ellipseTwo.x, ellipseTwo.y, ellipseTwo.size);

      console.log(`ellipseOne.x: ${ellipseOne.x},ellipseTwo.x: ${ellipseTwo.x}`);
}
