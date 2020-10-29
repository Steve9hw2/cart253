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
let luck = undefined; // random chance of the program being way too easy; access to impossible ending

// setup()
function setup() {
  createCanvas(1200,1000);
  luck = random(0,1);
  print(luck);
  paddle = new Paddle(400,20);              // controlled by the player
  goal = new Goal(50,240);                 // adds to score when a ball collides
  counter = new Counter(40,100);          // tracks score
  activeBalls = new ActiveBalls(40,140); // tracks remaining balls
  if (luck > 0.1) {                     // roughly 10% of all balls appearing above the goal, causing a perfect score
  for(let i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = random(-1200,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
  }
  }
  else {
    for(let i = 0; i < numBalls; i++) {
      let x = 1050;   // this spot just happens to be perfectly aligned with the goal!
      let y = random(-1200,-100);
      let ball = new Ball(x,y);
      balls.push(ball);
    }
    }
}

// draw()
function draw() {
  background(0);
  if (state === `game`) {
  activeBalls.value = 0;   // reset tracked balls. inactive ones won't add to this, meaning the game is over if it remains at zero. (see end();)
  paddle.display();
  goal.anim();   // moves the goal up and down.
  goal.display();
  counter.display();
  ballAction(); // all ball specific methods are stored in this function.
  activeBalls.display();
  end();
  }
  else if (state === `none`) {
    endNone();
  }
  else if (state === `bad`) {
    endBad();
  }
  else if (state === `decent`) {
    endDecent();
  }
  else if (state === `good`) {
    endGood();
  }
  else if (state === `amazing`) {
    endAmazing();
  }
  else if (state === `impossible`) {
    endImpossible();
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
} // When at the end of a frame, there are still 0 active balls, end and switch states.

function endNone() {
  push();
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(30);
  text(`YOUR SCORE:  ` + counter.score, 600,100);
  textSize(40);
  text(`YOUR RANK:`,600,200);
  textSize(100);
  fill(74,5,0);
  text(`Failure`,600,500);
  textSize(40);
  fill(255);
  text(`...yikes`,600,900);
  pop();
} // Ending 1: 0 Balls.

function endBad() {
  push();
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(30);
  text(`YOUR SCORE:  ` + counter.score, 600,100);
  textSize(40);
  text(`YOUR RANK:`,600,200);
  textSize(100);
  fill(219,31,18);
  text(`Bad`,600,500);
  textSize(40);
  fill(255);
  text(`...better luck next time?`,600,900);
  pop();
} // Ending 2: 1 Ball.

function endDecent() {
  push();
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(30);
  text(`YOUR SCORE:  ` + counter.score, 600,100);
  textSize(40);
  text(`YOUR RANK:`,600,200);
  textSize(100);
  fill(219,155,18);
  text(`Decent`,600,500);
  textSize(40);
  fill(255);
  text(`an improvement, maybe!`,600,900);
  pop();
} // Ending 3: 2 Balls.

function endGood() {
  push();
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(30);
  text(`YOUR SCORE:  ` + counter.score, 600,100);
  textSize(40);
  text(`YOUR RANK:`,600,200);
  textSize(100);
  fill(115,219,18);
  text(`Good`,600,500);
  textSize(40);
  fill(255);
  text(`quite impressive!`,600,900);
  pop();
} // Ending 4: 3 Balls.

function endAmazing() {
  push();
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(30);
  text(`YOUR SCORE:  ` + counter.score, 600,100);
  textSize(40);
  text(`YOUR RANK:`,600,200);
  textSize(100);
  fill(18,219,172);
  text(`Amazing`,600,500);
  textSize(40);
  fill(255);
  text(`shockingly fantastic!`,600,900);
  pop();
} // Ending 5: 4-9 Balls.

function endImpossible() {
  push();
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(30);
  text(`YOUR SCORE:  ` + counter.score, 600,100);
  textSize(40);
  text(`YOUR RANK:`,600,200);
  textSize(100);
  fill(31,10,77);
  text(`Impossible`,600,500);
  textSize(40);
  fill(255);
  text(`how.`,600,900);
  textSize(16);
  text(`did you change the code?`,600,940);
  text(`this was supposed to be impossible.`,600,960);
  text(`did you scam me? are you a machine??`,600,980);
  pop();
} // Ending 6: 10-12 Balls. (If anyone manages this without the luck mechanic, they're a robot!)
