/*

Use this scratch file for experiments!

This **multiline comment** will `be displayed` on the example page. You can use
the [Markdown language](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
here and _it will be rendered to HTML_. <span style='color:olive'>Hooray!</span>

*/

let hueValue = 0

function setup() {
  createCanvas(550, 200)
  textSize(128)
  background(225)
  colorMode(HSB)
  stroke(0)
  strokeWeight(4)
}

function draw() {
  hueValue = (hueValue + 0.5) % 360

  fill(hueValue, 80, 100)
  text('你好世界', 10, 140)
}
