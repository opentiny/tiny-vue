import type {
  RuleGroupArray,
  RuleGroupICArray,
  RuleGroupType,
  RuleGroupTypeIC,
  RuleType,
} from '../ts';
import { generateID } from './generateID';
import { isPojo } from './misc';

export interface RegenerateIdOptions {
  idGenerator?: () => string;
}

/**
 * Generates new `id` property for a rule.
 */
export const regenerateID = (
  rule: RuleType,
  { idGenerator = generateID }: RegenerateIdOptions = {}
): RuleType => JSON.parse(JSON.stringify({ ...rule, id: idGenerator() }));

/**
 * Recursively generates new `id` properties for all objects in a rule group.
 */
export const regenerateIDs = (
  ruleOrGroup: RuleGroupType | RuleGroupTypeIC,
  { idGenerator = generateID }: RegenerateIdOptions = {}
): RuleGroupType | RuleGroupTypeIC => {
  if (!isPojo(ruleOrGroup)) return ruleOrGroup;

  if (!('rules' in ruleOrGroup)) {
    return JSON.parse(JSON.stringify({ ...(ruleOrGroup as any), id: idGenerator() }));
  }

  if ('combinator' in ruleOrGroup) {
    const rules = ruleOrGroup.rules.map(r =>
      isPojo(r) && 'rules' in r
        ? regenerateIDs(r, { idGenerator })
        : regenerateID(r, { idGenerator })
    ) as RuleGroupArray;
    return { ...ruleOrGroup, id: idGenerator(), rules };
  }

  const rules = ruleOrGroup.rules.map(r =>
    typeof r === 'string'
      ? r
      : isPojo(r) && 'rules' in r
      ? regenerateIDs(r, { idGenerator })
      : regenerateID(r, { idGenerator })
  ) as RuleGroupICArray;
  return { ...ruleOrGroup, id: idGenerator(), rules };
};
