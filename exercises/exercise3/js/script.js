/**************************************************
Exercise 03- Love, Actually
Steve Berthiaume

Two circles are looking for love. Shall they find it?
Probably not. Well, this is the exercise, so maybe?
**************************************************/

let circleBlue = {
  x:100,
  y:250,
  size:80,
  vx:0,
  vy:0,
  speed:1,
  fill : {
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
  fill : {
    r:255,
    g:158,
    b:224,
  }
}

let activityState = undefined // intro, play, end, fail

// setup()
function setup() {
  createCanvas(500,500);
  activityState = `intro`
  randomizeCircleMotion();
}

// draw()
function draw() {
  if (activityState === `intro`) {
    textPrompt();
    console.log(`${activityState}`)
    }
  else if (activityState === `play`) {
    circlesMove();
    circlesDrawn();
    circlesFailCheck();
    circlesTouchCheck();
  }
  else if (activityState === `end`) {
    circleLove();
  }
  else if (activityState === `fail`) {
    circlesFail();
  }
}

function keyPressed() {
    if (keyCode === 13) {
    console.log(`${key} ${keyCode}`)
    activityState = `play`
    console.log(`${activityState}`)
  }
}

function textPrompt() {
  background(255);
  textAlign(CENTER,CENTER);
  textSize(60);
  text(`Looking for love.`,250,250);
  textSize(20);
  text(`Press Enter to begin.`,250,300);
}

function randomizeCircleMotion() {
  circleBlue.vx = random(-circleBlue.speed,circleBlue.speed);
//  circleBlue.vy = random(-circleBlue.speed,circleBlue.speed);
  circlePink.vx = random(-circlePink.speed,circlePink.speed);
//  circlePink.vy = random(-circlePink.speed,circlePink.speed);
}

function circlesMove() {
  background(0);
  circleBlue.x += circleBlue.vx;
  circleBlue.y += circleBlue.vy;
  circlePink.x += circlePink.vx;
  circlePink.y += circlePink.vy;
}

function circlesDrawn() {
  fill(circleBlue.fill.r,circleBlue.fill.g,circleBlue.fill.b);
  noStroke();
  ellipse(circleBlue.x,circleBlue.y,circleBlue.size);
  fill(circlePink.fill.r,circlePink.fill.g,circlePink.fill.b);
  ellipse(circlePink.x,circlePink.y,circlePink.size);
}

function circlesTouchCheck() {
  let dx = circleBlue.x - circlePink.x
  let dy = circleBlue.y - circlePink.y
  let circleSize = (circleBlue.size + circlePink.size) / 2
  if (dx < circleSize / 2 && dx > 0 || dx > -circleSize/2 && dx < 0) {
    activityState = `end`
  }
}

function circlesFailCheck() {
  if (circleBlue.x > width || circleBlue.x < 0 || circleBlue.y < 0 || circleBlue.y > height || circlePink.x > width || circlePink.x < 0 || circlePink.y > height || circlePink.y < 0) {
    activityState = `fail`
}
}

function circlesFail() {
  background(0);
  textSize(60);
  text(`There is no love.`,250,250);
}

function circleLove() {
  background(255);
  fill(circlePink.fill.r,circleBlue.fill.g,circlePink.fill.b);
  ellipse(300,300,circlePink.size);
  fill(circleBlue.fill.r,circleBlue.fill.g,circleBlue.fill.b);
  ellipse(200,300,circleBlue.size)
  textSize(50);
  text(`Look, it's a love!`,250,200);
}
