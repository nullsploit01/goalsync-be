import { rapidApiClient } from '../../clients'

class TeamsService {
  statistics = async () => {
    const { data } = await rapidApiClient.get('/teams/statistics', {
      params: {
        league: '39',
        season: '2020',
        team: '33'
      }
    })

    return data
  }
}

export const teamsServcie = new TeamsService()
