// CONFIGURATION
const examplesDir = './public/examples/'
const extraLibs = {
  'falling-emojis.js': [
    'https://cdn.jsdelivr.net/npm/emojione@3.1.6/lib/js/emojione.min.js'
  ]
}
//=============================================================================
const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')
const nunjucks = require('nunjucks')
const express = require('express')
const showdown = require('showdown')

const app = express()
app.use(express.static('public'))

const converter = new showdown.Converter()

nunjucks.configure('templates', {
  express: app,
  autoescape: true,
  noCache: true,
})

// Get an array of all examples.
function getExamples() {
  return new Promise(resolve => {
    glob(examplesDir + '**/*.js', (err, files) =>
      resolve(
        // Return the path relative from the examples directory
        files.map(
          x => x.substring(examplesDir.length))))
  })
}

function getDescription(text) {
  // Get the contents of the top multiline comment (everything between /* and */)
  let groups = /^\/\*([\s\S]*?)\*\//.exec(text.trim())
  if (groups === null) {
    return ''
  } else {
    return converter.makeHtml(groups[1])
  }
}

// Serve the home page
app.get('/', async (req, res) => {
  res.render('index.html', {examples: await getExamples()})
})

// Serve up examples from the examples directory
app.get('/example/:name', async (req, res) => {
  try {
    let example = req.params.name
    let path_ = path.join('./public/examples', example)
    // Read the file, error will be raised if it doesn't exist
    let text = await fs.readFile(path_, 'utf8')
    res.render('example.html', {
      example,
      description: getDescription(text),
      extraLibs: extraLibs[example],
    })
  } catch (err) {
    // File doesn't exist, serve 404
    if (err.code === 'ENOENT') {
      res.status(404).send('No such example found')
    }
  }
})

const listener = app.listen(process.env.PORT || 8000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
