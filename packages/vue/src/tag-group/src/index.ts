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
import { $props, $setup, defineComponent, $prefix } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export default defineComponent({
  name: $prefix + 'TagGroup',
  props: {
    ...$props,
    size: {
      type: String,
      default: 'medium',
      validator: (value: string) => ['medium', 'small', 'mini'].includes(value)
    },
    data: {
      type: Array,
      default: () => []
    },
    effect: {
      type: String,
      default: 'light',
      validator: (value: string) => ['dark', 'light', 'plain'].includes(value)
    }
  },
  setup(props, context): any {
    return $setup({ props, context, template })
  }
})
