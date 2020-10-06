/**************************************************
Project 01: Simulation
Steve Berthiaume

This is my take on the first project for CART 253.
**************************************************/
// variable declaration.
let gameState = undefined // possible assignments: intro, phaseOne, phaseTwo, phaseThree, end, failOne, failTwo, failThree


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
  fill(119,196,75);
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
  fill(240,174,53);
  text(`Borgar`,1350,550);
  textSize(30);
  fill(255);
  text(`from mcDonal`,1550,625);
  textSize(70);
  text(`press enter to help him`,1400,850);
}

function keyPressed() {
  if (keyCode === 13 && gameState === `intro`) {
    gameState = `phaseOne`
  }
}

function layoutOne() {

}

function musicOne() {
  for(let i = 0; i < 1; i ++) {
  middayGardens.play();
  }
}
