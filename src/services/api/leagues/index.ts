import { rapidApiClient } from '../../../clients'
import { CACHE_KEYS, SEVEN_DAYS } from '../../../constants'
import { IRapidAPIResponse } from '../../../interfaces/rapid-api'
import { ILeagues } from '../../../interfaces/rapid-api/leagues'
import { memoryCacheService } from '../../cache'

class LeaguesService {
  leagues = async (params: Record<string, string | undefined>) => {
    const cachedData = memoryCacheService.get(CACHE_KEYS.API.leagues)

    if (cachedData) {
      return cachedData as IRapidAPIResponse<ILeagues[]>
    }

    const { data } = await rapidApiClient.get('/leagues', { params })
    memoryCacheService.set(CACHE_KEYS.API.leagues, data, SEVEN_DAYS)

    return data as IRapidAPIResponse<ILeagues[]>
  }
}

export const leaguesService = new LeaguesService()
