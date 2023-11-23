import { teamsServcie } from '../../services'
import { IControllerMethod } from '../interface'

class TeamsController {
  statistics: IControllerMethod = async (req, res, next) => {
    try {
      const { team, league, season } = req.query

      if (!team || !league || !season) throw new Error('Not all params are provided')

      const stats = await teamsServcie.statistics(
        league.toString(),
        season.toString(),
        team.toString()
      )

      return res.json(stats)
    } catch (err) {
      next(err)
    }
  }
}

export const teamsController = new TeamsController()
