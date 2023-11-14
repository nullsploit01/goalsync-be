import { teamsServcie } from '../../services'
import { IControllerMethod } from '../interface'

class TeamsController {
  statistics: IControllerMethod = async (req, res, next) => {
    try {
      const stats = await teamsServcie.statistics()
      return res.json(stats)
    } catch (err) {
      next(err)
    }
  }
}

export const teamsController = new TeamsController()
