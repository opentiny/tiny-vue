import type { ValueProcessorLegacy } from '../../ts';
import { defaultValueProcessorByRule } from './defaultValueProcessorByRule';

const internalValueProcessors = {
  default: defaultValueProcessorByRule
} as const;

const generateValueProcessor =
  (format: 'default'): ValueProcessorLegacy =>
  (field, operator, value, valueSource) =>
    internalValueProcessors[format](
      { field, operator, value, valueSource },
      { parseNumbers: false }
    );
export const defaultValueProcessor = generateValueProcessor('default');

export { defaultRuleProcessorJsonLogic } from './defaultRuleProcessorJsonLogic';
export * from './formatQuery';
export { jsonLogicAdditionalOperators } from './utils';
export { defaultValueProcessorByRule };
