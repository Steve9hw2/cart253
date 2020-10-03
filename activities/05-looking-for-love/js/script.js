/**************************************************
Activity 05- Looking for Love
Steve Berthiaume

Two circles are looking for love. Shall they find it?
Probably not.
**************************************************/

let circleBlue = {
  x:100,
  y:250,
  size:80,
  vx:0,
  vy:0,
  speed:1,
  fill = {
      r:0,
      g:120,
      b:255,
  }
}

let circlePink = {
  x:400,
  y:250,
  size:80,
  vx:0,
  vy:0,
  speed:-1,
  fill = {
    r:255,
    g:158,
    b:224,
  }
}

let activityState = `intro` // intro, play, end, fail

// setup()
function setup() {
  createCanvas(500,500);
}

// draw()
function draw() {
  background(0);

}
