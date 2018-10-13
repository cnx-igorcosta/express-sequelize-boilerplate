const axios = require('axios')
const envLoader = require('env-o-loader')

const { externalApiUri } = envLoader('../config/api-integration.yaml')

module.exports = class ExternalApi {
  constructor() {
    this.url = `${externalApiUri}/api/v1/external`
  }

  get(attrs) {
    return axios.get(this.url, { params: { ...attrs } })
  }

  post(attrs) {
    return axios(this.url, { ...attrs })
  }
}
