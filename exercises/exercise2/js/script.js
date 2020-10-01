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
  size:150,
}

let covid19 = {
  x:0,
  y:250,
  size:200,
  vx:0,
  vy:0,
  speed:10,
  fill : {
    r:255,
    g:0,
    b:0,
  }
};

let brahimg;
function preload() {
  brahimg = loadImage("assets/images/reviewbrah1.png")
};

let popeyesimg;
function preload() {
  popeyesimg = loadImage("assets/images/popeyes.png");
};


// setup()
function setup() {
    createCanvas(windowWidth,windowHeight)
    covid19.y = random(0,height);
    covid19.vx = covid19.speed;
}

// draw()
function draw() {
    background(120,50,0);

    for (i = 0; i < static; i ++) {
      stroke(255);
      let x = random(0,width);
      let y = random(0,height);
      point(x,y);
    } // static

    brah.x = mouseX;
    brah.y = mouseY;

    covid19.x += covid19.vx;
    covid19.y += covid19.vy;
    fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
    noStroke();
    ellipse(covid19.x,covid19.y,covid19.size)

    image(brahimg,brah.x,brah.y);

    image(popeyesimg,0,0);

    if (covid19.x > width) {
      covid19.x = 0
      covid19.y = random(0,height)
    } // screen wrapping

    d = dist(mouseX,mouseY,covid19.x,covid19.y);
    if (d < covid19.size/2 + 150/2) {
      noLoop();
    } // contact
}
