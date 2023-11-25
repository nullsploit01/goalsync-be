import { Router } from 'express'
import { query } from 'express-validator'

import { teamsController } from '../../controllers'
import { requestValidator } from '../../middlewares'

const router = Router()

router.get(
  '/',
  [query('id').notEmpty().withMessage('id is required')],
  requestValidator,
  teamsController.info
)

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

router.get(
  '/seasons',
  [query('team').notEmpty().withMessage('team is required')],
  requestValidator,
  teamsController.seasons
)

router.get('/countries', teamsController.countries)

export { router as TeamsRouter }
