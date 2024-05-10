import type { Field, Option, OptionGroup, OptionList } from '../ts'

export const isOptionGroupArray = (arr: Field['values']): arr is OptionGroup[] =>
  Array.isArray(arr) && arr.length > 0 && 'options' in arr[0]

export const getOption = <OptType extends Option = Option>(
  arr: OptionList<OptType>,
  name: string
): OptType | undefined =>
  (isOptionGroupArray(arr) ? arr.flatMap((og) => og.options) : arr).find((op) => op.name === name)

export const getFirstOption = (arr?: OptionList) =>
  !Array.isArray(arr) || arr.length === 0 ? null : isOptionGroupArray(arr) ? arr[0].options[0].name : arr[0].name
