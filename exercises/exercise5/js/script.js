/**************************************************
OOP Activity
Steve Berthiaume

OOP Activity. I dunno, it's not given a name.
**************************************************/
"use strict";

let state = `game` // game, none, bad, decent, good, amazing, impossible
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
  if (state === `game`) {
  activeBalls.value = 0;
  paddle.display();
  goal.anim();
  goal.display();
  counter.display();
  ballAction();
  activeBalls.display();
  end();
  }
  else if (state === `none`) {

  }
  else if (state === `bad`) {

  }
  else if (state === `decent`) {

  }
  else if (state === `good`) {

  }
  else if (state === `amazing`) {

  }
  else if (state === `impossible`) {

  }
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
} // Player input

function ballAction() {
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
} // All possible ball interactions.

function end() {
  if (activeBalls.value === 0) {
    if (counter.score === 0) {
      state = `none`;
    }
    else if (counter.score === 1) {
      state = `bad`;
    }
    else if (counter.score === 2) {
      state = `decent`;
    }
    else if (counter.score === 3) {
      state = `good`;
    }
    else if (counter.score > 3 && counter.score < 10) {
      state = `amazing`;
    }
    else if (counter.score > 9) {
      state = `impossible`;
    }
  }
}
