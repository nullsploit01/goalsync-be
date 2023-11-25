export interface IStatistics {
  biggest: IBiggest
  cards: {
    red: IMinuteEvent
    yellow: IMinuteEvent
  }
  cleen_sheet: IFixtureType
  failed_to_score: IFixtureType
  fixturess: {
    draws: IFixtureType
    loses: IFixtureType
    wins: IFixtureType
    played: IFixtureType
  }
  form: string
  goals: {
    against: IGoalType
    for: IGoalType
  }
  league: ILeague
  lineups: ILineUp[]
  penalty: {
    missed: ITotalPercentage
    scored: ITotalPercentage
    total: number
  }
  team: ITeam
}

export interface ITeamInfo {
  team: ITeam
  venue: IVenue
}

export interface ILeague {
  id: number
  name: string
  country: string
  logo: string | null
  flag: string | null
  season: number
}

export interface ICountry {
  name: string
  code: string
  flag: string
}

export interface ILineUp {
  formation: string
  played: number
}

export interface ITeam {
  id: number
  name: string
  logo: string
  code: string
  country: string
  founded: number
  national: boolean
}

export interface IVenue {
  id: number
  name: string
  address: string
  city: string
  capacity: number
  surface: string
  image: string
}

export interface IFixtureType {
  home: number | string
  away: number | string
  total: number | string
}

export interface IFixture {
  played: IFixtureType
  wins: IFixtureType
  draws: IFixtureType
  loses: IFixtureType
}

export interface IGoal {
  for: IGoalType
  against: IGoalType
}

export interface IGoalType {
  total: IFixtureType
  average: IFixtureType
  minute: IMinuteEvent
}

export interface IMinuteEvent {
  '0-15': ITotalPercentage
  '16-30': ITotalPercentage
  '31-45': ITotalPercentage
  '46-60': ITotalPercentage
  '61-75': ITotalPercentage
  '76-90': ITotalPercentage
  '91-105': ITotalPercentage
  '106-120': ITotalPercentage
}

export interface ITotalPercentage {
  total: number
  percentage: string
}

export interface IBiggest {
  streak: IStreak
  wins: IHomeAwayStats
  loses: IHomeAwayStats
  goals: {
    for: IHomeAwayStats
    against: IHomeAwayStats
  }
}

export interface IStreak {
  wins: number
  loses: number
  draws: number
}

export interface IHomeAwayStats {
  home: string | null
  away: string | null
}
