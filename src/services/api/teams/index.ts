import { rapidApiClient } from '../../../clients'
import { IRapidAPIResponse } from '../../../interfaces/rapid-api'
import { ICountry, IStatistics, ITeamInfo } from '../../../interfaces/rapid-api/teams'
import { memoryCacheService } from '../../cache'

class TeamsService {
  statistics = async (league: string, season: string, team: string, key: string) => {
    const cachedData = memoryCacheService.get(key)
    if (cachedData) {
      return cachedData as IRapidAPIResponse<IStatistics>
    }

    const { data } = await rapidApiClient.get('/teams/statistics', {
      params: {
        league: league,
        season: season,
        team: team
      }
    })
    memoryCacheService.set(key, data)
    return data as IRapidAPIResponse<IStatistics>
  }

  info = async (id: string, key: string) => {
    const cachedData = memoryCacheService.get(key)

    if (cachedData) {
      return cachedData as IRapidAPIResponse<ITeamInfo>
    }

    const { data } = await rapidApiClient.get('/teams', {
      params: {
        id
      }
    })
    memoryCacheService.set(key, data)
    return data as IRapidAPIResponse<ITeamInfo>
  }

  seasons = async (team: string, key: string) => {
    const cachedData = memoryCacheService.get(key)

    if (cachedData) {
      return cachedData as IRapidAPIResponse<number[]>
    }

    const { data } = await rapidApiClient.get('/teams/seasons', {
      params: {
        team
      }
    })
    memoryCacheService.set(key, data)
    return data as IRapidAPIResponse<number[]>
  }

  countries = async (key: string) => {
    const cachedData = memoryCacheService.get(key)

    if (cachedData) {
      return cachedData as IRapidAPIResponse<number[]>
    }

    const { data } = await rapidApiClient.get('/teams/countries')
    memoryCacheService.set(key, data)
    return data as IRapidAPIResponse<ICountry>
  }
}

export const teamsServcie = new TeamsService()
