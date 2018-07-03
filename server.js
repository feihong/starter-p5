const examplesDir = './public/examples/'

const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')
const nunjucks = require('nunjucks')
const express = require('express')

const app = express()
app.use(express.static('public'))

nunjucks.configure('templates', {
  autoescape: true,
  express: app,
  noCache: true,
})

async function getExamples() {
  return new Promise(resolve => {
    glob(examplesDir + '**/*.js', (err, files) =>
      resolve(files.map(
        x => x.substring(examplesDir.length))))
  })
}

app.get('/', async (req, res) => {
  res.render('index.html', {examples: await getExamples()})
})

app.get('/example/:name', async (req, res) => {
  try {
    let path_ = path.join('./public/examples', req.params.name)
    let file = await fs.stat(path_)
    res.render('example.html', {example: req.params.name})
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.status(404).send('No such example found')
    }
  }
})

const listener = app.listen(process.env.PORT || 8000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
