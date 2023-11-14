import dotenv from 'dotenv'

const environment = process.env.NODE_ENV || 'development'
const envFilePath = `.env.${environment}`

dotenv.config({ path: envFilePath })

export const Environment = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV
}
