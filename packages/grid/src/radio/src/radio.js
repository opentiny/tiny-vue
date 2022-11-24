/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { h, $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'GridRadio',
  model: {
    prop: 'value',
    event: 'changeValue'
  },
  props: {
    value: [String, Number],
    label: [String, Number],
    disabled: Boolean,
    name: String,
    size: String
  },
  computed: {
    vSize() {
      return this.size || this.$parent.size || this.$parent.vSize
    }
  },
  setup(props, { slots }) {
    return { slots }
  },
  render() {
    let { disabled, vSize, value, label, name } = this
    let $slots = this.slots

    return h(
      'label',
      {
        class: [
          'tiny-grid-radio',
          {
            [`size__${vSize}`]: vSize,
            'is__disabled': disabled
          }
        ]
      },
      [
        h('input', {
          attrs: {
            type: 'radio',
            name,
            disabled
          },
          domProps: {
            checked: value === label
          },
          on: {
            change: (event) => {
              if (!disabled) {
                this.$emit('changeValue', label)
                this.$emit('change', label, event)
              }
            }
          }
        }),
        h('span', { class: 'tiny-grid-radio__icon' }),
        $slots.default ? h('span', { class: 'tiny-grid-radio__label' }, $slots.default()) : null
      ]
    )
  }
}
