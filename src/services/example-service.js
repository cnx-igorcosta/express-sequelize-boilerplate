const Example = require('../models/example')

module.exports = {
  async post(attrs) {
    // const example = new Example({ ...attrs })

    // const exampleAttrs = await example.save()

    // return exampleAttrs
    return { id: 1, ...attrs }
  },
}
