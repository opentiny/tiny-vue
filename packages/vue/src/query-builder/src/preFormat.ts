import type { FormatQueryOptions } from './ts/importExport'
import type { RuleGroupTypeAny } from './ts/ruleGroupsIC'

import { formatQuery } from './utils/formatQuery/formatQuery'
import { defaultOptions, optionOrder } from './constants'
import type { DemoOption, DemoOptions } from './types'

type OptionsAction =
  | { type: 'all' }
  | { type: 'reset' }
  | {
      type: 'update'
      payload: {
        optionName: DemoOption
        value: boolean
      }
    }
  | {
      type: 'replace'
      payload: DemoOptions
    }

export const optionsReducer = (state: DemoOptions, action: OptionsAction): DemoOptions => {
  if (action.type === 'reset') {
    return defaultOptions
  } else if (action.type === 'all') {
    const allSelected: DemoOptions = { ...defaultOptions }
    for (const opt of optionOrder) {
      allSelected[opt] = opt !== 'disabled' && opt !== 'independentCombinators'
    }
    return allSelected
  } else if (action.type === 'replace') {
    return action.payload
  }
  const { optionName, value } = action.payload
  return { ...state, [optionName]: value }
}

export const getFormatQueryString = (query: RuleGroupTypeAny, options: FormatQueryOptions) => {
  const formatQueryResult = formatQuery(query, options)
  if (options.format === 'json_without_ids') {
    let result

    try {
      result = JSON.stringify(JSON.parse(formatQueryResult), null, 2)
    } catch (e) {
      result = formatQueryResult
      console.error(options.format, e)
    }

    return result
  } else if (
    options.format === 'parameterized' ||
    options.format === 'parameterized_named' ||
    options.format === 'jsonlogic'
  ) {
    return JSON.stringify(formatQueryResult, null, 2)
  }
  return formatQueryResult
}
