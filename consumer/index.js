const axios = require('axios')

const run = async () => {
  const response = await axios.get('http://localhost:3000')
  const body = response.data
  console.log(`His first name is ${body.name.first}, but he goes by ${body.name.nick}`)
}

run()