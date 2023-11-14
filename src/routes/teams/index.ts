import { Router } from 'express'

import { teamsController } from '../../controllers'

const router = Router()

router.get('/statistics', teamsController.statistics)

export { router as TeamsRouter }
