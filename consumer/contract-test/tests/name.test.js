const axios = require('axios')

describe('Name service', () => {
  it('should have the right schema', async () => {
    const response = await axios('http://localhost:3000')
    const body = response.data
    expect(body.name).toBeDefined()
    expect(body.name.first).toBeDefined()
    expect(body.name.nick).toBeDefined()
  })
})