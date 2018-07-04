let y = 200
let x = 300
let radius = 50

function setup() {
	createCanvas(720, 400)
  stroke(255)
  frameRate(30)
}

function draw() {
  background(0)
  y = y - 7
  if (y + radius < 0) {
    y = height
    x = random(20, 720)
    radius = random(10, 120)
  }
  ellipse(x, y, radius, radius)
}
