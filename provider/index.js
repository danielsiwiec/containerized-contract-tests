const express = require('express')
const ngrok = require('ngrok')
const fs = require('fs')

const app = express()
const port = 3000

const animals = {
  duck: {
    family: "bird",
    sound: "quack quack!",
    famousMember: "Donald Duck"
  },
  dog: {
    family: "mamal",
    sounds: "woof!",
    famousMember: "Odie"
  }
}

app.get('/:animal', (req, res) => res.json(animals[req.params.animal]))

app.listen(port, async () => {
  const url = await ngrok.connect(port)
  fs.appendFileSync('url.txt', url);
  console.log(`Server started at ${url}`)
})