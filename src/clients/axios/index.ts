import axios from 'axios'

interface ICustomHeader {
  [key: string]: string
}

export const httpClient = (url: string, customHeaders: ICustomHeader = {}) => {
  return axios.create({
    baseURL: url,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      ...customHeaders
    }
  })
}
