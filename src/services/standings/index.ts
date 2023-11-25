import { rapidApiClient } from '../../clients'
import { IRapidAPIResponse } from '../../interfaces/rapid-api'
import { IStanding } from '../../interfaces/rapid-api/standings'

class StandingsService {
  standings = async (season: string, league: string) => {
    const { data } = await rapidApiClient.get('/standings', {
      params: {
        season,
        league
      }
    })

    return data as IRapidAPIResponse<IStanding[]>
  }
}

export const standingsService = new StandingsService()
