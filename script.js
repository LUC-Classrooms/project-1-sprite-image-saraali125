// Global Variables go here
let catX, catY; // position of the cat
let catSize; // size of the cat
let catJumpSpeed; // vertical jump speed

function setup() {
  createCanvas(600, 500);

  catX = width / 2;
  catY = height / 2;
  catSize = 60; // Initial size of the cat's head
  catJumpSpeed = -5; // Initial jump speed
}

function draw() {
  background(60, 170, 830); // Custom background color

  if (mouseIsPressed) {
    catY += catJumpSpeed;
  } else {
    catY += 5;
  }

  catY = constrain(catY, 0, height - catSize);

  drawCat(catX, catY, catSize);
}

function mousePressed() {
  catJumpSpeed = -8;
}

function drawCat(x, y, size) {
  // Draw head
  ellipse(300, y + 35, 80, 110);
  // Draw body
  stroke(255, 155, 50); //outline of the cat
  strokeWeight(1);
  ellipse(x, y - 45, size + 45, size + 40);

  triangle(x - 50, y - 101, x - 50, y - 60, x - 30, y - 82);
  triangle(x + 50, y - 101, x + 50, y - 60, x + 30, y - 82);

  fill(248);
  ellipse(x + 20, y - 60, 20, 20);
  ellipse(x - 20, y - 60, 20, 20);

  fill(20, 125, 20); //Darker color outer eye
  ellipse(x - 20, y - 60, 15, 20); // Bigger size of the head
  ellipse(x + 20, y - 60, 15, 20); // Bigger size of the head

  fill(20, 145, 20); // Light green color for the eyes
  ellipse(x - 20, y - 60, 10, 15);
  ellipse(x + 20, y - 60, 10, 15);

  fill(265, 130, 250); //pink color of nose
  triangle(x, y - 25, x - 10, y - 40, x + 12, y - 40);
  fill(255, 180, 50);
  stroke(200, 120, 50); //whiskers
  strokeWeight(2.5);
  line(x - 10, y - 35, x - 35, y - 40);
  line(x - 10, y - 35, x - 40, y - 30);
  line(x - 10, y - 35, x - 35, y - 20);
  line(x + 15, y - 35, x + 40, y - 40);
  line(x + 15, y - 35, x + 40, y - 30);
  line(x + 15, y - 35, x + 35, y - 20);

  strokeWeight(2.5);
  stroke(255, 180, 50); //mouth

  stroke(200, 110, 50);
  // Adjust positions of the rectangles based on the cat's position
  rect(315, y + 25, 15, 50);
  rect(275, y + 25, 15, 50);

  fill(255, 180, 50);
  stroke(255, 180, 50);
  ellipse(283, y + 24, 16, 9);
  ellipse(322, y + 24, 16, 9);

  fill(0, 400, 0);
  line(600, 200, 300, 10);
  line(300, 50, 300, 10);
  ellipse(300, 50, 30, 30);
  fill(290, 50, 200);
  ellipse(300, 84, 40, 40);
  fill(90, 500, 200);
  ellipse(300, 120, 30, 30);

  fill(265, 130, 250);
  ellipse(x + 22, y + 72, 20, 15);
  ellipse(x - 18, y + 72, 20, 15);
  
  fill(265, 130, 250);
  stroke(200, 130, 50);
  triangle(x - 46, y - 96, x - 47, y - 70, x - 38, y - 80);
  triangle(x + 46, y - 96, x + 47, y - 70, x + 38, y - 80);
  fill(255, 180, 50);

  // Draw the arc with respect to the cat's position
  arc(x + 41, y + 30, 90, 50, 0, HALF_PI);
  
  
  
  
  
}
