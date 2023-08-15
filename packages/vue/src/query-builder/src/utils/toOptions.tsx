import type { OptionList } from '../ts'
import { isOptionGroupArray } from './optGroupUtils'
import { defineComponent, h } from '@opentiny/vue-common'

const isSelected = (data: any, value: any) => {
  return Array.isArray(data) ? data.includes(value) : data === value
}

export const toOptions = (arr?: OptionList, selected?: any) => {
  return isOptionGroupArray(arr)
    ? arr.map((og) =>
        h(
          'optgroup',
          {
            attrs: { key: og.label, label: og.label }
          },
          [
            og.options.map((opt) =>
              h(
                'option',
                {
                  attrs: { key: opt.name, value: opt.name, selected: isSelected(selected, opt.name) }
                },
                [opt.label]
              )
            )
          ]
        )
      )
    : Array.isArray(arr)
    ? arr.map((opt) =>
        h(
          'option',
          {
            attrs: { key: opt.name, value: opt.name, selected: isSelected(selected, opt.name) }
          },
          [opt.label]
        )
      )
    : null
}
