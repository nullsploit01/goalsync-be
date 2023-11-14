import express from 'express'

import { errorLogger, httpLogger, logger } from './config/logger'

const app = express()

app.use(httpLogger)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use(errorLogger)

app.listen(5000, () => {
  logger.info(`express-winston demo listening on port 5000 in ${app.settings.env} mode`)
})
