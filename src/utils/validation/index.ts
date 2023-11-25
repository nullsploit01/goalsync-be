import { Request } from 'express'

import { RequiredParamsError } from '../../errors/required-params'

export const validateQueryParams = (req: Request, ...params: any[]) => {
  params.map((param) => {
    if (!param || !(param in req.query)) {
      throw new RequiredParamsError()
    }
  })
}
