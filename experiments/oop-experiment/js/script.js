/**************************************************
Object Oriented Programming Experiment
Steve Berthiaume

Here is a description of this template p5 project.
**************************************************/
"use strict";

let garden = {
  flowers: [],
  numFlowers:20,
  grassColor: {
    r:120,
    g:180,
    b:120,
  }
};

// setup()
function setup() {
  createCanvas(600,600);
  for (let i = 0; 1 < garden.numFlowers; i++) {
    let flower = new Flower();
    garden.flowers.push(flower);
  }
}

// draw()
function draw() {
  background(garden.grassColor.r,garden.grassColor.g,garden.grassColor.b);
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    flower.display();
  }
}
