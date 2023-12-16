import cors from 'cors'
import express from 'express'
import { onRequest } from 'firebase-functions/v2/https'

import { Environment, errorLogger, httpLogger, logger } from './config'
import { BadRequestError, NotFoundError } from './errors'
import { errorHandler } from './middlewares'
import { LeaguesRouter, StandingsRouter, TeamsRouter } from './routes'

const app = express()

app.use(
  cors({
    origin(requestOrigin, callback) {
      if (requestOrigin && Environment.allowedOrigins.indexOf(requestOrigin) === -1) {
        var msg =
          'The CORS policy for this site does not ' + 'allow access from the specified Origin.'
        return callback(new BadRequestError(msg), false)
      }
      return callback(null, true)
    }
  })
)
app.use(httpLogger)
app.use(errorLogger)

app.use('/teams', TeamsRouter)
app.use('/leagues', LeaguesRouter)
app.use('/standings', StandingsRouter)

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
