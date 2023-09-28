import type {
  JsonLogicVar,
  RQBJsonLogic,
  RuleProcessor,
  RuleType,
} from '../../ts';
import { toArray } from '../arrayUtils';
import { isValidValue, shouldRenderAsNumber } from './utils';

const convertOperator = (op: '<' | '<=' | '=' | '!=' | '>' | '>=') =>
  op
    .replace(/^(=)$/, '$1=')
    .replace(/^notNull$/i, '!=')
    .replace(/^null$/i, '==') as '<' | '<=' | '==' | '!=' | '===' | '!==' | '>' | '>=';

const negateIfNotOp = (op: string, jsonRule: RQBJsonLogic) =>
  /^(does)?not/i.test(op) ? { '!': jsonRule } : jsonRule;

export const defaultRuleProcessorJsonLogic: RuleProcessor = (
  { field, operator, value, valueSource }: RuleType,
  { parseNumbers } = {}
): RQBJsonLogic => {
  const valueIsField = valueSource === 'field';
  const fieldObject: JsonLogicVar = { var: field };
  const fieldOrNumberRenderer = (v: any) =>
    valueIsField ? { var: `${v}` } : shouldRenderAsNumber(v, parseNumbers) ? parseFloat(v) : v;

  if (
    operator === '<' ||
    operator === '<=' ||
    operator === '=' ||
    operator === '!=' ||
    operator === '>' ||
    operator === '>='
  ) {
    return {
      [convertOperator(operator)]: [fieldObject, fieldOrNumberRenderer(value)],
    } as RQBJsonLogic;
  } else if (operator === 'null' || operator === 'notNull') {
    return {
      [`${operator === 'notNull' ? '!' : '='}=`]: [fieldObject, null],
    } as RQBJsonLogic;
  } else if (operator === 'in' || operator === 'notIn') {
    // TODO: extract this map function
    const valueAsArray = toArray(value).map(fieldOrNumberRenderer);
    if (valueAsArray.length > 0) {
      const jsonRule: RQBJsonLogic = { in: [fieldObject, valueAsArray] };
      return negateIfNotOp(operator, jsonRule);
    }
    return false;
  } else if (operator === 'between' || operator === 'notBetween') {
    const valueAsArray = toArray(value);
    if (
      valueAsArray.length >= 2 &&
      isValidValue(valueAsArray[0]) &&
      isValidValue(valueAsArray[1])
    ) {
      let [first, second] = valueAsArray;
      if (
        !valueIsField &&
        shouldRenderAsNumber(first, true) &&
        shouldRenderAsNumber(second, true)
      ) {
        const firstNum = parseFloat(first);
        const secondNum = parseFloat(second);
        if (secondNum < firstNum) {
          const tempNum = secondNum;
          second = firstNum;
          first = tempNum;
        } else {
          first = firstNum;
          second = secondNum;
        }
      } else if (valueIsField) {
        first = { var: first };
        second = { var: second };
      }
      const jsonRule: RQBJsonLogic = { '<=': [first, fieldObject, second] };
      return negateIfNotOp(operator, jsonRule);
    }
    return false;
  } else if (operator === 'contains' || operator === 'doesNotContain') {
    const jsonRule: RQBJsonLogic = {
      in: [fieldOrNumberRenderer(value), fieldObject],
    };
    return negateIfNotOp(operator, jsonRule);
  } else if (operator === 'beginsWith' || operator === 'doesNotBeginWith') {
    const jsonRule: RQBJsonLogic = {
      startsWith: [fieldObject, fieldOrNumberRenderer(value)],
    };
    return negateIfNotOp(operator, jsonRule);
  } else if (operator === 'endsWith' || operator === 'doesNotEndWith') {
    const jsonRule: RQBJsonLogic = {
      endsWith: [fieldObject, fieldOrNumberRenderer(value)],
    };
    return negateIfNotOp(operator, jsonRule);
  }
  return false;
};
