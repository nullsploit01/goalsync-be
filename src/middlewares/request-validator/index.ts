import { validationResult } from 'express-validator'

import { RequestValidationError } from '../../errors'
import { IRequestValidator } from '../interface'

export const requestValidator: IRequestValidator = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array())
  }

  next()
}
