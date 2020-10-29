/**************************************************
OOP Activity
Steve Berthiaume

OOP Activity. I dunno, it's not given a name.
**************************************************/
"use strict";

let gravity = 0.0025;
let paddle;
let balls = [];
let numBalls = 12;

// setup()
function setup() {
  createCanvas(windowWidth,windowHeight);

  paddle = new Paddle(300,20);

  for(let i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = random(-1200,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
  }
}

// draw()
function draw() {
  background(0);

  paddle.move();
  paddle.display();

  for(let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravity);
      ball.move();
      ball.bounce(paddle);
      ball.display();
  }
  }
}
