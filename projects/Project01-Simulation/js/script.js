/**************************************************
Project 01: Simulation
Steve Berthiaume

This is my take on the first project for CART 253.
**************************************************/
// variable declaration.
let gameState = undefined // possible assignments: intro, phaseOne, phaseTwo, end, failOne, failTwo
let musicPlaying = false
let jumpBool = false
let descending = false
let jumpStatus = 0 // number which will change to match cateOne.jumpPower, used to track the status and determine descending.
let enterPrompt = false
let cheemsTalked = false

// object declaration.
let cateOne = {
  x:100,
  y:900,
  size:100,
  speed:5,
  jumpPower:20,
  jumpTime:20,
}

// cloud declaration - used for random cloud generation.
let cloudOne = {
  x:0,
  y:0,
  vx:-1,
  length:80,
  height:40,
  curvature:0,
  fill:100,
};
let cloudTwo = {
  x:0,
  y:0,
  vx:-1.5,
  length:60,
  height:20,
  curvature:0,
  fill:100,
};
let cloudThree = {
  x:0,
  y:0,
  vx:-1.2,
  length:50,
  height:20,
  curvature:0,
  fill:100,
};
let cloudFour = {
  x:0,
  y:0,
  vx:-1.4,
  length:120,
  height:50,
  curvature:0,
  fill:100,
};
let cloudFive = {
  x:0,
  y:0,
  vx:-1.6,
  length:100,
  height:30,
  curvature:0,
  fill:100,
}
let cloudSix = {
  x:0,
  y:0,
  vx:-1.6,
  length:90,
  height:50,
  curvature:0,
  fill:0,
};

// image declaration.
let cateCaution
let cateJump
let cateLie
let catePls
let catePounce
let cateSit
let cateStare
let borgar
let mcdonal
let tileFloor
let tileWall
let cheems
let cheems2
let donaldsLogo
let redX
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
  mcdonal = loadImage(`assets/images/mcdonal.png`)
  tileFloor = loadImage(`assets/images/tileFloor.png`)
  tileWall = loadImage(`assets/images/tileWall.png`)
  cheems = loadImage(`assets/images/cheems.png`)
  cheems2 = loadImage(`assets/images/cheemsTwo.png`)
  donaldsLogo = loadImage(`assets/images/donaldslogo.png`)
  redX = loadImage(`assets/images/BAD.png`)
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
    randomizeClouds();
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
    textPrompt();
    cateIsLost();
    if (keyIsPressed) {
      playerInput();
    }
    cateOneDraw();
    print(jumpBool);
    }
    else if (gameState === `failOne`) {

    }
    else if (gameState === `phaseTwo`) {
    background(224,132,27);
    layoutTwo();
    musicTwo();
    textPromptTwo();
    if (keyIsPressed) {
      playerInput();
    }
    grabBorgar();
    cateOneDraw();
    }
    else if (gameState === `failTwo`) {
    noJumping();
    }
    else if (gameState === `end`) {
    endScreen();
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
  if (keyCode === 13 && gameState == `phaseOne` && enterPrompt == true) {
    gameState = `phaseTwo`
    middayGardens.stop();
    musicPlaying = false
    cateOne.x = 150;
  }
  if (keyCode === 13 && gameState == `phaseTwo` && enterPrompt == true && cateOne.x > 1200) {
    cheemsTalked = true;
  }
  if (keyCode === 32 && gameState == `phaseTwo`) { // bad end
    gameState = `failTwo`
    eveningLake.stop();
  }
}

function playerInput() {
 if (keyCode === 65 && gameState === `phaseOne`) { // A for left (1)
    leftOne();
  }
  else if (keyCode === 68 && gameState === `phaseOne`) { // D for right (1)
    rightOne();
  }
  else if (keyCode === 65 && gameState === `phaseTwo`) { // A for left (2)
    leftTwo();
  }
  else if (keyCode === 68 && gameState === `phaseTwo` ) { // D for right (2)
    rightTwo();
  }
}

function layoutOne() {
  fill(51,48,47); // asphalt gray
  rect(0,925,2400,275);
  clouds();
  image(mcdonal,1100,-25);
}

function musicOne() {
  if (musicPlaying === false) {
  musicPlaying = true
  middayGardens.play();
  }
}

function musicTwo() {
  if (musicPlaying === false) {
    musicPlaying = true
    eveningLake.play();
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
  cateOne.x = constrain(cateOne.x,100,2100);
  // descending = false;
  // jumpBool = false
}

function rightOne() {
  cateOne.x += cateOne.speed
  cateOne.x = constrain(cateOne.x,100,2100);
  // descending = false;
  // jumpBool = false;
}

function leftTwo() {
  cateOne.x -= cateOne.speed
  cateOne.x = constrain(cateOne.x,100,1700);
}

function rightTwo() {
  cateOne.x += cateOne.speed
  cateOne.x = constrain(cateOne.x,100,1700);
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

function clouds() {     // function which moves clouds and launches a check function. Could inheritence help here? Probably.
  cloudOne.x += cloudOne.vx
  cloudTwo.x += cloudTwo.vx
  cloudThree.x += cloudThree.vx
  cloudFour.x += cloudFour.vx
  cloudFive.x += cloudFive.vx
  cloudSix.x += cloudSix.vx
  cloudOneCheck();
  cloudTwoCheck();
  cloudThreeCheck();
  cloudFourCheck();
  cloudFiveCheck();
  cloudSixCheck();
  noStroke();
  fill(cloudOne.fill);
  rect(cloudOne.x,cloudOne.y,cloudOne.length,cloudOne.height,cloudOne.curvature);
  fill(cloudTwo.fill);
  rect(cloudTwo.x,cloudTwo.y,cloudTwo.length,cloudTwo.height,cloudTwo.curvature);
  fill(cloudThree.fill);
  rect(cloudThree.x,cloudThree.y,cloudThree.length,cloudThree.height,cloudThree.curvature);
  fill(cloudFour.fill);
  rect(cloudFour.x,cloudFour.y,cloudFour.length,cloudFour.height,cloudFour.curvature);
  fill(cloudFive.fill);
  rect(cloudFive.x,cloudFive.y,cloudFive.length,cloudFive.height,cloudFive.curvature);
  fill(cloudSix.fill);
  rect(cloudSix.x,cloudSix.y,cloudSix.length,cloudSix.height,cloudSix.curvature);
}

function randomizeClouds() {
  cloudOne.x = random(0,2400);
  cloudOne.y = random(0,300);
  cloudTwo.x = random(0,2400);
  cloudTwo.y = random(0,300);
  cloudThree.x = random(0,2400);
  cloudThree.y = random(0,300);
  cloudFour.x = random(0,2400);
  cloudFour.y = random(0,300);
  cloudFive.x = random(0,2400);
  cloudFive.y = random(0,300);
  cloudSix.x = random(0,2400);
  cloudSix.y = random(0,300);
  cloudOne.length = random(180,500);
  cloudTwo.length = random(180,500);
  cloudThree.length = random(180,500);
  cloudFour.length = random(180,500);
  cloudFive.length = random(180,500);
  cloudSix.length = random(180,500);
  cloudOne.height = random(90,180);
  cloudTwo.height = random(90,180);
  cloudThree.height = random(90,180);
  cloudFour.height = random(90,180);
  cloudFive.height = random(90,180);
  cloudSix.height = random(90,180);
  cloudOne.curvature = cloudOne.length/3
  cloudTwo.curvature = cloudTwo.length/3
  cloudThree.curvature = cloudThree.length/3
  cloudFour.curvature = cloudFour.length/3
  cloudFive.curvature = cloudFive.length/3
  cloudSix.curvature = cloudSix.length/3
  cloudFillRandomize();
}

function cloudOneCheck() {
  if (cloudOne.x < -500) {
    cloudOne.x = 2500
    cloudOne.y = random(0,300);
    cloudOne.length = random(180,500);
    cloudOne.height = random(90,180);
  }
}

function cloudTwoCheck() {
  if (cloudTwo.x < -500) {
    cloudTwo.x = 2500
    cloudTwo.y = random(0,300);
    cloudTwo.length = random(180,500);
    cloudTwo.height = random(90,180);
  }
}

function cloudThreeCheck() {
  if (cloudThree.x < -500) {
    cloudThree.x = 2500
    cloudThree.y = random(0,300);
    cloudThree.length = random(180,500);
    cloudThree.height = random(90,180);
  }
}

function cloudFourCheck() {
  if (cloudFour.x < -500) {
    cloudFour.x = 2500
    cloudFour.y = random(0,300);
    cloudFour.length = random(180,500);
    cloudFour.height = random(90,180);
  }
}

function cloudFiveCheck() {
  if (cloudFive.x < -500) {
    cloudFive.x = 2500
    cloudFive.y = random(0,300);
    cloudFive.length = random(180,500);
    cloudFive.height = random(90,180);
  }
}

function cloudSixCheck() {
  if (cloudSix.x < -500) {
    cloudSix.x = 2500
    cloudSix.y = random(0,300);
    cloudSix.length = random(180,500);
    cloudSix.height = random(90,180);
  }
}

function cloudFillRandomize() {
  cloudOne.fill = random(120,200);
  cloudTwo.fill = random(120,200);
  cloudThree.fill = random(120,200);
  cloudFour.fill = random(120,200);
  cloudFive.fill = random(120,200);
  cloudSix.fill = random(120,200);
}

function textPrompt() {
  if (cateOne.x > 1200 && cateOne.x < 1600 && gameState === `phaseOne`) {
    fill(0);
    rect(600,550,500,70,100)
    fill(255);
    textSize(25);
    text(`press enter to enter mcdonal.`,825,580);
    enterPrompt = true;
  }
  else {
    enterPrompt = false;
  }
}

function textPromptTwo() {
  if (cateOne.x > 1400 && gameState === `phaseTwo` && cheemsTalked === false) {
  fill(0);
  rect(600,550,500,70,100);
  fill(255);
  textSize(25);
  text(`press enter to talk to Cheems.`,825,580);
  enterPrompt = true;
  }
  else {
    enterPrompt = false;
  }
}

function layoutTwo() {
   image(tileWall,0,0);
    image(tileFloor,0,-100);
    image(donaldsLogo,1000,500);
    if (cheemsTalked === false) {
      image(cheems,1800,800)
    }
    else if (cheemsTalked === true) {
      image(cheems2,1800,800)
      fill(0);
      rect(200,100,1800,120,100);
      fill(255);
      textSize(35);
      text(`mmyou agaim? oh gommd. i'm so omver this. just tamke the burger and gemt out of here.`,950,160)
      image(borgar,200,800)
    }
} // scenery for inside mcdonal.

function grabBorgar() {
  if (gameState === `phaseTwo` && cheemsTalked === true && cateOne.x < 600) {
    gameState = `end`
    eveningLake.stop()
    midnightMountain.play()
  }
}

function endScreen() {
  background(0);
  image(cateLie,100,750);
  fill(255);
  textSize(60);
  text(`you got your mcdonal. good job.`,1700,200);
}

function noJumping() {
  background(0);
  image(cateJump,100,650);
  image(redX,150,720);
  fill(255);
  textSize(220);
  text(`BAD CAT!`,1600,500);
  textSize(40);
  text(`jumping in stores is rude, no burger for you!`,1700,900);
}

function cateIsLost() {
  
}
