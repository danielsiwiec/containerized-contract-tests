const axios = require('axios')

describe('Name service', () => {
  it('should have the right schema', async () => {
    const response = await axios(process.env.PROVIDER_URL)
    const body = response.data
    expect(body.name).toBeDefined()
    expect(body.name.first).toBeDefined()
    expect(body.name.nick).toBeDefined()
  })
})