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
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'Row',
  componentName: 'Row',
  props: {
    ...$props,
    flex: Boolean,
    gutter: {
      type: Number,
      default: 20,
      validator(value: number) {
        return value >= 0
      }
    },
    justify: {
      type: String,
      default: 'start',
      validator: (value: string) => Boolean(~['start', 'center', 'end', 'space-between', 'space-around'].indexOf(value))
    },
    align: {
      type: String,
      default: 'top',
      validator: (value: string) => Boolean(~['top', 'middle', 'bottom'].indexOf(value))
    },
    order: {
      type: String,
      validator: (value: string) => Boolean(~['asc', 'des'].indexOf(value))
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
