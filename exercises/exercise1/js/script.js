/**************************************************
Exercise 1
Steve Berthiaume

Exercise 1 (In class)
I like to move it move it
**************************************************/
let colorchangetimer = 0;

let shapeOne = {
    x:0,
    y:50,
    size:80,
    fill: {
      r:0,
      g:255,
      b:125,
    }
};

let shapeTwo = {
    x:0,
    y:0,
    size:80,
    curvature:40,
    fill: {
      r:125,
      g:0,
      b:255,
    }
};
let shapeThree = {
    x:500,
    y:0,
    size:80,
    curvature:40,
    fill: {
      r:255,
      g:125,
      b:0,
    }
};

let shapeOneClone = {
    x:0,
    y:450,
    size:80,
};

let shapeOneYAxis = {
  x:50,
  y:0,
  size:80,
};

let shapeOneYAxisClone = {
  x:450,
  y:0,
  size:80,
};
// setup()
//
// Runs once at the beginning.
function setup() {
      createCanvas(600,600);
}

// draw()
//
// Runs on every frame.
function draw() {

    shapeOne.x = mouseX                             // Four squares' mouse traction
    shapeOne.x = constrain(shapeOne.x,200,300)
    shapeOneClone.x = mouseX
    shapeOneClone.x = constrain(shapeOneClone.x,200,300)
    shapeOneYAxis.y = mouseY
    shapeOneYAxis.y = constrain(shapeOneYAxis.y,200,300)
    shapeOneYAxisClone.y = mouseY
    shapeOneYAxisClone.y = constrain(shapeOneYAxisClone.y,200,300)

    shapeOne.size = map(mouseY,0,600,60,100);   // Change size of square using unused axis (Shape one moves on X, resizes on Y)
    shapeOneClone.size = map(mouseY,0,600,60,100);
    shapeOneYAxis.size = map(mouseX,0,600,60,100);
    shapeOneYAxisClone.size = map(mouseX,0,600,60,100);

    shapeTwo.x += 1   // Diagonal movement of the spheres
    shapeTwo.y += 1
    shapeThree.x -= 1
    shapeThree.y += 1

    shapeTwo.x = constrain(shapeTwo.x,0,500)  // Constraint on the spheres
    shapeTwo.y = constrain(shapeTwo.y,0,500)
    shapeThree.x = constrain(shapeThree.x,0,500)
    shapeThree.y = constrain(shapeThree.y,0,500)

    fill(shapeOne.fill.r,shapeOne.fill.g,shapeOne.fill.b);  // Creation of the four squares
    rect(shapeOne.x,shapeOne.y,shapeOne.size);
    rect(shapeOneClone.x,shapeOneClone.y,shapeOneClone.size);
    rect(shapeOneYAxis.x,shapeOneYAxis.y,shapeOneYAxis.size);
    rect(shapeOneYAxisClone.x,shapeOneYAxisClone.y,shapeOneYAxisClone.size);

    fill(shapeTwo.fill.r,shapeTwo.fill.g,shapeTwo.fill.b);  //  Creation of the spheres
    rect(shapeTwo.x,shapeTwo.y,shapeTwo.size,shapeTwo.size,shapeTwo.curvature);
    fill(shapeThree.fill.r,shapeThree.fill.g,shapeThree.fill.b);
    rect(shapeThree.x,shapeThree.y,shapeThree.size,shapeThree.size,shapeThree.curvature);

    colorchangetimer += 1

    if (colorchangetimer > 50) {    // After elapsed period, change color
      colorchangetimer = 0;
      shapeOne.fill.r = random(0,255);    // All squares utilize shapeOne's fill.
      shapeOne.fill.g = random(0,255);
      shapeOne.fill.b = random(0,255);
      shapeTwo.fill.r = random(0,255);
      shapeTwo.fill.g = random(0,255);
      shapeTwo.fill.b = random(0,255);
      shapeThree.fill.r = random(0,255);
      shapeThree.fill.g = random(0,255);
      shapeThree.fill.b = random(0,255);
    }

    console.log(colorchangetimer);

}
