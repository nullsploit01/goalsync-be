import cors from 'cors'
import express from 'express'
import { onRequest } from 'firebase-functions/v2/https'

import { Environment } from './config/environment'
import { errorLogger, httpLogger, logger } from './config/logger'
import { TeamsRouter } from './routes'

const app = express()

app.use(cors())

app.use(httpLogger)
app.use(errorLogger)

app.use('/teams', TeamsRouter)

if (Environment.nodeEnv === 'local') {
  app.listen(Environment.port, () => {
    logger.info(
      `Server is running on http://localhost:${Environment.port}/ in ${Environment.nodeEnv} mode`
    )
  })
}

exports.api = onRequest(app)
