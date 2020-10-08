/**************************************************
Exercise 03- Love, Actually
Steve Berthiaume

Two circles are looking for love. Shall they find it?
Probably not. Well, this is the exercise, so maybe?
**************************************************/
let c = undefined // random chance for the secret
let pinkTimer = 0

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

let circleSecret = {
  x:250,
  y:80,
  size:80,
  speed:3,
  fill: {
    r:240,
    g:154,
    b:55,
  }
}

let activityState = undefined // intro, play, end, fail, secret

// setup()
function setup() {
  createCanvas(500,500);
  activityState = `intro`
  randomizeCircleMotion();
  randomizeSecret();
}

// draw()
function draw() {
  if (activityState === `intro`) {
    textPrompt();
    console.log(`${activityState}`)
    }
  else if (activityState === `play`) {
    circlesMove();
    secretChance();
    circlesDrawn();
    circlesFailCheck();
    circlesTouchCheck();
    secretTouchCheck();
  }
  else if (activityState === `end`) {
    circleLove();
  }
  else if (activityState === `fail`) {
    circlesFail();
  }
  else if (activityState === `secret`) {
    secretEnd();
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
  pinkTimer ++
  circleBlue.x = mouseX;
  circleBlue.x = constrain(circleBlue.x,0,500);
  circleSecret.y += circleSecret.speed;
  if (pinkTimer > 50)   {
  pinkTimer = 0
  circlePink.x = random(50,450);
  circlePink.y = random(225,275);
  }
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
  // let dy = circleBlue.y - circlePink.y
  let circleSize = (circleBlue.size + circlePink.size) / 2
  if (dx < circleSize / 2 && dx > 0 || dx > -circleSize/2 && dx < 0) {
    activityState = `end`
  }
}

function circlesFailCheck() {
  if (circlePink.x > width || circlePink.x < 0 || circlePink.y > height || circlePink.y < 0) {
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

function secretChance() {
    if (c < 2) {
      fill(circleSecret.fill.r,circleSecret.fill.g,circleSecret.fill.b);
      ellipse(circleSecret.x,circleSecret.y,circleSecret.size);
    }
}

function randomizeSecret() {
  c = random(1,10)
  print(c);
}

function secretTouchCheck() {
  let dx = circleBlue.x - circleSecret.x
  // let dy = circleBlue.y - circlePink.y
  let circleSize = (circleBlue.size + circleSecret.size) / 2
  if (dx < circleSize / 2 && dx > 0 && c < 2 || dx > -circleSize/2 && dx < 0 && c < 2) {
    activityState = `secret`
  }
}

function secretEnd() {
  background(255);
  fill(circleBlue.fill.r,circleBlue.fill.g,circleBlue.fill.b);
  ellipse(200,300,circleBlue.size)
  fill(circleSecret.fill.r,circleSecret.fill.g,circleSecret.fill.b);
  ellipse(300,300,circleSecret.size);
  textSize(35);
  text(`Ok then. Sure.`,250,200);
  textSize(22);
  text(`(Where did that one come from?)`,250,230);
}
