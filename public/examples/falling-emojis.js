let emojis = [
  {
    val: '👊',
    x: 100,
    y: -10,
  }
]

function setup() {
  createCanvas(720, 320)

  textSize(48)
  window.setInterval(() => {
    emojis = [
      ...emojis.filter(e => e.y < height + 10),
      {
        val: '👊',
        x: random(0, width - 15),
        y: -10
      }
    ]
    console.log(emojis.length);
  }, 1000)
}

function draw() {
  background('lightblue')

  for (let emoji of emojis) {
    emoji.y += 1
    text(emoji.val, emoji.x, emoji.y)
  }
}
