import type { QueryValidator, RuleGroupTypeAny, ValidationMap } from '../ts'
import { defaultCombinators, groupInvalidReasons } from '../defaults'

/**
 * This is an example validation function you can pass to QueryBuilder in the
 * `validator` prop. It assumes that you want to validate groups, and has a no-op
 * for validating rules which you should replace with your own implementation.
 */
export const defaultValidator: QueryValidator = (query, validateRule) => {
  const result: ValidationMap = {}

  const validateGroup = (rg: RuleGroupTypeAny) => {
    const reasons: any[] = []
    if (rg.rules.length === 0) {
      reasons.push(groupInvalidReasons.empty)
    } else if (!('combinator' in rg)) {
      // Odd indexes should be valid combinators and even indexes should be rules or groups
      let invalidICs = false
      for (let i = 0; !invalidICs && i < rg.rules.length; i++) {
        if (
          (typeof rg.rules[i] === 'string' && i % 2 === 0) ||
          (typeof rg.rules[i] !== 'string' && i % 2 === 1) ||
          (typeof rg.rules[i] === 'string' &&
            i % 2 === 1 &&
            !defaultCombinators.map((c) => c.name as string).includes(rg.rules[i] as string))
        ) {
          invalidICs = true
        }
      }
      if (invalidICs) {
        reasons.push(groupInvalidReasons.invalidIndependentCombinators)
      }
    }
    // Non-independent combinators should be valid, but only checked if there are multiple rules
    // since combinators don't really apply to groups with only one rule/group
    if (
      'combinator' in rg &&
      !defaultCombinators.map((c) => c.name as string).includes(rg.combinator) &&
      rg.rules.length > 1
    ) {
      reasons.push(groupInvalidReasons.invalidCombinator)
    }
    /* istanbul ignore else */
    if (rg.id) {
      // Condition judgment
      if (reasons.length) {
        result[rg.id] = { valid: false, reasons }
      } else {
        result[rg.id] = true
      }
    }
    rg.rules.forEach((r) => {
      if (typeof r === 'string') {
        // Validation for this case was done earlier
      } else if ('rules' in r) {
        validateGroup(r)
      } else if (typeof validateRule === 'function') {
        result[r.id] = validateRule(r)[0]
      }
    })
  }

  validateGroup(query)

  return result
  // You can return the result object itself like above, or if you just
  // want the entire query to be marked invalid if _any_ rules/groups are
}
