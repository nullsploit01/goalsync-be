import cors from 'cors'
import express from 'express'
import { onRequest } from 'firebase-functions/v2/https'

import { Environment } from './config/environment'
import { errorLogger, httpLogger, logger } from './config/logger'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use(httpLogger)
app.use(errorLogger)

if (Environment.nodeEnv === 'local') {
  app.listen(Environment.port, () => {
    logger.info(`Server is running on http://localhost:${Environment.port}/`)
  })
}

exports.api = onRequest(app)
