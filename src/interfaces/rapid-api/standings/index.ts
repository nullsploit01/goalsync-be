import { IGoal, ILeague, ITeam } from '../teams'

export interface IStanding {
  league: ILeague
  standings: IStandingInfo[]
}

export interface IStandingInfo {
  rank: number
  team: ITeam
  points: number
  goalsDiff: number
  group: string
  form: string
  status: string
  description: string
  all: ITeamStandingInfo
  home: ITeamStandingInfo
  away: ITeamStandingInfo
  update: string
}

export interface ITeamStandingInfo {
  played: number
  win: number
  draw: number
  lose: number
  goals: IGoal
}
