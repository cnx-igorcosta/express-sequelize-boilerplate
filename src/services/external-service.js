const ExternalApi = require('../api/external-api')

module.exports = {
  async get(attrs) {
    const { data = null } = await new ExternalApi().get(attrs)

    return data
  },
}
