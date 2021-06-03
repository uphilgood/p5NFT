function setup() {
  createCanvas(1000, 700);
  background("rgba(0,255,0, 0.25)");
}

function draw() {
  if (mouseIsPressed === true) {
    variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
  }
}

// The simple method variableEllipse() was created specifically
// for this program. It calculates the speed of the mouse
// and draws a small ellipse if the mouse is moving slowly
// and draws a large ellipse if the mouse is moving quickly

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  ellipse(x, y, speed, speed);
}
