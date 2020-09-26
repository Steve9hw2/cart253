/**************************************************
Activity 04- Dodging Covid-19
Steve Berthiaume

Because it's a very very scary
**************************************************/

let d = undefined;

let static = 1000;

let user = {
  x:0,
  y:0,
  size:100,
  fill: {
    r:200,
    g:100,
    b:0,
  }
};

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


// setup()
function setup() {
    createCanvas(windowWidth,windowHeight)
    covid19.y = random(0,height);
    covid19.vx = covid19.speed;
}

// draw()
function draw() {
    background(50,0,0);

    for (i = 0; i < static; i ++) {
      stroke(255);
      let x = random(0,width);
      let y = random(0,height);
      point(x,y);
    } // static

    user.x = mouseX;
    user.y = mouseY;

    fill(user.fill.r,user.fill.g,user.fill.b);
    ellipse(user.x,user.y,user.size);

    covid19.x += covid19.vx;
    covid19.y += covid19.vy;
    fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
    noStroke();
    ellipse(covid19.x,covid19.y,covid19.size)

    if (covid19.x > width) {
      covid19.x = 0
      covid19.y = random(0,height)
    } // screen wrapping

    d = dist(user.x,user.y,covid19.x,covid19.y);
    if (d < covid19.size/2 + user.size/2) {
      noLoop();
    } // contact
}
