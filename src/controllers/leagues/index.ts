import { IControllerMethod } from '../../interfaces/controllers'
import { leaguesService } from '../../services'

class LeaguesController {
  leagues: IControllerMethod = async (req, res, next) => {
    try {
      const { id, name, country, code, season, team, type, current } = req.query
      const params = {
        id: id?.toString(),
        name: name?.toString(),
        country: country?.toString(),
        code: code?.toString(),
        season: season?.toString(),
        team: team?.toString(),
        type: type?.toString(),
        current: current?.toString()
      }

      const leagues = await leaguesService.leagues(params)
      return res.json(leagues)
    } catch (error) {
      next(error)
    }
  }
}

export const leaguesController = new LeaguesController()
