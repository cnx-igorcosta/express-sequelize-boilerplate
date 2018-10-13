const FilterParams = require('filter-params')
const ExampleService = require('../services/example-service')
const ExternalService = require('../services/external-service')

module.exports = {
  async post(req, res) {
    const body = { ...req.body }

    const attrs = new FilterParams(body)
      .req('name')
      .commit()

    const external = await ExternalService.get({ ...attrs })

    if (!external) {
      throw new Error('External API is out')
    }

    const example = await ExampleService.create({ ...attrs, ...external })

    return res.json({ data: example })
  },
}
