import type { Field, OptionList, ValueSource, ValueSources } from './basic'
import type { RulesLogic } from './json-logic-js'
import type { RuleType } from './ruleGroups'
import type { RuleGroupTypeAny } from './ruleGroupsIC'
import type { QueryValidator } from './validation'

export type ExportFormat = 'json' | 'json_without_ids' | 'jsonlogic'

export interface FormatQueryOptions {
  /**
   * The export format..
   */
  format?: ExportFormat
  /**
   * This function will be used to process the `value` from each rule for query language formats.
   * If not defined, the appropriate
   * `defaultValueProcessor` for the format will be used.
   */
  valueProcessor?: ValueProcessorLegacy | ValueProcessorByRule
  /**
   * This function will be used to process each rule for query language
   * formats. If not defined, the appropriate `defaultRuleProcessor`
   * for the format will be used.
   */
  ruleProcessor?: RuleProcessor
  /**
   * In the "sql"/"parameterized"/"parameterized_named" export formats,
   * field names will be bracketed by this string. If an array of strings
   * is passed, field names will be preceded by the first element and
   * succeeded by the second element. A common value for this option is
   * the backtick ('`').
   *
   * @default '' // the empty string
   *
   * @example
   * formatQuery(query, { format: 'sql', quoteFieldNamesWith: ['[', ']'] })
   * // `[First name] = 'Steve'`
   */
  quoteFieldNamesWith?: string | [string, string]
  /**
   * Validator function for the entire query. Can be the same function
   * passed as `validator` prop to `<QueryBuilder />`.
   */
  validator?: QueryValidator
  /**
   * This can be the same Field[] passed to <QueryBuilder />,
   * but really all you need to provide is the name and validator for each field.
   */
  fields?: (Pick<Field, 'name' | 'validator'> & Record<string, any>)[]
  /**
   * This string will be inserted in place of invalid groups for non-JSON formats.
   * Defaults to '(1 = 1)' for "sql"/"parameterized"/"parameterized_named", '$and:[{$expr:true}]' for "mongodb".
   */
  fallbackExpression?: string
  /**
   * Default is ":". This string will be placed in front of named parameters (aka bind variables)
   * when using the "parameterized_named" export format.
   */
  paramPrefix?: string
  /**
   * Renders values as either `number`-types or unquoted strings, as
   * appropriate and when possible. Each `string`-type value is passed
   * to `parseFloat` to determine if it can be represented as a plain
   * numeric value.
   */
  parseNumbers?: boolean
  /**
   * Any rules where the field is equal to this value will be ignored.
   *
   * @default '~'
   */
  placeholderFieldName?: string
  /**
   * Any rules where the operator is equal to this value will be ignored.
   *
   * @default '~'
   */
  placeholderOperatorName?: string
}

export type ValueProcessorOptions = Pick<FormatQueryOptions, 'parseNumbers'> & {
  escapeQuotes?: boolean
}

export type ValueProcessorByRule = (rule: RuleType, options?: ValueProcessorOptions) => string

export type ValueProcessorLegacy = (field: string, operator: string, value: any, valueSource?: ValueSource) => string

export type ValueProcessor = ValueProcessorLegacy

// TODO: narrow the return type based on options.format? (must add format to options first)
export type RuleProcessor = (rule: RuleType, options?: ValueProcessorOptions) => any

export interface RQBJsonLogicStartsWith {
  startsWith: [RQBJsonLogic, RQBJsonLogic, ...RQBJsonLogic[]]
}
export interface RQBJsonLogicEndsWith {
  endsWith: [RQBJsonLogic, RQBJsonLogic, ...RQBJsonLogic[]]
}
export interface RQBJsonLogicVar {
  var: string
}
export type RQBJsonLogic = RulesLogic<RQBJsonLogicStartsWith | RQBJsonLogicEndsWith>

interface ParserCommonOptions {
  fields?: OptionList<Field> | Record<string, Field>
  getValueSources?: (field: string, operator: string) => ValueSources
  listsAsArrays?: boolean
  independentCombinators?: boolean
}

export interface ParseJsonLogicOptions extends ParserCommonOptions {
  jsonLogicOperations?: Record<string, (value: any) => RuleType | RuleGroupTypeAny>
}

export type ParseMongoDbOptions = ParserCommonOptions
