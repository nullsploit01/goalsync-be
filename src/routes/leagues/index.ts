import { Router } from 'express'

import { leaguesController } from '../../controllers/'

const router = Router()

router.get('/', leaguesController.leagues)

export { router as LeaguesRouter }
