/**************************************************
Exercise 2
Steve Berthiaume


CART 253: Exercise 2- Dodge-em-
AKA: ReviewBrah vs. the bad Popeyes takeout
**************************************************/

let d = undefined; // distance

let static = 1000;

let brah = {
  x:0,
  y:0,
  size:80,
}

let covid19 = {
  x:250,
  y:250,
  size:80,
  vx:0,
  vy:0,
  ax:0,
  ay:0,
  acceleration:0.6,
  maxSpeed: 10,
  fill : {
    r:255,
    g:0,
    b:0,
  }
};

let brahimg; // player image
let bruhimg; // failure image
let popeyesimg; // chaser image
let originalimg; // failscreen image
let localeimg; // background image
function preload() {
  popeyesimg = loadImage("assets/images/popeyes.png");
  brahimg = loadImage("assets/images/reviewbrah1.png");
  bruhimg = loadImage("assets/images/reviewbrah2.png");
  localeimg = loadImage("assets/images/popeyeslocale.jpg");
  originalimg = loadImage("assets/images/dayisruined.png")
};


// setup()
function setup() {
    createCanvas(1000,666)
}

// draw()
function draw() {
    image(localeimg,0,0)

    brah.x = mouseX-75;
    brah.y = mouseY-75;

    if (mouseX < covid19.x) {
      covid19.ax = -covid19.acceleration;
    }
    else {
      covid19.ax = covid19.acceleration;
    }

    if (mouseY < covid19.y) {
      covid19.ay = -covid19.acceleration;
    }
    else {
      covid19.ay = covid19.acceleration;
    }

    covid19.vx += covid19.ax;
    covid19.vx = constrain(covid19.vx,-covid19.maxSpeed,covid19.maxSpeed)
    covid19.vy += covid19.ay;
    covid19.vy = constrain(covid19.vy,-covid19.maxSpeed,covid19.maxSpeed)

    covid19.x += covid19.vx;
    covid19.y += covid19.vy;

    image(brahimg,brah.x,brah.y);

    image(popeyesimg,covid19.x,covid19.y);
    console.log("covid19.x:" + covid19.x +"covid19.y:" +covid19.y)
    d = dist(mouseX,mouseY,covid19.x,covid19.y);
    if (d < covid19.size/2 + brah.size/2) {   // fail state
      image(originalimg,0,0);
    //  background(120,50,0);
    //  image(popeyesimg,covid19.x,covid19.y);
    //  image(bruhimg,brah.x,brah.y);
      noLoop();
    } // contact
}
