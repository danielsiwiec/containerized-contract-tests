const express = require('express')
const ngrok = require('ngrok')
const fs = require('fs')

const app = express()
const port = 3000

app.get('/', (req, res) => res.json({
  name: {
    first: 'Daniel',
    last: 'Siwiec',
    nick: 'Dan'
  }
}))

app.listen(port, async () => {
  const url = await ngrok.connect(port)
  fs.appendFileSync('url.txt', url);
  console.log(`Server started at ${url}`)
})