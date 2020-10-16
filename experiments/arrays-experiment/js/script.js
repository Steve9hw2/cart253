/**************************************************
Arrays experiment + intermediate functions
Steve Berthiaume

Here is a description of this template p5 project.
**************************************************/
"use strict";

let  circle = {
  x:0,
  y:0,
  size:100,
  trail: []
};


function setup() {
  createCanvas(600,600);
  fill(255);
}

function draw() {
    background(0);

    circle.x = mouseX;
    circle.y = mouseY;

    for (let i = 0; i < circle.trail.length; i++) {
      let position = circle.trail[i];
      ellipse(position.x,position.y,circle.size);
    }

    ellipse(circle.x,circle.y,circle.size);

    let newTrailPosition = {
      x:circle.x,
      y:circle.y,
    };
    circle.trail.push(newTrailPosition);
}
