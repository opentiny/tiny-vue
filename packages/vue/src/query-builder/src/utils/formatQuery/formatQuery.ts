import type {
  ExportFormat,
  FormatQueryOptions,
  DefaultCombinatorName,
  RQBJsonLogic,
  RuleGroupType,
  RuleGroupTypeAny,
  QueryValidator,
  RuleProcessor,
  RuleType,
  RuleValidator,
  ValidationMap,
  ValidationResult
} from '../../ts'
import { defaultPlaceholderFieldName, defaultPlaceholderOperatorName } from '../../defaults'
import { convertFromIC } from '../convertQuery'
import { isRuleOrGroupValid } from '../isRuleOrGroupValid'
import { uniqByName } from '../uniq'
import { defaultRuleProcessorJsonLogic } from './defaultRuleProcessorJsonLogic'
import { defaultValueProcessorByRule } from './defaultValueProcessorByRule'
import { isValueProcessorLegacy, numerifyValues } from './utils'

/**
 * Formats the query in the requested output format.
 */
function formatQuery(ruleGroup: RuleGroupTypeAny): string
function formatQuery(
  ruleGroup: RuleGroupTypeAny,
  options: 'jsonlogic' | (Omit<FormatQueryOptions, 'format'> & { format: 'jsonlogic' })
): RQBJsonLogic
function formatQuery(ruleGroup: RuleGroupTypeAny, options: Omit<FormatQueryOptions, 'format'>): string
function formatQuery(
  ruleGroup: RuleGroupTypeAny,
  options: Exclude<ExportFormat, 'parameterized' | 'parameterized_named' | 'jsonlogic'>
): string
function formatQuery(
  ruleGroup: RuleGroupTypeAny,
  options: Omit<FormatQueryOptions, 'format'> & {
    format: Exclude<ExportFormat, 'parameterized' | 'parameterized_named' | 'jsonlogic'>
  }
): string
function formatQuery(ruleGroup: RuleGroupTypeAny, options: FormatQueryOptions | ExportFormat = {}) {
  let format: ExportFormat = 'json'
  let valueProcessorInternal = defaultValueProcessorByRule
  let ruleProcessorInternal: RuleProcessor | null = null
  let quoteFieldNamesWith: [string, string] = ['', '']
  let validator: QueryValidator = () => true
  let fields: Required<FormatQueryOptions>['fields'] = []
  let validationMap: ValidationMap = {}
  let fallbackExpression = ''
  let paramPrefix = ':'
  let parseNumbers = false
  let placeholderFieldName = defaultPlaceholderFieldName
  let placeholderOperatorName = defaultPlaceholderOperatorName

  if (typeof options === 'string') {
    format = options.toLowerCase() as ExportFormat
    if (format === 'jsonlogic') {
      ruleProcessorInternal = defaultRuleProcessorJsonLogic
    }
  } else {
    format = (options.format ?? 'json').toLowerCase() as ExportFormat
    const { valueProcessor = null, ruleProcessor = null } = options
    if (typeof ruleProcessor === 'function') {
      ruleProcessorInternal = ruleProcessor
    }
    valueProcessorInternal =
      typeof valueProcessor === 'function'
        ? (r, opts) =>
            isValueProcessorLegacy(valueProcessor)
              ? valueProcessor(r.field, r.operator, r.value, r.valueSource)
              : valueProcessor(r, opts)
        : format === 'jsonlogic'
          ? ruleProcessorInternal ?? defaultRuleProcessorJsonLogic
          : defaultValueProcessorByRule
    if (Array.isArray(options.quoteFieldNamesWith)) {
      quoteFieldNamesWith = options.quoteFieldNamesWith
    } else if (typeof options.quoteFieldNamesWith === 'string') {
      // eslint-disable-next-line unused-imports/no-unused-vars
      quoteFieldNamesWith = [options.quoteFieldNamesWith, options.quoteFieldNamesWith]
    }
    validator = options.validator ?? (() => true)
    fields = options.fields ?? []
    fallbackExpression = options.fallbackExpression ?? ''
    // eslint-disable-next-line unused-imports/no-unused-vars
    paramPrefix = options.paramPrefix ?? ':'
    parseNumbers = !!options.parseNumbers
    placeholderFieldName = options.placeholderFieldName ?? defaultPlaceholderFieldName
    placeholderOperatorName = options.placeholderOperatorName ?? defaultPlaceholderOperatorName
  }
  if (!fallbackExpression) {
    fallbackExpression = '(1 = 1)'
  }

  if (format === 'json' || format === 'json_without_ids') {
    const rg = parseNumbers ? numerifyValues(ruleGroup) : ruleGroup
    if (format === 'json') {
      return JSON.stringify(rg, null, 2)
    } else {
      return JSON.stringify(rg, ['rules', 'field', 'value', 'operator', 'combinator', 'not', 'valueSource'])
    }
  } else {
    // istanbul ignore else
    if (typeof validator === 'function') {
      const validationResults = validator(ruleGroup)
      if (typeof validationResults === 'boolean') {
        if (validationResults === false) {
          return format === 'jsonlogic' ? false : fallbackExpression
        }
      } else {
        validationMap = validationResults
      }
    }

    const validatorMap: Record<string, RuleValidator> = {}
    const uniqueFields = uniqByName(fields)
    uniqueFields.forEach((fd) => {
      // istanbul ignore else
      if (typeof fd.validator === 'function') {
        validatorMap[fd.name] = fd.validator
      }
    })

    const validateRule = (rule: RuleType) => {
      let validationResults: boolean | ValidationResult | undefined
      let fieldValidator: RuleValidator | undefined
      if (rule.id) {
        validationResults = validationMap[rule.id]
      }
      if (fields.length) {
        const fieldArrs = fields.filter((f) => f.name === rule.field)
        if (fieldArrs.length) {
          const field = fieldArrs[0]
          // istanbul ignore else
          if (typeof field.validator === 'function') {
            fieldValidator = field.validator
          }
        }
      }
      return [validationResults, fieldValidator] as const
    }

    if (format === 'jsonlogic') {
      const query = 'combinator' in ruleGroup ? ruleGroup : convertFromIC(ruleGroup)

      const processRuleGroup = (rg: RuleGroupType): RQBJsonLogic => {
        if (!isRuleOrGroupValid(rg, validationMap[rg.id ?? /* istanbul ignore next */ ''])) {
          return false
        }

        const processedRules = rg.rules
          .map((rule) => {
            if ('rules' in rule) {
              return processRuleGroup(rule)
            }
            const [validationResult, fieldValidator] = validateRule(rule)
            if (
              !isRuleOrGroupValid(rule, validationResult, fieldValidator) ||
              rule.field === placeholderFieldName ||
              rule.operator === placeholderOperatorName
            ) {
              return false
            }
            return (ruleProcessorInternal ?? valueProcessorInternal)(rule, { parseNumbers })
          })
          .filter(Boolean)

        if (processedRules.length === 0) {
          return false
        }

        const jsonRuleGroup: RQBJsonLogic =
          processedRules.length === 1
            ? processedRules[0]
            : ({
                [rg.combinator]: processedRules
              } as {
                [k in keyof DefaultCombinatorName]: [RQBJsonLogic, RQBJsonLogic, ...RQBJsonLogic[]]
              })

        return rg.not ? { '!': jsonRuleGroup } : jsonRuleGroup
      }

      return processRuleGroup(query)
    } else {
      return ''
    }
  }
}

export { formatQuery }
