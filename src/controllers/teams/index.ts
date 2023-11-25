import { RequiredParamsError } from '../../errors/required-params'
import { IControllerMethod } from '../../interfaces/controllers'
import { teamsServcie } from '../../services/'

class TeamsController {
  statistics: IControllerMethod = async (req, res, next) => {
    try {
      const { team, league, season } = req.query

      if (!team || !league || !season) throw new RequiredParamsError()

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

  info: IControllerMethod = async (req, res, next) => {
    try {
      const { id } = req.query

      if (!id) throw new RequiredParamsError()

      const teamInfo = await teamsServcie.info(id.toString())
      return res.json(teamInfo)
    } catch (error) {
      next(error)
    }
  }

  seasons: IControllerMethod = async (req, res, next) => {
    try {
      const { team } = req.query

      if (!team) throw new RequiredParamsError()

      const teamInfo = await teamsServcie.seasons(team.toString())
      return res.json(teamInfo)
    } catch (error) {
      next(error)
    }
  }

  countries: IControllerMethod = async (req, res, next) => {
    try {
      const countries = await teamsServcie.countries()
      return res.json(countries)
    } catch (error) {
      next(error)
    }
  }
}

export const teamsController = new TeamsController()
