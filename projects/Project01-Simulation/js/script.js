/**************************************************
Project 01: Simulation
Steve Berthiaume

This is my take on the first project for CART 253.
**************************************************/
// variable declaration.
let gameState = undefined // possible assignments: intro, phaseOne, phaseTwo, phaseThree, end, failOne, failTwo, failThree
let musicPlaying = false
let jumpBool = false
let descending = false
let jumpStatus = 0 // number which will change to match cateOne.jumpPower, used to track the status and determine descending.

// object declaration.
let cateOne = {
  x:100,
  y:900,
  size:100,
  speed:5,
  jumpPower:20,
  jumpTime:20,
}

// image declaration.
let cateCaution
let cateJump
let cateLie
let catePls
let catePounce
let cateSit
let cateStare
let borgar

// sound delcaration.
let marioJump
let meow
let nomnom
let eveningLake
let middayGardens
let midnightMountain

// preload()
// Loading all essential assets.
function preload() {
  // images
  cateCaution = loadImage(`assets/images/cateCautious.png`)
  cateJump = loadImage(`assets/images/cateJump.png`)
  cateLie = loadImage(`assets/images/cateLie.png`)
  catePls = loadImage(`assets/images/CatePrePounce.png`)
  cateSit = loadImage(`assets/images/cateSitPaw.png`)
  cateStare = loadImage(`assets/images/cateStare.png`)
  borgar = loadImage(`assets/images/borgar.png`)
  // sounds
  marioJump = loadSound(`assets/sounds/marioJump.mp3`)
  meow = loadSound(`assets/sounds/meow.mp3`)
  nomnom = loadSound(`assets/sounds/nomnom.mp3`)
  eveningLake = loadSound(`assets/sounds/spyro3EveningLake.mp3`)
  middayGardens = loadSound(`assets/sounds/spyro3MiddayGardens.mp3`)
  midnightMountain = loadSound(`assets/sounds/spyro3MidnightMountain.mp3`)
}

// setup()
// Description of setup() goes here.
function setup() {
    createCanvas(2400,1200);
    gameState = `intro`;
}

// draw()
//
// Description of draw() goes here.
function draw() {
    if (gameState === `intro`) { // Start of application
    introLayout();
    introText();
  }
    else if (gameState === `phaseOne`) {
    background(120,139,245);
    layoutOne();
    musicOne();
    jumpOne();
    if (keyIsPressed) {
      playerInput();
    }
    cateOneDraw();
    print(jumpBool);
    }
    else if (gameState === `failOne`) {

    }
    else if (gameState === `phaseTwo`) {

    }
    else if (gameState === `failTwo`) {

    }
    else if (gameState === `phaseThree`) {

    }
    else if (gameState === `failThree`) {

    }
    else if (gameState === `end`) {

    }
}

function introLayout() {
  background(0);
  fill(119,196,75); // green
  rect(0,750,2400,700);
  image(cateStare, 300,450);
  image(borgar, 1600,250);
}

function introText() {
  textSize(120);
  textAlign(CENTER,CENTER);
  fill(255);
  text(`Cate Want`,1250,400);
  textSize(180);
  fill(240,174,53); // yellowish
  text(`Borgar`,1350,550);
  textSize(30);
  fill(255);
  text(`from mcDonal`,1550,625);
  textSize(70);
  text(`press enter to help him`,1400,850);
}

function keyPressed() {
  print (keyCode);
  if (keyCode === 13 && gameState === `intro`) {
    gameState = `phaseOne`
  } // Enter to start
  if (keyCode === 32 && gameState === `phaseOne`) { // Space to jump (1)
    jumpedOne();
  }
}

function playerInput() {
 if (keyCode === 65 && gameState === `phaseOne`) { // A for left (1)
    leftOne();
  }
  else if (keyCode === 68 && gameState === `phaseOne`) { // D for left (1)
    rightOne();
  }
}

function layoutOne() {
  fill(51,48,47); // asphalt gray
  rect(0,1000,2400,200);
}

function musicOne() {
  if (musicPlaying === false) {
  musicPlaying = true
  middayGardens.play();
  }
}

function jumpedOne() {
  if (jumpBool === false) {
    marioJump.play();
    jumpBool = true
    descending = false
    jumpStatus = 0
  }
}

function jumpOne() {
  if (jumpBool === true && descending === false) {
  if (jumpStatus < cateOne.jumpTime) {
  cateOne.y -= cateOne.jumpPower;
  jumpStatus ++;
  }
  else if (jumpStatus === cateOne.jumpTime) {
  cateOne.y -= cateOne.jumpPower/2;
  descending = true
  }
  }
  else if (jumpBool === true && descending === true) {
  if (jumpStatus > 0) {
  cateOne.y += cateOne.jumpPower;
  jumpStatus --;
  }
  else if (jumpStatus <= 0 && descending === true) {
  cateOne.y = 900;
  descending = false;
  jumpBool = false;
  print(`jump has been reset.`)
}
}
}

function leftOne() {
  cateOne.x -= cateOne.speed
  cateOne.x = constrain(cateOne.x,100,2300);
  // descending = false;
  // jumpBool = false;
}

function rightOne() {
  cateOne.x += cateOne.speed
  cateOne.x = constrain(cateOne.x,100,2300);
  // descending = false;
  // jumpBool = false;
}

function cateOneDraw() {
  if (jumpBool === false) {
  image(cateSit,cateOne.x,cateOne.y)
  }
  else if (jumpBool === true && descending === false) {
  image(cateJump,cateOne.x,cateOne.y)
  }
  else if (jumpBool === true && descending === true) {
  image(cateCaution,cateOne.x,cateOne.y)
  }
}
