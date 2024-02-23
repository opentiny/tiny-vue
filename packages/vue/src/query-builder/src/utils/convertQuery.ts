import { isRuleGroupTypeIC } from './isRuleGroup'
import type { RuleGroupArray, RuleGroupICArray, RuleGroupType, RuleGroupTypeIC, RuleType } from '../ts'

const processRuleOrStringOrRuleGroupIC = (r: string | RuleGroupTypeIC | RuleType) =>
  typeof r === 'object' && 'rules' in r ? generateRuleGroupICWithConsistentCombinators(r) : r

const generateRuleGroupICWithConsistentCombinators = (rg: RuleGroupTypeIC): RuleGroupTypeIC => {
  const returnArr: RuleGroupICArray = []
  const push = (r: any) => returnArr.push(processRuleOrStringOrRuleGroupIC(r) as RuleGroupTypeIC | RuleType)
  let startIndex = 0
  // Traversal rule array
  for (let i = 0; i < rg.rules.length; i += 2) {
    if (rg.rules.length === 1) {
      push(rg.rules[0])
    } else if (rg.rules[i + 1] === 'and') {
      // AND logic of multiple conditions
      startIndex = i
      let j = 1
      // Count the number of consecutive ANDs
      while (rg.rules[startIndex + j] === 'and') {
        i += 2
        j += 2
      }
      returnArr.push({
        // @ts-expect-error TS can't keep track of odd/even indexes here
        rules: rg.rules.slice(startIndex, i + 1).map(processRuleOrStringOrRuleGroupIC)
      })
      i -= 2
    } else if (rg.rules[i + 1] === 'or') {
      if (i === rg.rules.length - 3 || i === 0) {
        if (rg.rules[i - 1] === 'or' || i === 0) {
          push(rg.rules[i])
        }
        push(rg.rules[i + 1])
        if (i === rg.rules.length - 3) {
          push(rg.rules[i + 2])
        }
      } else {
        // Check whether the previous rule is 'and'
        if (rg.rules[i - 1] === 'and') {
          push(rg.rules[i + 1])
        } else {
          // Adds both the current rule and the next rule to the result array
          push(rg.rules[i])
          push(rg.rules[i + 1])
        }
      }
    }
  }
  if (
    // @ts-expect-error TS still thinks returnArr has length 0
    returnArr.length === 1 &&
    typeof returnArr[0] === 'object' &&
    'rules' in returnArr[0]
  ) {
    // @ts-expect-error TS still thinks returnArr has length 0
    return { ...rg, ...returnArr[0] }
  }
  return { ...rg, rules: returnArr }
}

export const convertFromIC = <RG extends RuleGroupType = RuleGroupType>(rg: RuleGroupTypeIC): RG => {
  const processedRG = generateRuleGroupICWithConsistentCombinators(rg)
  const rulesAsMixedList = processedRG.rules.map((r) =>
    typeof r === 'string' || !('rules' in r) ? r : convertFromIC(r)
  )
  const combinator = rulesAsMixedList.length < 2 ? 'and' : (rulesAsMixedList[1] as string)
  const rules = rulesAsMixedList.filter((r) => typeof r !== 'string') as RuleGroupArray
  return { ...processedRG, combinator, rules } as RG
}

export const convertToIC = <RGIC extends RuleGroupTypeIC = RuleGroupTypeIC>(rg: RuleGroupType): RGIC => {
  const { combinator, ...queryWithoutCombinator } = rg
  const rules: (RuleType | RuleGroupTypeIC | string)[] = []
  rg.rules.forEach((rs, idx, arr) => {
    if ('rules' in rs) {
      rules.push(convertToIC(rs))
    } else {
      rules.push(rs)
    }
    if (idx < arr.length - 1) {
      rules.push(combinator)
    }
  })
  return { ...queryWithoutCombinator, rules } as RGIC
}

function convertQuery(query: RuleGroupType): RuleGroupTypeIC
function convertQuery(query: RuleGroupTypeIC): RuleGroupType
function convertQuery(query: RuleGroupType | RuleGroupTypeIC): RuleGroupType | RuleGroupTypeIC {
  return isRuleGroupTypeIC(query) ? convertFromIC(query) : convertToIC(query)
}

export { convertQuery }
