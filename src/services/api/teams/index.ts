import { rapidApiClient } from '../../../clients'
import { IRapidAPIResponse } from '../../../interfaces/rapid-api'
import { ICountry, IStatistics, ITeamInfo } from '../../../interfaces/rapid-api/teams'

class TeamsService {
  statistics = async (league: string, season: string, team: string) => {
    const { data } = await rapidApiClient.get('/teams/statistics', {
      params: {
        league: league,
        season: season,
        team: team
      }
    })

    return data as IRapidAPIResponse<IStatistics>
  }

  info = async (id: string) => {
    const { data } = await rapidApiClient.get('/teams', {
      params: {
        id
      }
    })

    return data as IRapidAPIResponse<ITeamInfo>
  }

  seasons = async (team: string) => {
    const { data } = await rapidApiClient.get('/teams/seasons', {
      params: {
        team
      }
    })

    return data as IRapidAPIResponse<number[]>
  }

  countries = async () => {
    const { data } = await rapidApiClient.get('/teams/countries')
    return data as IRapidAPIResponse<ICountry>
  }
}

export const teamsServcie = new TeamsService()
