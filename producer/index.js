const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json({
  name: {
    first: 'Daniel',
    last: 'Siwiec',
    nick: 'Dan'
  }
}))

app.listen(port, () => console.log(`Server started on port ${port}!`))