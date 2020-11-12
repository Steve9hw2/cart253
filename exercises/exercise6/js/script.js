/**************************************************
Exercise 6 - Sound
Steve Berthiaume

I may end up using sound for something, but seeing as
I don't know what that would be and I've always done
exercises the day of submission, I'll stick with
modifying the sound activity.
**************************************************/

"use strict";

let balls = [];
let notes = [`F3`,`G3`,`Ab4`,`Bb4`,`C4`,`Db4`,`Eb4`,`F4`];

// setup()
function setup() {
  createCanvas(600,600);
  userStartAudio();
}

// draw()
function draw() {
  background(0);
  for(let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.flashing();
    ball.display();
  }
}

function mousePressed() {
  createBall(mouseX,mouseY);
}

function createBall(x,y) {
  let note = random(notes);
  let ball = new Ball(x,y,note);
  balls.push(ball);
}
