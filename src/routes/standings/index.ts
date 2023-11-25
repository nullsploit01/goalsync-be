import { Router } from 'express'
import { query } from 'express-validator'

import { standingsController } from '../../controllers/'
import { requestValidator } from '../../middlewares'

const router = Router()

router.get(
  '/',
  [
    query('season').notEmpty().withMessage('season is required'),
    query('league').notEmpty().withMessage('league is required')
  ],
  requestValidator,
  standingsController.standings
)

export { router as StandingsRouter }
