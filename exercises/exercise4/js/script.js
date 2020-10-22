/**************************************************
Exercise 4
Steve Berthiaume

Age of Aquariums
**************************************************/
"use strict";

let state = `start` // start, fish, end, fail
let school = [];
let schoolSize = 20;
let eatenFish = 0;
let fishyfishy;

let userFish = {
  x:0,
  y:0,
  size:128,
}

function preload() {
  fishyfishy = loadImage(`assets/images/fishyfishy.png`)
}

// setup()
function setup() {
  createCanvas(600, 600);
  frameRate(30);
  textSize(30);
  textAlign(CENTER);
  for (let i = 0; i < schoolSize; i++) {
  school[i] = createFish(random(0,width), random(0,height));
  }
}

function createFish(x,y) {
  let fish = {
    x:x,
    y:y,
    size:50,
    vx:0,
    vy:0,
    speed:2,
    eaten:false,
    counted:false,
    fill: {
      r:0,
      g:0,
      b:0,
    }
  };
  fish.fill.r = random(0,255);
  fish.fill.g = random(0,255);
  fish.fill.b = random(0,255);
  fish.size = random(10,80);
  return fish;
}

// draw()
function draw() {
  background(0);

  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    escapeFish(school[i]);
    eatFish(school[i]);
    displayFish(school[i]);
  } // other fish
  userFishAct();
  timer();
  print(school.length)
  print(eatenFish)
}

function moveFish(fish) {
  let change = random(0,1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed,fish.speed);
    fish.vy = random(-fish.speed,fish.speed);
  }

  fish.x += fish.vx;
  fish.y += fish.vy;

  fish.x = constrain(fish.x,0,width);
  fish.y = constrain(fish.y,0,height);
}

function displayFish(fish) {
  if (fish.eaten === false) {
  push();
  fill(fish.fill.r,fish.fill.g,fish.fill.b);
  noStroke();
  ellipse(fish.x,fish.y,fish.size);
  pop();
  }
  if (fish.eaten === true) {
    if (fish.counted === false) {
      fish.counted = true
      eatenFish++;
    }
    else if (fish.counted === true) {
    school.splice(1, fish);
    }
  }
}

function escapeFish(fish) {
  push();
  let x1 = fish.x
  let y1 = fish.y
  let x2 = userFish.x
  let y2 = userFish.y
  let d = int(dist(x1,y1,x2,y2))
  if (d < 180) {
    if (userFish.x > fish.x) {
      fish.vx = -5;
    }
    if (userFish.x < fish.x) {
      fish.vx = 5;
    }
    if (userFish.y > fish.y) {
      fish.vy = -5;
    }
    if (userFish.y < fish.y) {
      fish.vy = 5;
    }
  }
  pop();
}

function eatFish(fish) {
  let x1 = fish.x
  let y1 = fish.y
  let x2 = userFish.x
  let y2 = userFish.y
  let d = int(dist(x1,y1,x2,y2))
  if (d < 50) {
    fish.eaten = true
  }
}

function userFishAct() {
  userFish.x = mouseX - 64
  userFish.y = mouseY - 64
  userFish.x = constrain(userFish.x,0,width);
  userFish.y = constrain(userFish.y,0,height);
  image(fishyfishy,userFish.x,userFish.y);
}

function timer() {
  push();
  fill(255);
  text(parseInt(30 - (frameCount/30)),580,590);
  pop();
}

// function mousePressed() {
//   let fish = createFish(mouseX,mouseY);
//   school.push(fish);
// }
