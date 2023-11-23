import { rapidApiClient } from '../../clients'
import { IAPIResponse } from '../../interfaces/rapid-api'
import { IStatistics } from '../../interfaces/rapid-api/teams'

class TeamsService {
  statistics = async (league: string, season: string, team: string) => {
    const { data } = await rapidApiClient.get('/teams/statistics', {
      params: {
        league: league,
        season: season,
        team: team
      }
    })

    return data as IAPIResponse<IStatistics>
  }
}

export const teamsServcie = new TeamsService()
