import { rapidApiClient } from '../../clients'
import { IAPIResponse } from '../../interfaces/rapid-api'
import { ILeagues } from '../../interfaces/rapid-api/leagues'

class LeaguesService {
  leagues = async (params: Record<string, string | undefined>) => {
    const { data } = await rapidApiClient.get('/leagues', { params })
    return data as IAPIResponse<ILeagues[]>
  }
}

export const leaguesService = new LeaguesService()
