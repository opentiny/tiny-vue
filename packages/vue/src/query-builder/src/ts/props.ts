import type { Classname, Combinator, Field, Operator, Option, OptionList, ValueSource } from './basic'
import type { Schema } from './propsUsingFrame'
import type { RuleGroupType, RuleType } from './ruleGroups'
import type { RuleGroupTypeAny, RuleOrGroupArray } from './ruleGroupsIC'
import type { ValidationResult } from './validation'

export interface CommonSubComponentProps {
  /**
   * CSS classNames to be applied
   *
   * This is `string` and not `Classname` because the Rule and RuleGroup
   * components run clsx() to produce the className that gets passed to
   * each subcomponent.
   */
  className?: string
  /**
   * Path to this RuleGroup or sub-component's Rule
   */
  path: number[]
  /**
   * The level for the current group
   */
  level: number
  /**
   * The title of this control
   */
  title?: string
  /**
   * Disable the control
   */
  disabled?: boolean
  /**
   * Container for custom props passed to all components
   */
  context?: any
  /**
   * Validation result for the parent component
   */
  validation?: boolean | ValidationResult
  /**
   * TestID for this component
   */
  testID?: string
  /**
   * All subcomponents receive the schema as a prop
   */
  schema: Schema
}

export interface SelectorOrEditorProps extends CommonSubComponentProps {
  value?: string
  handleOnChange(value: any): void
}

export interface BaseSelectorProps<OptType extends Option = Option> extends SelectorOrEditorProps {
  options: OptionList<OptType>
}

export interface ValueSelectorProps<OptType extends Option = Option> extends BaseSelectorProps<OptType> {
  multiple?: boolean
  listsAsArrays?: boolean
}

export interface NotToggleProps extends CommonSubComponentProps {
  checked?: boolean
  handleOnChange(checked: boolean): void
  label?: string
}

export interface CombinatorSelectorProps extends BaseSelectorProps<Combinator> {
  rules?: RuleOrGroupArray
}

export interface FieldSelectorProps extends BaseSelectorProps<Field> {
  operator?: string
}

export interface OperatorSelectorProps extends BaseSelectorProps<Operator> {
  field: string
  fieldData: Field
}

type ValueSourceOption = Option<ValueSource>

export interface ValueSourceSelectorProps extends BaseSelectorProps<ValueSourceOption> {
  field: string
  fieldData: Field
}

export type VersatileSelectorProps = ValueSelectorProps &
  Partial<FieldSelectorProps> &
  Partial<OperatorSelectorProps> &
  Partial<CombinatorSelectorProps>

export interface DragHandleProps extends CommonSubComponentProps {
  label?: string
}

export interface Classnames {
  /**
   * Root `<div>` element
   */
  queryBuilder: Classname
  /**
   * `<div>` containing the RuleGroup
   */
  ruleGroup: Classname
  /**
   * `<div>` containing the RuleGroup header controls
   */
  header: Classname
  /**
   * `<div>` containing the RuleGroup child rules/groups
   */
  body: Classname
  /**
   * `<select>` control for combinators
   */
  combinators: Classname
  /**
   * `<button>` to clear data
   */
  clearData: Classname
  /**
   * `<button>` to add a Rule
   */
  addRule: Classname
  /**
   * `<button>` to add a RuleGroup
   */
  addGroup: Classname
  /**
   * `<button>` to clone a Rule
   */
  cloneRule: Classname
  /**
   * `<button>` to clone a RuleGroup
   */
  cloneGroup: Classname
  /**
   * `<button>` to remove a RuleGroup
   */
  removeGroup: Classname
  /**
   * `<div>` containing the Rule
   */
  rule: Classname
  /**
   * `<select>` control for fields
   */
  fields: Classname
  /**
   * `<select>` control for operators
   */
  operators: Classname
  /**
   * `<input>` for the field value
   */
  value: Classname
  /**
   * `<button>` to remove a Rule
   */
  removeRule: Classname
  /**
   * `<label>` on the "not" toggle
   */
  notToggle: Classname
  /**
   * `<span>` handle for dragging rules/groups
   */
  dragHandle: Classname
  /**
   * `<button>` to lock (i.e. disable) a Rule
   */
  lockRule: Classname
  /**
   * `<button>` to lock (i.e. disable) a RuleGroup
   */
  lockGroup: Classname
  /**
   * Value source selector
   */
  valueSource: Classname
}

export interface QueryActions {
  onGroupAdd(group: RuleGroupTypeAny, parentPath: number[], context?: any): void
  onGroupRemove(path: number[]): void
  onPropChange(prop: Exclude<keyof RuleType | keyof RuleGroupType, 'id' | 'path'>, value: any, path: number[]): void
  onRuleAdd(rule: RuleType, parentPath: number[], context?: any): void
  onRuleRemove(path: number[]): void
  moveRule(oldPath: number[], newPath: number[], clone?: boolean): void
}

export interface Translation {
  title?: string
}
export interface TranslationWithLabel extends Translation {
  label?: string
}
export interface TranslationWithPlaceholders extends Translation {
  /**
   * Value for the placeholder field option if autoSelectField is false,
   * or the placeholder operator option if autoSelectOperator is false.
   */
  placeholderName?: string
  /**
   * Label for the placeholder field option if autoSelectField is false,
   * or the placeholder operator option if autoSelectOperator is false.
   */
  placeholderLabel?: string
  /**
   * Label for the placeholder field optgroup if autoSelectField is false,
   * or the placeholder operator optgroup if autoSelectOperator is false.
   */
  placeholderGroupLabel?: string
}
export interface Translations {
  fields: TranslationWithPlaceholders
  operators: TranslationWithPlaceholders
  value: Translation
  removeRule: TranslationWithLabel
  clearData: TranslationWithLabel
  removeGroup: TranslationWithLabel
  addRule: TranslationWithLabel
  combinators: Translation
  addGroup: TranslationWithLabel
  lockRule: TranslationWithLabel
  notToggle: TranslationWithLabel
  cloneRuleGroup: TranslationWithLabel
  dragHandle: TranslationWithLabel
  lockGroup: TranslationWithLabel
  cloneRule: TranslationWithLabel
  lockGroupDisabled: TranslationWithLabel
  lockRuleDisabled: TranslationWithLabel
  valueSourceSelector: Translation
}
export type TranslationsFull = {
  [K in keyof Translations]: { [T in keyof Translations[K]]-?: string }
}
