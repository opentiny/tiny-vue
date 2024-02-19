import type { QueryBuilderProps } from '../src'

export type DemoOption =
  | 'showCombinatorsBetweenRules'
  | 'showNotToggle'
  | 'showCloneButtons'
  | 'showLockButtons'
  | 'resetOnFieldChange'
  | 'resetOnOperatorChange'
  | 'autoSelectField'
  | 'autoSelectOperator'
  | 'addRuleToNewGroups'
  | 'validateQuery'
  | 'independentCombinators'
  | 'listsAsArrays'
  | 'enableDragAndDrop'
  | 'disabled'
  | 'debugMode'
  | 'parseNumbers'
  | 'showBranches'

export type DemoOptions = Record<DemoOption, boolean>

export type DemoOptionsHash = Partial<Record<DemoOption, 'true' | 'false'>>

export type CommonRQBProps = Pick<
  QueryBuilderProps,
  | 'fields'
  | 'validator'
  | 'controlClassnames'
  | 'controlElements'
  | Exclude<DemoOption, 'validateQuery' | 'independentCombinators' | 'parseNumbers' | 'showBranches'>
> & { independentCombinators?: boolean }

export type HttpsURL = `${'https'}://${string}`
