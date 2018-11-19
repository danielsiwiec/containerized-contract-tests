const axios = require('axios')

const run = async () => {
  let duckUrl = `${process.env.PROVIDER_URL}/duck`
  const response = await axios.get(duckUrl)
  const duck = response.data
  console.log(`Duck is a ${duck.family} and it makes ${duck.sound}`)
}

run()