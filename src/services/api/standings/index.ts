import { rapidApiClient } from '../../../clients'
import { IRapidAPIResponse } from '../../../interfaces/rapid-api'
import { IStanding } from '../../../interfaces/rapid-api/standings'
import { memoryCacheService } from '../../cache'

class StandingsService {
  standings = async (season: string, league: string, key: string) => {
    const cachedData = memoryCacheService.get(key)
    if (cachedData) {
      return cachedData as IRapidAPIResponse<IStanding[]>
    }

    const { data } = await rapidApiClient.get('/standings', {
      params: {
        season,
        league
      }
    })
    memoryCacheService.set(key, data)
    return data as IRapidAPIResponse<IStanding[]>
  }
}

export const standingsService = new StandingsService()
