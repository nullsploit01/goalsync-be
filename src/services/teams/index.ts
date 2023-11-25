import { rapidApiClient } from '../../clients'
import { IAPIResponse } from '../../interfaces/rapid-api'
import { IStatistics, ITeam, ITeamInfo } from '../../interfaces/rapid-api/teams'

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

  info = async (id: string) => {
    const { data } = await rapidApiClient.get('/teams', {
      params: {
        id
      }
    })

    return data as IAPIResponse<ITeamInfo>
  }

  seasons = async (team: string) => {
    const { data } = await rapidApiClient.get('/teams/seasons', {
      params: {
        team
      }
    })

    return data as IAPIResponse<number[]>
  }

  countries = async () => {
    const { data } = await rapidApiClient.get('/teams/countries')
    return data as IAPIResponse<ITeam>
  }
}

export const teamsServcie = new TeamsService()
