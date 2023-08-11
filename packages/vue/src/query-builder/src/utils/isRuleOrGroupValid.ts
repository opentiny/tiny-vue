import type { RuleGroupTypeAny, RuleType, RuleValidator, ValidationResult } from '../ts'
import { isPojo } from './misc'

export const isValidationResult = (vrs?: ValidationResult): vrs is ValidationResult =>
  isPojo(vrs) && typeof vrs.valid === 'boolean'

export const isRuleOrGroupValid = (
  rg: RuleGroupTypeAny | RuleType,
  validationResults?: ValidationResult | boolean,
  validator?: RuleValidator
) => {
  if (typeof validationResults === 'boolean') {
    return validationResults
  }
  if (isValidationResult(validationResults)) {
    return validationResults.valid
  }
  if (!('rules' in rg) && typeof validator === 'function') {
    const vrs = validator(rg)
    if (typeof vrs === 'boolean') {
      return vrs
    }
    // istanbul ignore else
    if (isValidationResult(vrs)) {
      return vrs.valid
    }
  }
  return true
}
