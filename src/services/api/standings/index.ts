import { rapidApiClient } from '../../../clients'
import { CACHE_KEYS } from '../../../constants'
import { IRapidAPIResponse } from '../../../interfaces/rapid-api'
import { IStanding } from '../../../interfaces/rapid-api/standings'
import { memoryCacheService } from '../../cache'

class StandingsService {
  standings = async (season: string, league: string) => {
    const cachedData = memoryCacheService.get(CACHE_KEYS.API.standings)
    if (cachedData) {
      return cachedData as IRapidAPIResponse<IStanding[]>
    }

    const { data } = await rapidApiClient.get('/standings', {
      params: {
        season,
        league
      }
    })
    memoryCacheService.set(CACHE_KEYS.API.standings, data)
    return data as IRapidAPIResponse<IStanding[]>
  }
}

export const standingsService = new StandingsService()
