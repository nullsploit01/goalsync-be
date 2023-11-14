import { logger } from '../../config'
import { CustomError } from '../../errors'
import { IErrorHandler } from '../interface'

export const errorHandler: IErrorHandler = (err, req, res, next) => {
  logger.error(err.message)

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json(err.serializeErrors())
  }

  return res.status(500).json({
    error: 'Something Went Wrong',
    code: 'INTERNAL_SERVER_ERROR'
  })
}
