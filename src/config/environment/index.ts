import dotenv from 'dotenv'

const environment = process.env.NODE_ENV || 'development'
const envFilePath = `.env.${environment}`

dotenv.config({ path: envFilePath })

export const Environment = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV,
  rapidApi: {
    key: process.env.RAPIDAPI_KEY,
    url: process.env.RAPIDAPI_URL,
    host: process.env.RAPIDAPI_HOST
  },
  allowedOrigins: ['http://localhost:5147', process.env.ALLOWED_ORIGIN]
}
