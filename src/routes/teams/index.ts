import { Router } from 'express'
import { query } from 'express-validator'

import { teamsController } from '../../controllers'
import { requestValidator } from '../../middlewares'

const router = Router()

router.get(
  '/statistics',
  [
    query('team').notEmpty().withMessage('team is required'),
    query('league').notEmpty().withMessage('league is required'),
    query('season').notEmpty().withMessage('season is required')
  ],
  requestValidator,
  teamsController.statistics
)

export { router as TeamsRouter }
