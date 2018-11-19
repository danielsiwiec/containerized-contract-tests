const axios = require('axios')

describe('Animal service', () => {
  it('should describe a duck', async () => {
    const response = await axios(`${process.env.PROVIDER_URL}/duck`)
    const body = response.data
    expect(body).toBeDefined()
    expect(body.family).toBeDefined()
    expect(body.sound).toBeDefined()
  })
})