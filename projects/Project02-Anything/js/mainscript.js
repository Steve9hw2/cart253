/**************************************************
Lemmings
Steve Berthiaume

This is the main script for Lemmings.
**************************************************/

"use strict";

let canvas;
let state = "start" // start, s1, s2, s3, s4, s5, load, end, fail
let lemmings = [];
let numberOfLemmings = 50;
let deadLemmings = 0;
let savedLemmings = 0;
let lemmingDelta = 0;

let p5hatty;
let lem;
let lem0;
let lem1;
let lem2;
let lem3;
let lem4;
let lem5;
let lem6;
let lem7;
let lemIcon;
let lemIconSmall;
let lemIconSaved;
let lemIconDead;

let menuPlayButton;
let menuPlayFade;

let clouds = [];
let cloud;
let maxPossibleClouds = 100;

let singe;

let pitStartX = undefined;
let pitDisabled = false;

let areaOne;  // Area: object for the scene
let areaTwo;
let areaThree;
let areaFour;
let areaFive;
let sceneOne; // Scene: method of the area
let sceneTwo;
let sceneThree;
let sceneFour;
let sceneFive;
let v1; // v: numeric variation of the area
let v2;
let v3;
let v4;
let v5;

let gameSpeed = 1;
let normalSpeed = 1;
let fastSpeed = 5;
let fastforward;
let fastforwardfade;
let fastforwardhover;
let fastforwardfadehover;

let mute = false;
let musicPlaying = false;

let bg1_1;
let bg1_2;
let bg1_2alt;
let bg2_1;
let bg2_1alt;

let totemfallen = false; // Scene specific interactables
let totem;
let totemfell;
let totemhl;
let sunhl;
let sundisabled = false;
let wireleft;
let wirelefthl;
let wireleftcut;
let wireleftiscut = false;
let wireright;
let wirerighthl;
let wirerightcut;
let wirerightiscut = false;

let currentbgm;
let storedbgm;
let bgm1_1;
let bgm1_2;
let bgm2_1;

let audio;
let audiofade;
let audiohover;
let audiofadehover;

let scream;
let singed;
let shock;

let currentVariant;
let sceneOneVariants = [TotemCrossing,RealScorcher];
let sceneTwoVariants = [HighVoltage];
let sceneThreeVariants = [];
let sceneFourVariants = [];
let sceneFiveVariants = [];

let totemCrossing = new TotemCrossing();
let realScorcher = new RealScorcher();
let highVoltage = new HighVoltage();

let levelIndex = [
  [`N/A`,`N/A`,`N/A`,`N/A`,`N/A`,`N/A`], // index zero, empty
  [`N/A`,`1 - 1: Totem Crossing`, `1 - 2: A Real Scorcher`, `1 - 3: Undefined.`, `1 - 4: Undefined.`, `1 - 5: Undefined.`], // area one
  [`N/A`,`2 - 1: High Voltage`, `2 - 2: Undefined.`, `2 - 3: Undefined.`, `2 - 4: Undefined.`, `2 - 5: Undefined.`], // area two
  [`N/A`,`3 - 1: Undefined.`, `3 - 2: Undefined.`, `3 - 3: Undefined.`, `3 - 4: Undefined.`, `3 - 5: Undefined.`], // area three
  [`N/A`,`4 - 1: Undefined.`, `4 - 2: Undefined.`, `4 - 3: Undefined.`, `4 - 4: Undefined.`, `4 - 5: Undefined.`], // area four
  [`N/A`,`5 - 1: Undefined.`, `5 - 2: Undefined.`, `5 - 3: Undefined.`, `5 - 4: Undefined.`, `5 - 5: Undefined.`], // area five
];
let leveltext;

let nextState; // used to track the next state after `load`
let rotationDeg = 1; // initial rotation increment for loading screen icon (degrees)
let frameCheck; // used to track time elapsed in loading screens
let loadTime = 3; // time, in seconds, spent in loading screens

function preload() {
  p5hatty = loadFont(`assets/fonts/p5hatty.ttf`);
  // lemmings
  lem7 = loadImage(`assets/images/WeirdLemming.png`);
  lem4 = loadImage(`assets/images/DarkLemming.png`);
  lem2 = loadImage(`assets/images/FancyLemming.png`);
  lem6 = loadImage(`assets/images/DuskLemming.png`);
  lem1 = loadImage(`assets/images/BlandLemming.png`);
  lem3 = loadImage(`assets/images/RedLemming.png`);
  lem5 = loadImage(`assets/images/ArcticLemming.png`);
  lem0 = loadImage(`assets/images/GoldLemming.png`);
  // ui
  lemIcon = loadImage(`assets/images/LemmingIcon.png`);
  lemIconSmall = loadImage(`assets/images/LemmingIconSmall.png`);
  lemIconSaved = loadImage(`assets/images/LemmingIconSaved.png`);
  lemIconDead = loadImage(`assets/images/LemmingIconDead.png`);
  menuPlayButton = loadImage(`assets/images/Button.png`);
  menuPlayFade = loadImage(`assets/images/ButtonFade.png`);
  fastforward = loadImage(`assets/images/FastForward.png`);
  fastforwardfade = loadImage(`assets/images/FastForwardFade.png`);
  fastforwardhover = loadImage(`assets/images/FastForwardHover.png`);
  fastforwardfadehover = loadImage(`assets/images/FastForwardFadeHover.png`);
  audio = loadImage(`assets/images/Audio.png`);
  audiofade = loadImage(`assets/images/AudioFade.png`);
  audiohover = loadImage(`assets/images/AudioHover.png`);
  audiofadehover = loadImage(`assets/images/AudioFadeHover.png`);
  // dead lemmings
  singe = loadImage(`assets/images/CrispLemming.png`);
  // reusable section assets
  cloud = loadImage(`assets/images/cloud.png`);
  // section specific assets
  bg1_1 = loadImage(`assets/images/sections/sec1-1.png`);
  bg1_2 = loadImage(`assets/images/sections/sec1-2.png`);
  bg1_2alt = loadImage(`assets/images/sections/sec1-2alt.png`)
  bg2_1 = loadImage(`assets/images/sections/sec2-1.png`);
  bg2_1alt = loadImage(`assets/images/sections/sec2-1alt.png`);
  totem = loadImage(`assets/images/sections/totem.png`);
  totemhl = loadImage(`assets/images/sections/totemhighlight.png`);
  totemfell = loadImage(`assets/images/sections/totemfallen.png`);
  sunhl = loadImage(`assets/images/sections/sunhighlight.png`);
  wireleft = loadImage(`assets/images/sections/wireleft.png`);
  wirelefthl = loadImage(`assets/images/sections/wirelefthighlight.png`);
  wireleftcut = loadImage(`assets/images/sections/wireleftcut.png`);
  wireright = loadImage(`assets/images/sections/wireright.png`);
  wirerighthl = loadImage(`assets/images/sections/wirerighthighlight.png`);
  wirerightcut = loadImage(`assets/images/sections/wirerightcut.png`);
  bgm1_1 = loadSound(`assets/sounds/sectionmusic/1_1-CrashNST_Jungle_Rollers.mp3`);
  bgm1_2 = loadSound(`assets/sounds/sectionmusic/1_2-MonkeyBall_Desert.mp3`);
  bgm2_1 = loadSound(`assets/sounds/sectionmusic/2_1-CrashTWoC_H2_Oh_No.mp3`);
  scream = loadSound(`assets/sounds/scream.mp3`);
  singed = loadSound(`assets/sounds/fire.mp3`);
  shock = loadSound(`assets/sounds/shock.mp3`);
}

// setup()
function setup() {
    canvas = createCanvas(1600,1200);
    for(let i = 0; i < numberOfLemmings; i++) {
      let lemming;
      let variation = int(randomGaussian(3,2));
      lemming = new Lemming(variation);
      lemming.number = i;
      lemmings.push(lemming);
    }

    // randomize sections
    sceneOne = random(sceneOneVariants);
    sceneTwo = random(sceneTwoVariants);
    sceneThree = random(sceneThreeVariants);
    sceneFour = random(sceneFourVariants);
    sceneFive = random(sceneFiveVariants);
    switch(sceneOne) {
      case TotemCrossing:
      v1 = 1;
      break;
      case RealScorcher:
      v1 = 2;
      break;
    }
    switch(sceneTwo) {
      case HighVoltage:
      v2 = 1;
    }
    v3 = 1;
    v4 = 1;
    v5 = 1;
    let currentVariantOne = new sceneOne(v1);
    let currentVariantTwo = new sceneTwo(v2);
    // let currentVariantThree = new sceneThree(v3);
    // let currentVariantFour = new sceneFour(v4);
    // let currentVariantFive = new sceneFive(v5);

    areaOne = new SceneOne(sceneOne);
    areaTwo = new SceneTwo(sceneTwo);
    // areaThree = new SceneThree(sceneThree);
    // areaFour = new SceneFour(sceneFour);
    // areaFive = new SceneFive(sceneFive);
    frameRate(30);
    for(let i = 0; i < maxPossibleClouds; i++) {
      let newCloud = {
        x:random(0,1600),
        y:random(-50,200),
      };
      clouds.push(newCloud);
    }
}

// draw()
function draw() {
  print(state);
  switch (state) {
  case "start":
  startMenu();
  break;
  case "s1":
  switch(areaOne.section) {
    case 1:
    areaOne.update(v1,lemmings);
    displayLevel(areaOne.section,areaOne.variation);
    break;
    case 2:
    areaOne.update(v1,lemmings);
    displayLevel(areaOne.section,areaOne.variation);
    break;
    case 3:
    break;
    case 4:
    break;
    case 5:
    break;
  }
  break;
  case "s2":
  switch(areaTwo.section) {
    case 1:
    areaTwo.update(v2);
    displayLevel(areaTwo.section,areaTwo.variation);
    break;
    case 2:
    break;
    case 3:
    break;
    case 4:
    break;
    case 5:
    break;
  }
  break;
  case "s3":

  break;
  case "s4":

  break;
  case "s5":

  break;
  case "load":
  loadingScreen();
  break;
  case "end":
  break;
  case "fail":
  loadFailScreen();
  break;
  }
}

function startMenu() {
    background(0);
    push();
    fill(224,166,49);
    textSize(260);
    textFont(p5hatty);
    textAlign(CENTER,CENTER);
    text(`Lemmings`,800,200);
    menuLoadPlayButton();
    pop();
    menuLoadLemmings();
}

function menuLoadLemmings() {
let menuLemX = 400;
let menuLemY = 800;
let spacing = 160;
  for (let i = 0; i < 5; i++) {
    lem = lemmings[i];
    switch(lem.variant) {
      case 0:
      image(lem0,menuLemX,menuLemY);
      menuLemX += spacing;
      break;
      case 1:
      image(lem1,menuLemX,menuLemY);
      menuLemX += spacing;
      break;
      case 2:
      image(lem2,menuLemX,menuLemY);
      menuLemX += spacing;
      break;
      case 3:
      image(lem3,menuLemX,menuLemY);
      menuLemX += spacing;
      break;
      case 4:
      image(lem4,menuLemX,menuLemY);
      menuLemX += spacing;
      break;
      case 5:
      image(lem5,menuLemX,menuLemY);
      menuLemX += spacing;
      break;
      case 6:
      image(lem6,menuLemX,menuLemY);
      menuLemX += spacing;
      break;
      case 7:
      image(lem7,menuLemX,menuLemY);
      menuLemX += spacing;
      break;
    }
  }
}

function menuLoadPlayButton() {
  image(menuPlayButton,625,950);
  if (mouseX >= 625 && mouseX <= 625 + 320 && mouseY >= 950 && mouseY <= 950 + 140 ) {
    menuPlayButtonFade();
  }
}

function menuPlayButtonFade() {
  image(menuPlayFade,625,950);
}

function loadingScreen() {
  background(0);
  push();
  fill(224,166,49);
  textSize(120);
  textFont(p5hatty);
  textAlign(CENTER,CENTER);
  text(`Remaining Lemmings: `+ numberOfLemmings,800,150);
  pop();
  gameSpeed = normalSpeed;
  loadingScreenLemmings();
  loadingIcon();
  loadingTimer();
}

function loadingScreenLemmings() {
  let spacing = 160;
  let vertSpacing = 100;
  let startX = 180;
  let currentX = 180;
  let maxX = 1400;
  let startY = 250;
  let currentY = 250;
  for (let i = 0; i < 50; i++) {
    lem = lemmings[i];
    lem.moving = false;
    lem.safe = false;
    lem.collide = false;
    lem.singed = false;
    if (!lem.dead) {
    switch(lem.variant) {
    case 0:
    image(lem0,currentX,currentY);
    currentX += spacing;
    if (currentX > maxX) {
      currentX = startX;
      currentY += vertSpacing
    }
    break;
    case 1:
    image(lem1,currentX,currentY);
    currentX += spacing;
    if (currentX > maxX) {
      currentX = startX;
      currentY += vertSpacing
    }
    break;
    case 2:
    image(lem2,currentX,currentY);
    currentX += spacing;
    if (currentX > maxX) {
      currentX = startX;
      currentY += vertSpacing
    }
    break;
    case 3:
    image(lem3,currentX,currentY);
    currentX += spacing;
    if (currentX > maxX) {
      currentX = startX;
      currentY += vertSpacing
    }
    break;
    case 4:
    image(lem4,currentX,currentY);
    currentX += spacing;
    if (currentX > maxX) {
      currentX = startX;
      currentY += vertSpacing
    }
    break;
    case 5:
    image(lem5,currentX,currentY);
    currentX += spacing;
    if (currentX > maxX) {
      currentX = startX;
      currentY += vertSpacing
    }
    break;
    case 6:
    image(lem6,currentX,currentY);
    currentX += spacing;
    if (currentX > maxX) {
      currentX = startX;
      currentY += vertSpacing
    }
    break;
    case 7:
    image(lem7,currentX,currentY);
    currentX += spacing;
    if (currentX > maxX) {
      currentX = startX;
      currentY += vertSpacing
    }
    break;
  }
}
}
}

function loadingIcon() {
  push();
  translate(1475,1075);
  angleMode(DEGREES);
  rotate(rotationDeg);
  image(lemIcon,-70,-70);
  rotationDeg += 2
  pop();
}

function loadingTimer() {
    if (int(frameCount/30) > frameCheck + loadTime) {
      state = nextState;
    }
}

function mouseClicked() {
  if (mouseX >= 625 && mouseX <= 625 + 320 && mouseY >= 950 && mouseY <= 950 + 140 && state == `start` ) {
    state = `load`;
    nextState = `s1`;
    frameCheck = int(frameCount/30);
  } // start game
}

function displayLevel(area,variant) {
  push();
  fill(224,166,49); // scene name display
  textSize(60);
  textFont(p5hatty);
  textAlign(LEFT,CENTER);
  leveltext = levelIndex[area][variant];
  text(leveltext,50,1100);
  pop();
}

function checkEndS3() {
  if (deadLemmings === numberOfLemmings) {
    state = "fail";
  }
  else if (savedLemmings + deadLemmings === numberOfLemmings && savedLemmings > 0) {
    state = "load";
    nextState = "s4";
    frameCheck = int(frameCount/30);
    numberOfLemmings -= deadLemmings;
    lemmingDelta += deadLemmings;
    deadLemmings = 0;
    savedLemmings = 0;
  }
}

function checkEndS4() {
  if (deadLemmings === numberOfLemmings) {
    state = "fail";
  }
  else if (savedLemmings + deadLemmings === numberOfLemmings && savedLemmings > 0) {
    state = "load";
    nextState = "s5";
    frameCheck = int(frameCount/30);
    numberOfLemmings -= deadLemmings;
    lemmingDelta += deadLemmings;
    deadLemmings = 0;
    savedLemmings = 0;
  }
}

function checkEndS5() {
  if (deadLemmings === numberOfLemmings) {
    state = "fail";
  }
  else if (savedLemmings + deadLemmings === numberOfLemmings && savedLemmings > 0) {
    state = "load";
    nextState = "end";
    frameCheck = int(frameCount/30);
  }
}

function loadFailScreen() {
  background(0);
  push();
  fill(153,52,53);
  textSize(160);
  textFont(p5hatty);
  textAlign(CENTER,CENTER);
  text(`Extinction`,800,200);
  pop();
}
