import cors from 'cors'
import express from 'express'
import { onRequest } from 'firebase-functions/v2/https'

import { Environment, errorLogger, httpLogger, logger } from './config'
import { NotFoundError } from './errors'
import { errorHandler } from './middlewares'
import { LeaguesRouter, TeamsRouter } from './routes'

const app = express()

app.use(cors())
app.use(httpLogger)
app.use(errorLogger)

app.use('/teams', TeamsRouter)
app.use('/leagues', LeaguesRouter)

app.use('*', () => {
  throw new NotFoundError()
})

if (Environment.nodeEnv === 'local') {
  app.listen(Environment.port, () => {
    logger.info(
      `Server is running on http://localhost:${Environment.port}/ in ${Environment.nodeEnv} mode`
    )
  })
}

app.use(errorHandler)

exports.api = onRequest(app)
