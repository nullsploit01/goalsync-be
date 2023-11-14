import { IControllerMethod } from '../interface'

class TeamsController {
  statistics: IControllerMethod = async (req, res, next) => {
    return res.send({ message: 'ok' })
  }
}

export const teamsController = new TeamsController()
