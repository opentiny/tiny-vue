export interface IValidateError {
  minLengthError?: {
    given: number
    minLength: number
  }
  maxLengthError?: {
    given: number
    maxLength: number
  }
  requiredError?: { empty: boolean }
}
