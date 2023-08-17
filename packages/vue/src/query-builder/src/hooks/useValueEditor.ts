import type { ValueEditorProps } from '../ts';
import { produce } from '../utils/hooks/immer';
import { useCallback, useEffect, useMemo } from '../utils/hooks/vue-hooks';
import { getFirstOption, joinWith, parseNumber, toArray } from '../utils';

export type UseValueEditorParams = Pick<
  ValueEditorProps,
  | 'handleOnChange'
  | 'inputType'
  | 'operator'
  | 'value'
  | 'listsAsArrays'
  | 'type'
  | 'values'
  | 'parseNumbers'
  | 'skipHook'
>;

/**
 * This Effect trims the value if all of the following are true:
 *  - `inputType` is "number"
 *  - `operator` is _not_ one of ("between", "notBetween", "in", "notIn")
 *  - `value` is an array _or_ the value is a string containing a comma
 *
 * For example, consider the following rule:
 *
 * `{ field: "f1", operator: "between", value: "12,14" }`
 *
 * If its operator changes to "=", the value will be reset to "12" since
 * the "number" input type can't handle arrays or strings with commas.
 *
 * Returns the value as an array and a change handler for series of editors.
 */
export const useValueEditor = ({
  handleOnChange,
  inputType,
  operator,
  value,
  listsAsArrays,
  parseNumbers,
  values,
  skipHook,
}: UseValueEditorParams) => {
  useEffect(() => {
    if (skipHook) return;
    if (
      inputType === 'number' &&
      !['between', 'notBetween', 'in', 'notIn'].includes(operator) &&
      ((typeof value === 'string' && value.includes(',')) || Array.isArray(value))
    ) {
      handleOnChange(toArray(value)[0] ?? '');
    }
  }, [handleOnChange, inputType, operator, skipHook, value]);

  const valueAsArray = useMemo(() => toArray(value), [value]);

  const multiValueHandler = useCallback(
    (v: string, i: number) => {
      const val = produce(valueAsArray, va => {
        va[i] = parseNumber(v, { parseNumbers });
        // Enforce an array length of (at least) two for "between"/"notBetween"
        if (i === 0 && (operator === 'between' || operator === 'notBetween') && !va[1]) {
          va[1] = getFirstOption(values);
        }
      });
      handleOnChange(listsAsArrays ? val : joinWith(val, ','));
    },
    [handleOnChange, listsAsArrays, operator, parseNumbers, valueAsArray, values]
  );

  return {
    /**
     * Array of values for when the main value represents a list, e.g. when operator
     * is "between" or "in".
     */
    valueAsArray,
    /**
     * A handler for a series of editors, e.g. when operator is "between".
     * @param {string} val The new value for the editor
     * @param {number} idx The index of the editor
     */
    multiValueHandler,
  };
};
