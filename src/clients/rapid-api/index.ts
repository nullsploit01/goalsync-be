import { Environment } from '../../config'
import { httpClient } from '../axios'

const rapidApiHost = Environment.rapidApi.host
const rapidApiKey = Environment.rapidApi.host
const rapidApiUrl = Environment.rapidApi.url

if (!rapidApiUrl || !rapidApiHost || !rapidApiKey) {
  throw new Error('Rapid API Params are not defined')
}

const rapidApiAuthHeaders = {
  'X-RapidAPI-Key': rapidApiKey,
  'X-RapidAPI-Host': rapidApiHost
}

export const rapidApiClient = httpClient(rapidApiUrl, rapidApiAuthHeaders)
