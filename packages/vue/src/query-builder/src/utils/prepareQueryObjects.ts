import type {
  RuleGroupArray,
  RuleGroupICArray,
  RuleGroupTypeAny,
  RuleType,
} from '../ts';
import { produce } from './hooks/immer';
import { generateID } from './generateID';

export interface PreparerOptions {
  idGenerator?: () => string;
}

/**
 * Generates a valid rule
 */
export const prepareRule = (rule: RuleType, { idGenerator = generateID }: PreparerOptions = {}) =>
  produce(rule, draft => {
    if (!draft.id) {
      draft.id = idGenerator();
    }
  });

/**
 * Generates a valid rule group
 */
export const prepareRuleGroup = <RG extends RuleGroupTypeAny>(
  queryObject: RG,
  { idGenerator = generateID }: PreparerOptions = {}
): RG =>
  produce(queryObject, draft => {
    if (!draft.id) {
      draft.id = idGenerator();
    }
    draft.rules = draft.rules.map(r =>
      typeof r === 'string'
        ? r
        : 'rules' in r
        ? prepareRuleGroup(r, { idGenerator })
        : prepareRule(r, { idGenerator })
    ) as RuleGroupArray | RuleGroupICArray;
  });

/**
 * Generates a valid rule or group
 */
export const prepareRuleOrGroup = <RG extends RuleGroupTypeAny>(
  rg: RG | RuleType,
  { idGenerator = generateID }: PreparerOptions = {}
) => ('rules' in rg ? prepareRuleGroup(rg, { idGenerator }) : prepareRule(rg, { idGenerator }));
