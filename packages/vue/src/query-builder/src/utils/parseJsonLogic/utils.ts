import type {
  JsonLogicAnd,
  JsonLogicDoubleNegation,
  JsonLogicEqual,
  JsonLogicGreaterThan,
  JsonLogicGreaterThanOrEqual,
  JsonLogicInArray,
  JsonLogicInString,
  JsonLogicLessThan,
  JsonLogicLessThanOrEqual,
  JsonLogicNegation,
  JsonLogicNotEqual,
  JsonLogicOr,
  JsonLogicStrictEqual,
  JsonLogicStrictNotEqual,
  JsonLogicVar,
  RQBJsonLogic,
  RQBJsonLogicEndsWith,
  RQBJsonLogicStartsWith,
  RQBJsonLogicVar
} from '../../ts'
import { isPojo } from '../misc'
import type { JsonLogicBetweenExclusive, JsonLogicBetweenInclusive } from './types'

// Standard JsonLogic operations
export const isJsonLogicVar = (
  logic: RQBJsonLogic
): logic is JsonLogicVar<RQBJsonLogicStartsWith | RQBJsonLogicEndsWith> => isPojo(logic) && 'var' in logic
export const isRQBJsonLogicVar = (logic: RQBJsonLogic): logic is RQBJsonLogicVar =>
  isJsonLogicVar(logic) && typeof logic.var === 'string'
export const isJsonLogicEqual = (logic: RQBJsonLogic): logic is JsonLogicEqual => isPojo(logic) && '==' in logic
export const isJsonLogicStrictEqual = (logic: RQBJsonLogic): logic is JsonLogicStrictEqual =>
  isPojo(logic) && '===' in logic
export const isJsonLogicNotEqual = (logic: RQBJsonLogic): logic is JsonLogicNotEqual => isPojo(logic) && '!=' in logic
export const isJsonLogicStrictNotEqual = (logic: RQBJsonLogic): logic is JsonLogicStrictNotEqual =>
  isPojo(logic) && '!==' in logic
export const isJsonLogicNegation = (logic: RQBJsonLogic): logic is JsonLogicNegation => isPojo(logic) && '!' in logic
export const isJsonLogicDoubleNegation = (logic: RQBJsonLogic): logic is JsonLogicDoubleNegation =>
  isPojo(logic) && '!!' in logic
export const isJsonLogicOr = (
  logic: RQBJsonLogic
): logic is JsonLogicOr<RQBJsonLogicStartsWith | RQBJsonLogicEndsWith> => isPojo(logic) && 'or' in logic
export const isJsonLogicAnd = (
  logic: RQBJsonLogic
): logic is JsonLogicAnd<RQBJsonLogicStartsWith | RQBJsonLogicEndsWith> => isPojo(logic) && 'and' in logic
export const isJsonLogicGreaterThan = (
  logic: RQBJsonLogic
): logic is JsonLogicGreaterThan<RQBJsonLogicStartsWith | RQBJsonLogicEndsWith> => isPojo(logic) && '>' in logic
export const isJsonLogicGreaterThanOrEqual = (
  logic: RQBJsonLogic
): logic is JsonLogicGreaterThanOrEqual<RQBJsonLogicStartsWith | RQBJsonLogicEndsWith> => isPojo(logic) && '>=' in logic
export const isJsonLogicLessThan = (
  logic: RQBJsonLogic
): logic is JsonLogicLessThan<RQBJsonLogicStartsWith | RQBJsonLogicEndsWith> =>
  isPojo(logic) && '<' in logic && logic['<'].length === 2
export const isJsonLogicLessThanOrEqual = (
  logic: RQBJsonLogic
): logic is JsonLogicLessThanOrEqual<RQBJsonLogicStartsWith | RQBJsonLogicEndsWith> =>
  isPojo(logic) && '<=' in logic && logic['<='].length === 2
export const isJsonLogicInArray = (
  logic: RQBJsonLogic
): logic is JsonLogicInArray<RQBJsonLogicStartsWith | RQBJsonLogicEndsWith> =>
  isPojo(logic) && 'in' in logic && Array.isArray(logic.in[1])
export const isJsonLogicInString = (
  logic: RQBJsonLogic
): logic is JsonLogicInString<RQBJsonLogicStartsWith | RQBJsonLogicEndsWith> =>
  isPojo(logic) && 'in' in logic && !Array.isArray(logic.in[1])

// "Between" operations are special cases of '<' and '<='
export const isJsonLogicBetweenExclusive = (logic: RQBJsonLogic): logic is JsonLogicBetweenExclusive =>
  isPojo(logic) && '<' in logic && Array.isArray(logic['<']) && logic['<'].length === 3
export const isJsonLogicBetweenInclusive = (logic: RQBJsonLogic): logic is JsonLogicBetweenInclusive =>
  isPojo(logic) && '<=' in logic && Array.isArray(logic['<=']) && logic['<='].length === 3

// RQB extensions
export const isRQBJsonLogicStartsWith = (logic: RQBJsonLogic): logic is RQBJsonLogicStartsWith =>
  isPojo(logic) && 'startsWith' in logic
export const isRQBJsonLogicEndsWith = (logic: RQBJsonLogic): logic is RQBJsonLogicEndsWith =>
  isPojo(logic) && 'endsWith' in logic
