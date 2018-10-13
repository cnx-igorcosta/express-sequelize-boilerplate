const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { wrapAsync, errorHandler } = require('wrap-to-handle')

// Controllers
const ExampleController = require('./src/controllers/example-controller')
const HealthController = require('./src/controllers/health-controller')

const app = express()

// Middlewares
app.use(cors())
app.use(bodyParser.json())

// Routes
app.post('/api/v1/example', wrapAsync(ExampleController.post))
app.get('/api/v1/health', HealthController.check)

// Default express error handling
app.use(errorHandler)

module.exports = app
