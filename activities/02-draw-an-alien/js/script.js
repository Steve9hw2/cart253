/**************************************************
Activity 02: Draw an Alien
Steve Berthiaume

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
    createCanvas(500,500);
    background(31, 15, 43);

    // body
    fill(161, 171, 164);
    noStroke();
    ellipseMode(CORNER);
    ellipse(125, 360, 250, 300)

    // head
    rect(125, 100, 250, 300, 40, 40, 120, 120)

    // antennae
    strokeWeight(20);
    stroke(161 ,171, 164);
    line(120,60,150,110)
    line(100,50,120,60)
    line(380,60,350,110)
    line(400,50,380,60)

    // eyes
    fill(252, 248, 0)
    noStroke()
    rect(160,200,70,50,20,20,0,50)
    rect(270,200,70,50,20,20,50,0)

    
}

// draw()
//
// Description of draw() goes here.
function draw() {

}
