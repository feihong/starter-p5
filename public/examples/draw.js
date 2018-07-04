/*

Press x to clear the canvas

*/
let hueValue = 180

function setup() {
  createCanvas(500, 500)
  background('snow')
  colorMode(HSB)
}

function draw() {
}

// Putting this code inside of draw() won't work.
function mouseMoved() {
  let dx = abs(mouseX - pmouseX)
  let dy = abs(mouseY - pmouseY)
  let d = sqrt(sq(dx) + sq(dy))

  d = (d > 20) ? 20 : d   // cap at 20
  strokeWeight(d)

  hueValue = (hueValue + 1) % 360
  stroke(hueValue, 80, 100)

  line(pmouseX, pmouseY, mouseX, mouseY)
}

function keyPressed() {
  if (key === 'X') {
    background('snow')
  }
}
