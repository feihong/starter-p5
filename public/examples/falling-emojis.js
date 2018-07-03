const candidates =
  Object.keys(emojione.emojioneList)
  .map(k => emojione.emojioneList[k])
  .filter(item => item.category !== 'flags')
  .map(item => emojione.convert(item.uc_output))

let emojis = []
let paused = false

function getRandomEmoji() {
  let index = Math.floor(random(0, candidates.length))
  return candidates[index]
}

function newEmojiItem() {
  return {
    val: getRandomEmoji(),
    x: random(-20, width - 40),
    y: -10
  }
}

function setup() {
  createCanvas(720, 320)
  textSize(64)

  emojis = [newEmojiItem()]

  // Add a new emoji every second.
  window.setInterval(() => {
    if (paused) return

    emojis = [
      ...emojis.filter(e => e.y < height + 10),
      newEmojiItem()
    ]
  }, 1000)
}

function draw() {
  if (paused) return

  background('lightblue')

  for (let emoji of emojis) {
    emoji.y += 1
    text(emoji.val, emoji.x, emoji.y)
  }
}

function keyPressed() {
  if (key === 'P') {
    paused = !paused
  }
}
