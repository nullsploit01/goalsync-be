export interface IError {
  [key: string]: string
}

export interface IPaging {
  current: number
  total: number
}

export interface IRapidAPIResponse<T> {
  get: string
  response: T | T[]
  results: number
  paging: IPaging
  errors: IError[]
}
