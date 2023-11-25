import { RequiredParamsError } from '../../errors/required-params'
import { IControllerMethod } from '../../interfaces/controllers'
import { standingsService } from '../../services'

class StandingsController {
  standings: IControllerMethod = async (req, res, next) => {
    try {
      const { league, season } = req.query

      if (!league || !season) throw new RequiredParamsError()

      const standings = await standingsService.standings(season.toString(), league.toString())
      return res.json(standings)
    } catch (error) {
      next(error)
    }
  }
}

export const standingsController = new StandingsController()
