import type {
  DefaultCombinatorName,
  RuleType,
  DefaultRuleGroupArray,
  DefaultRuleType,
  RuleGroupArray,
  DefaultRuleGroupType,
  RuleGroupType
} from './ruleGroups'
import type { MappedTuple } from './ruleGroupsIC.utils'

export type RuleGroupTypeIC<R extends RuleType = RuleType, C extends string = string> = Omit<
  RuleGroupType<R, C>,
  'combinator' | 'rules'
> & {
  rules: RuleGroupICArray<RuleGroupTypeIC<R, C>, R, C>
  /**
   * Only used when adding a rule to a query that uses independent combinators
   */
  combinatorPreceding?: C
}

export type RuleGroupTypeAny = RuleGroupTypeIC | RuleGroupType

export type RuleGroupICArray<
  RG extends RuleGroupTypeIC = RuleGroupTypeIC,
  C extends string = string,
  R extends RuleType = RuleType
> = [R | RG] | [R | RG, ...MappedTuple<[C, R | RG]>] | ((R | RG)[] & { length: 0 })
export type RuleOrGroupArray = RuleGroupICArray | RuleGroupArray

export type DefaultRuleGroupICArray = RuleGroupICArray<DefaultRuleGroupTypeIC, DefaultRuleType, DefaultCombinatorName>

export type DefaultRuleOrGroupArray = DefaultRuleGroupICArray | DefaultRuleGroupArray

export interface DefaultRuleGroupTypeIC extends RuleGroupTypeIC {
  rules: DefaultRuleGroupICArray
}

export type DefaultRuleGroupTypeAny = DefaultRuleGroupTypeIC | DefaultRuleGroupType
