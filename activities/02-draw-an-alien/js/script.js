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

    // moon
    noStroke(); // moonlight
    fill(243, 255, 173, 100);
    rect(200,0,440,440,210,210,210,210);

    fill(225, 237, 149); // moon body
    rect(220,20,400,400,200,200,200,200);

    fill(194, 207, 116);
    rect(340,60,50,50,30,20,25,25); // craters
    rect(460,160,60,60,30,30,30,30);
    rect(400,200,30,30,15,15,15,15);
    rect(450,290,40,40,15,30,20,20);

    // mountains
    fill(56, 33, 74);
    triangle(0,100,0,500,300,500);
    triangle(300,500,420,350,500,500);
    fill(38, 28, 46);
    triangle(0,100,0,500,200,500)
    triangle(300,500,440,388,500,500)


    // body
    fill(161, 171, 164);
    ellipseMode(CORNER);
    ellipse(125, 400, 250, 300);

    // neck

    fill(119, 128, 121);
    ellipse(215, 400, 75, 80)
    fill(161, 171, 164);
    ellipse(215, 385, 75, 80)
    fill(119, 128, 121);
    ellipse(215, 370, 75, 80)
    fill(161, 171, 164);
    ellipse(215, 355, 75, 80)
    fill(119, 128, 121);
    ellipse(215, 340, 75, 80)


    // head
    fill(161, 171, 164);
    rect(125, 100, 250, 300, 40, 40, 120, 120);

    // antennae
    strokeWeight(20);
    stroke(161 ,171, 164);
    line(120,60,150,110);
    line(100,50,120,60);
    line(380,60,350,110);
    line(400,50,380,60);

    // eyes
    fill(252, 248, 0);
    noStroke();
    rect(160,200,70,50,20,20,0,50);
    rect(270,200,70,50,20,20,50,0);

    //pupils
    fill(251, 252, 184);
    ellipse(200,190,30,60);
    ellipse(300,190,30,60);

    // eyelids (base)
    fill(119, 128, 121);
    ellipse(160,180,100,50);
    ellipse(240,180,100,50);

    // eyelids (cover)
    fill(161, 171, 164);
    rect(140,110,200,100);
    rect(230,140,40,100);
}

// draw()
//
// Description of draw() goes here.
function draw() {

}
