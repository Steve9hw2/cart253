/**************************************************
Project 2 Prototype
Steve Berthiaume

This is a test for the final script. My goal here is
to test switch statements (the more efficient conditional),
test displaying scenes from a method, and to test
randomized scenes.
**************************************************/
"use strict";

let canvas;
let state = "start" // start, s1, s2, s3, s4, s5, load
let lemmings = [];
let numberOfLemmings = 50;
let p5hatty;
let lem0;
let lem1;
let lem2;
let lem3;
let lem4;
let lem5;
let lem6;
let lem7;
let lemIcon;
let menuPlayButton;
let menuPlayFade;

let areaOne;  // Area: object for the scene
let areaTwo;
let areaThree;
let areaFour;
let areaFive;
let sceneOne; // Scene: variation of the area
let sceneTwo;
let sceneThree;
let sceneFour;
let sceneFive;

let levelIndex = [
  [], // index zero, empty
  [`N/A`,`1 - 1: Simple`, `1 - 2: Unique`, `1 - 3: Uh Oh`, `1 - 4: Odd`, `1 - 5: Quiet`], // area one
  [],
  [],
  [],
];

let nextState; // used to track the next state after `load`
let rotationDeg = 1; // initial rotation increment for loading screen icon (degrees)
let frameCheck; // used to track time elapsed in loading screens
let loadTime = 3; // time, in seconds, spent in loading screens

function preload() {
  p5hatty = loadFont(`assets/fonts/p5hatty.ttf`);
  lem0 = loadImage(`assets/images/WeirdLemming.png`);
  lem1 = loadImage(`assets/images/DarkLemming.png`);
  lem2 = loadImage(`assets/images/FancyLemming.png`);
  lem3 = loadImage(`assets/images/DuskLemming.png`);
  lem4 = loadImage(`assets/images/BlandLemming.png`);
  lem5 = loadImage(`assets/images/RedLemming.png`);
  lem6 = loadImage(`assets/images/ArcticLemming.png`);
  lem7 = loadImage(`assets/images/GoldLemming.png`);
  lemIcon = loadImage(`assets/images/LemmingIcon.png`);
  menuPlayButton = loadImage(`assets/images/Button.png`);
  menuPlayFade = loadImage(`assets/images/ButtonFade.png`);
}

// setup()
function setup() {
    canvas = createCanvas(1600,1200);
    for(let i = 0; i < numberOfLemmings; i++) {
      let lemming;
      let variation = int(randomGaussian(3,2));
      lemming = new Lemming(variation);
      lemmings.push(lemming);
    }
    randomizeSections(); // This function randomizes the sceneOne-type values
    areaOne = new SceneOne(sceneOne); // This creates a new scene object which stores its variation as this.variant
    areaTwo = new SceneTwo(sceneTwo);
    areaThree = new SceneThree(sceneThree);
    areaFour = new SceneFour(sceneFour);
    areaFive = new SceneFive(sceneFive);
    frameRate(30);

}

// draw()
function draw() {
  switch (state) {
  case "start":
  startMenu();
  break;
  case "s1":
  loadScene(areaOne,areaOne.variant);
  break;
  case "s2":
  loadScene(areaTwo,areaTwo.variant);
  break;
  case "s3":
  loadScene(areaThree,areaThree.variant);
  break;
  case "s4":
  loadScene(areaFour,areaFour.variant);
  break;
  case "s5":
  loadScene(areaFive,areaFive.variant);
  break;
  case "load":
  loadingScreen();
  break;
  }
}

function randomizeSections() {
  sceneOne = int(random(1,5));
  sceneTwo = int(random(1,5));
  sceneThree = int(random(1,5));
  sceneFour = int(random(1,5));
  sceneFive = int(random(1,5));
}

function loadScene(area, variant) {
  switch (variant) {
    case 1:
    area.VariantOne();
    break;
    case 2:
    area.VariantTwo();
    break;
    case 3:
    area.VariantThree();
    break;
    case 4:
    area.VariantFour();
    break;
    case 5:
    area.VariantFive();
    break;
  }
  sceneNameDisplay(area.section, variant);
  remainingDisplay();
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
    let lem = lemmings[i];
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
  let buttonWidth = 320;
  let buttonHeight = 140;
  let buttonX = 625;
  let buttonY = 950;
  image(menuPlayButton,buttonX,buttonY);
  if (mouseX >= 625 && mouseX <= buttonX + buttonWidth && mouseY >= buttonY && mouseY <= buttonY + buttonHeight ) {
    menuPlayButtonFade();
  }
}

function menuPlayButtonFade() {
  image(menuPlayFade,625,950);
}

function mouseClicked() {
  let buttonWidth = 320;
  let buttonHeight = 140;
  let buttonX = 625;
  let buttonY = 950;
  if (mouseX >= 625 && mouseX <= buttonX + buttonWidth && mouseY >= buttonY && mouseY <= buttonY + buttonHeight && state == `start` ) {
    state = `load`;
    nextState = `s1`;
    frameCheck = int(frameCount/30);
  }
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
  for (let i = 0; i < numberOfLemmings; i++) {
    let lem = lemmings[i];
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

function sceneNameDisplay(area, variant) {
    let leveltext;
    push();
    fill(224,166,49);
    textSize(80);
    textFont(p5hatty);
    textAlign(LEFT,CENTER);
    leveltext = levelIndex[area][variant];
    text(leveltext,50,1100);
    pop();
    print(levelIndex[area][variant])
}

function remainingDisplay() {
  push();
  fill(224,166,49);
  textSize(80);
  textFont(p5hatty);
  textAlign(LEFT,CENTER);
  text(`x `+ numberOfLemmings, 160, 1000);
  image(lemIcon,60,1000);
  pop();
}
