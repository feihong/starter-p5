const candidates =
  Object.keys(emojione.emojioneList)
  .map(k => emojione.emojioneList[k])
  .filter(item => item.category !== 'flags')
  .map(item => emojione.convert(item.uc_output))

function getRandomEmoji() {
  let index = Math.floor(random(0, candidates.length))
  return candidates[index]
}

let emojis = []

function newEmojiItem() {
  return {
    val: getRandomEmoji(),
    x: random(0, width - 40),
    y: -10
  }
}

function setup() {
  createCanvas(720, 320)
  textSize(64)

  emojis = [newEmojiItem()]

  // Add a new emoji every second.
  window.setInterval(() => {
    emojis = [
      ...emojis.filter(e => e.y < height + 10),
      newEmojiItem()
    ]
    // console.log(emojis.length);
  }, 1000)
}

function draw() {
  background('lightblue')

  for (let emoji of emojis) {
    emoji.y += 1
    text(emoji.val, emoji.x, emoji.y)
  }
}
