import { rapidApiClient } from '../../../clients'
import { CACHE_KEYS } from '../../../constants'
import { IRapidAPIResponse } from '../../../interfaces/rapid-api'
import { ICountry, IStatistics, ITeamInfo } from '../../../interfaces/rapid-api/teams'
import { memoryCacheService } from '../../cache'

class TeamsService {
  statistics = async (league: string, season: string, team: string) => {
    const cachedData = memoryCacheService.get(CACHE_KEYS.API.statistics)
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
    memoryCacheService.set(CACHE_KEYS.API.statistics, data)
    return data as IRapidAPIResponse<IStatistics>
  }

  info = async (id: string) => {
    const cachedData = memoryCacheService.get(CACHE_KEYS.API.info)

    if (cachedData) {
      return cachedData as IRapidAPIResponse<ITeamInfo>
    }

    const { data } = await rapidApiClient.get('/teams', {
      params: {
        id
      }
    })
    memoryCacheService.set(CACHE_KEYS.API.info, data)
    return data as IRapidAPIResponse<ITeamInfo>
  }

  seasons = async (team: string) => {
    const cachedData = memoryCacheService.get(CACHE_KEYS.API.seasons)

    if (cachedData) {
      return cachedData as IRapidAPIResponse<number[]>
    }

    const { data } = await rapidApiClient.get('/teams/seasons', {
      params: {
        team
      }
    })
    memoryCacheService.set(CACHE_KEYS.API.seasons, data)
    return data as IRapidAPIResponse<number[]>
  }

  countries = async () => {
    const cachedData = memoryCacheService.get(CACHE_KEYS.API.seasons)

    if (cachedData) {
      return cachedData as IRapidAPIResponse<number[]>
    }

    const { data } = await rapidApiClient.get('/teams/countries')
    memoryCacheService.set(CACHE_KEYS.API.countries, data)
    return data as IRapidAPIResponse<ICountry>
  }
}

export const teamsServcie = new TeamsService()
