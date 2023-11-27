import type {
  DefaultOperatorName,
  DefaultRuleGroupType,
  DefaultRuleGroupTypeAny,
  DefaultRuleGroupTypeIC,
  DefaultRuleType,
  JsonLogicReservedOperations,
  ParseJsonLogicOptions,
  RQBJsonLogic,
  RQBJsonLogicVar,
  ValueSource
} from '../../ts'
import { defaultOperatorNegationMap } from '../../defaults'
import { convertToIC } from '../convertQuery'
import { isRuleGroupType } from '../isRuleGroup'
import { isPojo } from '../misc'
import { objectKeys } from '../objectKeys'
import { fieldIsValidUtil, getFieldsArray } from '../parserUtils'
import {
  isJsonLogicAnd,
  isJsonLogicBetweenExclusive,
  isJsonLogicBetweenInclusive,
  isJsonLogicDoubleNegation,
  isJsonLogicEqual,
  isJsonLogicGreaterThan,
  isJsonLogicGreaterThanOrEqual,
  isJsonLogicInArray,
  isJsonLogicInString,
  isJsonLogicLessThan,
  isJsonLogicLessThanOrEqual,
  isJsonLogicNegation,
  isJsonLogicNotEqual,
  isJsonLogicOr,
  isJsonLogicStrictEqual,
  isJsonLogicStrictNotEqual,
  isRQBJsonLogicEndsWith,
  isRQBJsonLogicStartsWith,
  isRQBJsonLogicVar
} from './utils'

const emptyRuleGroup: DefaultRuleGroupType = { combinator: 'and', rules: [] }

/**
 * Converts a JsonLogic object into a query suitable for
 * the QueryBuilder component's `query` or `defaultQuery` props.
 */
function parseJsonLogic(rqbJsonLogic: string | RQBJsonLogic): DefaultRuleGroupType
function parseJsonLogic(
  rqbJsonLogic: string | RQBJsonLogic,
  options: Omit<ParseJsonLogicOptions, 'independentCombinators'> & {
    independentCombinators?: false
  }
): DefaultRuleGroupType
function parseJsonLogic(
  rqbJsonLogic: string | RQBJsonLogic,
  options: Omit<ParseJsonLogicOptions, 'independentCombinators'> & {
    independentCombinators: true
  }
): DefaultRuleGroupTypeIC
function parseJsonLogic(
  rqbJsonLogic: string | RQBJsonLogic,
  options: ParseJsonLogicOptions = {}
): DefaultRuleGroupTypeAny {
  const fieldsFlat = getFieldsArray(options.fields)
  const { getValueSources, listsAsArrays, jsonLogicOperations } = options

  const fieldIsValid = (fieldName: string, operator: DefaultOperatorName, subordinateFieldName?: string) =>
    fieldIsValidUtil({
      fieldName,
      fieldsFlat,
      operator,
      subordinateFieldName,
      getValueSources
    })

  // Overload 1: Always return a rule group or false for the outermost logic object
  function processLogic(logic: RQBJsonLogic, outermost: true): DefaultRuleGroupType | false
  // Overload 2: If not the outermost object, return value could also be a rule
  function processLogic(logic: RQBJsonLogic, outermost?: false): DefaultRuleGroupType | DefaultRuleType | false
  // Implementation
  function processLogic(logic: RQBJsonLogic, outermost?: boolean): DefaultRuleGroupType | DefaultRuleType | false {
    // Bail if the outermost logic is not a plain object
    if (outermost && !isPojo(logic)) {
      return false
    }
    const key = Object.keys(logic)[0] as JsonLogicReservedOperations
    // @ts-expect-error `key in logic` is always true, but TS doesn't know that
    const keyValue = logic[key]
    // Rule groups
    if (isJsonLogicAnd(logic)) {
      return {
        combinator: 'and',
        rules: logic.and.map((l) => processLogic(l)).filter(Boolean) as (DefaultRuleType | DefaultRuleGroupType)[]
      }
    } else if (isJsonLogicOr(logic)) {
      return {
        combinator: 'or',
        rules: logic.or.map((l) => processLogic(l)).filter(Boolean) as (DefaultRuleType | DefaultRuleGroupType)[]
      }
    } else if (isJsonLogicNegation(logic)) {
      const rule = processLogic(logic['!'])
      if (rule) {
        if (
          !isRuleGroupType(rule) &&
          (rule.operator === 'between' ||
            rule.operator === 'in' ||
            rule.operator === 'contains' ||
            rule.operator === 'beginsWith' ||
            rule.operator === 'endsWith')
        ) {
          const newRule = { ...rule, operator: defaultOperatorNegationMap[rule.operator] }
          if (outermost) {
            return { combinator: 'and', rules: [newRule] }
          }
          return newRule
        } else if (isJsonLogicBetweenExclusive(logic['!']) && isRuleGroupType(rule)) {
          return { ...rule, not: true }
        }
        return { combinator: 'and', rules: [rule], not: true }
      }
      return false
    } else if (isJsonLogicDoubleNegation(logic)) {
      const rule = processLogic(logic['!!'])
      return rule || false
    }

    // All other keys represent rules
    let rule: DefaultRuleType | false = false
    let field = ''
    let operator: DefaultOperatorName = '='
    let value: any = ''
    let valueSource: ValueSource | undefined

    if (jsonLogicOperations && objectKeys(jsonLogicOperations).includes(key)) {
      // Custom operations
      rule = jsonLogicOperations[key](keyValue) as DefaultRuleType
    } else if (
      // Basic boolean operations
      isJsonLogicEqual(logic) ||
      isJsonLogicStrictEqual(logic) ||
      isJsonLogicNotEqual(logic) ||
      isJsonLogicStrictNotEqual(logic) ||
      isJsonLogicGreaterThan(logic) ||
      isJsonLogicGreaterThanOrEqual(logic) ||
      isJsonLogicLessThan(logic) ||
      isJsonLogicLessThanOrEqual(logic) ||
      isJsonLogicInString(logic) ||
      isRQBJsonLogicStartsWith(logic) ||
      isRQBJsonLogicEndsWith(logic)
    ) {
      const [first, second] = keyValue
      if (isRQBJsonLogicVar(first) && !isPojo(second)) {
        field = first.var
        value = second
      } else if (!isPojo(first) && isRQBJsonLogicVar(second)) {
        field = second.var
        value = first
      } else if (isRQBJsonLogicVar(first) && isRQBJsonLogicVar(second)) {
        field = first.var
        value = second.var
        valueSource = 'field'
      } else {
        return false
      }

      // Translate operator if necessary
      if (isJsonLogicEqual(logic) || isJsonLogicStrictEqual(logic)) {
        operator = value === null ? 'null' : '='
      } else if (isJsonLogicNotEqual(logic) || isJsonLogicStrictNotEqual(logic)) {
        operator = value === null ? 'notNull' : '!='
      } else if (isJsonLogicInString(logic)) {
        operator = 'contains'
      } else if (isRQBJsonLogicStartsWith(logic)) {
        operator = 'beginsWith'
      } else if (isRQBJsonLogicEndsWith(logic)) {
        operator = 'endsWith'
      } else {
        operator = key as DefaultOperatorName
      }

      if (fieldIsValid(field, operator, valueSource === 'field' ? value : undefined)) {
        rule = { field, operator, value, valueSource }
      }
    } else if (isJsonLogicBetweenExclusive(logic) && isRQBJsonLogicVar(logic['<'][1])) {
      field = logic['<'][1].var
      const values = [logic['<'][0], logic['<'][2]]
      // istanbul ignore else
      if (
        values.every(isRQBJsonLogicVar) ||
        values.every((el) => typeof el === 'string') ||
        values.every((el) => typeof el === 'number') ||
        values.every((el) => typeof el === 'boolean')
      ) {
        return (
          processLogic({
            and: [{ '>': [{ var: field }, values[0]] }, { '<': [{ var: field }, values[1]] }]
          }) || /* istanbul ignore next */ false
        )
      }
    } else if (isJsonLogicBetweenInclusive(logic) && isRQBJsonLogicVar(logic['<='][1])) {
      field = logic['<='][1].var
      operator = 'between'
      const values = [logic['<='][0], logic['<='][2]]
      if (logic['<='].every(isRQBJsonLogicVar)) {
        const vars = values as RQBJsonLogicVar[]
        valueSource = 'field'
        const fieldList = vars.map((el) => el.var).filter((sf) => fieldIsValid(field, operator, sf))
        value = listsAsArrays ? fieldList : fieldList.join(',')
      } else {
        // istanbul ignore else
        if (
          values.every((el) => typeof el === 'string') ||
          values.every((el) => typeof el === 'number') ||
          values.every((el) => typeof el === 'boolean')
        ) {
          value = listsAsArrays ? values : values.map((el) => `${el}`).join(',')
        }
      }

      if (fieldIsValid(field, operator) && value.length >= 2) {
        rule = { field, operator, value, valueSource }
      }
    } else if (isJsonLogicInArray(logic) && isRQBJsonLogicVar(keyValue[0])) {
      field = keyValue[0].var
      operator = 'in'
      if (logic.in[1].every(isRQBJsonLogicVar)) {
        valueSource = 'field'
        const fieldList = logic.in[1].map((el) => el.var as string).filter((sf) => fieldIsValid(field, operator, sf))
        value = listsAsArrays ? fieldList : fieldList.join(',')
      } else {
        // istanbul ignore else
        if (
          logic.in[1].every((el) => typeof el === 'string') ||
          logic.in[1].every((el) => typeof el === 'number') ||
          logic.in[1].every((el) => typeof el === 'boolean')
        ) {
          value = listsAsArrays ? logic.in[1] : logic.in[1].map((el) => `${el}`).join(',')
        }
      }

      // istanbul ignore else
      if (value.length > 0) {
        rule = { field, operator, value, valueSource }
      }
    }

    return !rule ? false : outermost ? { combinator: 'and', rules: [rule] } : rule
  }

  let logicRoot = rqbJsonLogic
  if (typeof rqbJsonLogic === 'string') {
    try {
      logicRoot = JSON.parse(rqbJsonLogic)
    } catch (err) {
      return emptyRuleGroup
    }
  }

  const result = processLogic(logicRoot, true)
  const finalQuery: DefaultRuleGroupType = !result ? emptyRuleGroup : result
  return options.independentCombinators ? convertToIC<DefaultRuleGroupTypeIC>(finalQuery) : finalQuery
}

export { parseJsonLogic }
