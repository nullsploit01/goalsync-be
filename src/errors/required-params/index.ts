import { CustomError } from '../custom'

export class RequiredParamsError extends CustomError {
  statusCode = 400

  constructor(public message = 'Required Params are not provided') {
    super(message)
    Object.setPrototypeOf(this, RequiredParamsError.prototype)
  }

  serializeErrors() {
    return { error: this.message, code: 'BAD_REQUEST' }
  }
}
