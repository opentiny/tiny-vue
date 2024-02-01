import type {
  Classnames,
  DefaultCombinator,
  DefaultCombinatorExtended,
  DefaultOperator,
  DefaultOperatorName,
  TranslationsFull
} from './ts'

const placeholderName = '~'
const placeholderLabel = '------'
export const defaultPlaceholderFieldName = placeholderName
export const defaultPlaceholderFieldLabel = placeholderLabel
export const defaultPlaceholderFieldGroupLabel = placeholderLabel
export const defaultPlaceholderOperatorName = placeholderName
export const defaultPlaceholderOperatorLabel = placeholderLabel
export const defaultPlaceholderOperatorGroupLabel = placeholderLabel

export const defaultJoinChar = ','

export const defaultTranslations: TranslationsFull = {
  fields: {
    title: '字段',
    placeholderName: defaultPlaceholderFieldName,
    placeholderLabel: defaultPlaceholderFieldLabel,
    placeholderGroupLabel: defaultPlaceholderFieldGroupLabel
  },
  operators: {
    title: '操作符',
    placeholderName: defaultPlaceholderOperatorName,
    placeholderLabel: defaultPlaceholderOperatorLabel,
    placeholderGroupLabel: defaultPlaceholderOperatorGroupLabel
  },
  value: {
    title: '值'
  },
  removeRule: {
    label: 'x',
    title: '移除规则'
  },
  clearData: {
    label: '',
    title: '清除数据'
  },
  removeGroup: {
    label: 'x',
    title: '移除条件组'
  },
  addRule: {
    label: '添加规则',
    title: '添加规则'
  },
  addGroup: {
    label: '新增子条件组',
    title: '新增子条件组'
  },
  combinators: {
    title: 'Combinators'
  },
  notToggle: {
    label: 'Not',
    title: '反转条件组'
  },
  cloneRule: {
    label: '⧉',
    title: '复制规则'
  },
  cloneRuleGroup: {
    label: '⧉',
    title: '复制条件组'
  },
  dragHandle: {
    label: '⁞⁞',
    title: '拖拽'
  },
  lockRule: {
    label: '🔓',
    title: '锁定规则'
  },
  lockGroup: {
    label: '🔓',
    title: '锁定条件组'
  },
  lockRuleDisabled: {
    label: '🔒',
    title: '解锁规则'
  },
  lockGroupDisabled: {
    label: '🔒',
    title: '解锁条件组'
  },
  valueSourceSelector: {
    title: '数据来源'
  }
}
// 数值/金额/时间类型字段：等于、不等于、大于、大于等于、小于、小于等于、为空、不为空、介于
// 文本类型字段：包含、不包含、开头为、结束为、为空、不为空
// 段落文本：包含、不包含
export const defaultOperators: DefaultOperator[] = [
  { name: '=', label: '=' },
  { name: '!=', label: '!=' },
  { name: '<=', label: '<=' },
  { name: '>=', label: '>=' },
  { name: '<', label: '<' },
  { name: '>', label: '>' },
  { name: 'doesNotContain', label: 'does not contain' },
  { name: 'doesNotBeginWith', label: 'does not begin with' },
  { name: 'doesNotEndWith', label: 'does not end with' },
  { name: 'contains', label: 'contains' },
  { name: 'beginsWith', label: 'begins with' },
  { name: 'endsWith', label: 'ends with' },
  { name: 'in', label: 'in' },
  { name: 'notIn', label: 'not in' },
  { name: 'null', label: 'is null' },
  { name: 'notNull', label: 'is not null' },
  { name: 'between', label: 'between' },
  { name: 'notBetween', label: 'not between' }
]

export const defaultOperatorNegationMap: Record<DefaultOperatorName, DefaultOperatorName> = {
  '=': '!=',
  '!=': '=',
  '<': '>=',
  '<=': '>',
  '>': '<=',
  '>=': '<',
  beginsWith: 'doesNotBeginWith',
  doesNotBeginWith: 'beginsWith',
  endsWith: 'doesNotEndWith',
  doesNotEndWith: 'endsWith',
  contains: 'doesNotContain',
  doesNotContain: 'contains',
  between: 'notBetween',
  notBetween: 'between',
  in: 'notIn',
  notIn: 'in',
  notNull: 'null',
  null: 'notNull'
}

export const defaultCombinators: DefaultCombinator[] = [
  { name: 'and', label: '且' },
  { name: 'or', label: '或' }
]

export const defaultCombinatorsExtended: DefaultCombinatorExtended[] = [
  ...defaultCombinators,
  { name: 'xor', label: 'XOR' }
]

const groupButtonClass = ' group-button'

export const standardClassnames = {
  ruleGroup: 'ruleGroup',
  queryBuilder: 'queryBuilder',
  header: 'ruleGroup-header',
  combinators: 'ruleGroup-combinators',
  body: 'ruleGroup-body',
  addRule: 'ruleGroup-addRule' + groupButtonClass,
  addGroup: 'ruleGroup-addGroup' + groupButtonClass,
  cloneRule: 'rule-cloneRule' + groupButtonClass,
  cloneGroup: 'ruleGroup-cloneGroup' + groupButtonClass,
  removeGroup: 'ruleGroup-remove' + groupButtonClass,
  notToggle: 'ruleGroup-notToggle',
  rule: 'query-builder-rule',
  fields: 'rule-fields',
  operators: 'rule-operators',
  value: 'rule-value',
  removeRule: 'rule-remove' + groupButtonClass,
  clearData: 'clear-data' + groupButtonClass,
  betweenRules: 'betweenRules',
  valid: 'queryBuilder-valid',
  invalid: 'queryBuilder-invalid',
  dndDragging: 'dndDragging',
  dndOver: 'dndOver',
  dndCopy: 'dndCopy',
  dragHandle: 'queryBuilder-dragHandle',
  disabled: 'queryBuilder-disabled',
  lockRule: 'rule-lock',
  lockGroup: 'ruleGroup-lock',
  valueSource: 'rule-valueSource',
  valueListItem: 'rule-value-list-item',
  branches: 'queryBuilder-branches',
  displayOnlyField: 'display-only-field'
} as const

export const defaultControlClassnames: Classnames = {
  ruleGroup: '',
  queryBuilder: '',
  header: '',
  addRule: '',
  body: '',
  combinators: '',
  cloneGroup: '',
  addGroup: '',
  removeGroup: '',
  cloneRule: '',
  rule: '',
  notToggle: '',
  operators: '',
  fields: '',
  value: '',
  clearData: '',
  lockRule: '',
  dragHandle: '',
  lockGroup: '',
  valueSource: '',
  removeRule: ''
}

export const groupInvalidReasons = {
  empty: 'empty',
  invalidCombinator: 'invalid combinator',
  invalidIndependentCombinators: 'invalid independent combinators'
} as const

export const TestID = {
  rule: 'rule',
  inlineCombinator: 'inline-combinator',
  ruleGroup: 'rule-group',
  addGroup: 'add-group',
  cloneGroup: 'clone-group',
  removeGroup: 'remove-group',
  cloneRule: 'clone-rule',
  addRule: 'add-rule',
  combinators: 'combinators',
  clearData: 'clear-data',
  fields: 'fields',
  removeRule: 'remove-rule',
  operators: 'operators',
  notToggle: 'not-toggle',
  valueEditor: 'value-editor',
  lockRule: 'lock-rule',
  dragHandle: 'drag-handle',
  valueSourceSelector: 'value-source-selector',
  lockGroup: 'lock-group'
} as const

export const LogType = {
  parentPathDisabled: 'action aborted: parent path disabled',
  pathDisabled: 'action aborted: path is disabled',
  queryUpdate: 'query updated',
  onAddRuleFalse: 'onAddRule callback returned false',
  onAddGroupFalse: 'onAddGroup callback returned false',
  onRemoveFalse: 'onRemove callback returned false',
  add: 'rule or group added',
  remove: 'rule or group removed',
  update: 'rule or group updated',
  move: 'rule or group moved'
} as const
