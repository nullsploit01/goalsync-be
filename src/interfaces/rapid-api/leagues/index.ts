import { ICountry, ILeague } from '../teams'

export interface ILeagues {
  league: ILeague
  country: ICountry
  seasons: ISeason[]
}

export interface ISeason {
  year: number
  start: string
  end: string
  current: boolean
}
