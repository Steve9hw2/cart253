/**************************************************
Exercise 2
Steve Berthiaume


CART 253: Exercise 2- Dodge-em-
AKA: ReviewBrah vs. the bad Popeyes takeout
**************************************************/

let d = undefined; // distance

let brah = {  // player object
  x:0,
  y:0,
  size:80,
}

let popeyes19 = {   // chaser object
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
    createCanvas(1000,666)  // matching background image size
}

// draw()
function draw() {
    image(localeimg,0,0)  // background

    brah.x = mouseX-75;   //  player positioning
    brah.y = mouseY-75;

    if (mouseX < popeyes19.x) {   // reaction to player position
      popeyes19.ax = -popeyes19.acceleration;
    }
    else {
      popeyes19.ax = popeyes19.acceleration;
    }

    if (mouseY < popeyes19.y) {
      popeyes19.ay = -popeyes19.acceleration;
    }
    else {
      popeyes19.ay = popeyes19.acceleration;
    }

    popeyes19.vx += popeyes19.ax; // movement
    popeyes19.vx = constrain(popeyes19.vx,-popeyes19.maxSpeed,popeyes19.maxSpeed)
    popeyes19.vy += popeyes19.ay;
    popeyes19.vy = constrain(popeyes19.vy,-popeyes19.maxSpeed,popeyes19.maxSpeed)

    popeyes19.x += popeyes19.vx;
    popeyes19.y += popeyes19.vy;

    image(brahimg,brah.x,brah.y); // draw player & chaser
    image(popeyesimg,popeyes19.x,popeyes19.y);

  //  console.log("popeyes19.x:" + popeyes19.x +"popeyes19.y:" + popeyes19.y) // console log, used for debugging
    d = dist(mouseX,mouseY,popeyes19.x,popeyes19.y);
    if (d < popeyes19.size/2 + brah.size/2) {   // fail state
      image(originalimg,0,0);
    //  background(120,50,0);   // these have been commented out as i prefer the original image.
    //  image(popeyesimg,covid19.x,covid19.y);
    //  image(bruhimg,brah.x,brah.y);
      noLoop();
    }
}
