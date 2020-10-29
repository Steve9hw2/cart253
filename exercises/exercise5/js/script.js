/**************************************************
OOP Activity
Steve Berthiaume

OOP Activity. I dunno, it's not given a name.
**************************************************/
"use strict";

let gravity = 0.0025;
let paddle;
let goal;
let balls = [];
let numBalls = 12;
let counter;
let activeBalls;

// setup()
function setup() {
  createCanvas(1200,1000);

  paddle = new Paddle(400,20);
  goal = new Goal(20,240);
  counter = new Counter(40,100);
  activeBalls = new ActiveBalls(40,140);

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
  activeBalls.value = 0;

  paddle.display();
  goal.anim();
  goal.display();
  counter.display();

  for(let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravity);
      ball.move();
      ball.bounce(paddle);
      ball.point(goal);
      ball.display();
      activeBalls.value ++
  }
    if (!ball.active && ball.score) {
      ball.vanish();
      ball.score = false;
      counter.score ++;
    }
  }

  activeBalls.display();
}

function keyPressed() {
  let buffer = false;
    if (keyCode === 65 && paddle.x === 600 && buffer === false) {
       buffer = true;
       paddle.x = 200;
    }
    if (keyCode === 68 && paddle.x === 200 && buffer === false) {
       buffer = true;
       paddle.x = 600;
    }
    if (keyCode === 65 && paddle.x === 1000 && buffer === false) {
      buffer = true;
      paddle.x = 600;
    }
    if (keyCode === 68 && paddle.x === 600 && buffer === false) {
      buffer = true;
      paddle.x = 1000;
    }
}
