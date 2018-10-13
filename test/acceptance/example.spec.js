const { expect } = require('chai')
const supertest = require('supertest')
const nock = require('nock')
const envLoader = require('env-o-loader')

const app = require('../../app')

const request = supertest(app)

const { externalApiUri } = envLoader('../../src/config/api-integration.yaml')

describe('[Example]', () => {
  describe('POST /api/v1/example', () => {
    let res

    context('When required params not sent', () => {
      before(async () => {
        res = await request.post('/api/v1/example').send({})
      })

      it('Should return status 400', () => {
        expect(res.status).to.be.eql(400)
      })

      it('Should return error message', () => {
        expect(res.body).to.be.eql({ message: 'name is required' })
      })
    })

    context('When required params sent', () => {
      const attrs = {
        name: 'Example',
        age: 20,
      }

      const externalApiResponse = {
        user_id: 1010,
        user_name: 'Eren Jaeger',
      }

      before(async () => {
        nock(externalApiUri)
          .get(`/api/v1/external?name=${attrs.name}&age=${attrs.age}`)
          .reply(200, externalApiResponse)

        res = await request.post('/api/v1/example').send(attrs)
      })

      it('Should return status 200', () => {
        expect(res.status).to.be.eql(200)
      })

      it('Should return example object', () => {
        expect(res.body.data).to.be.eql({
          id: 1,
          name: 'Example',
          age: 20,
          user_id: 1010,
          user_name: 'Eren Jaeger',
        })
      })
    })
  })
})
