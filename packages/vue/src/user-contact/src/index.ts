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

import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'UserContact',
  props: {
    ...$props,
    showName: {
      type: Boolean,
      default: true
    },
    showArrow: {
      type: Boolean,
      default: false
    },

    /**
     * 是否显示 userDescription, colType 为 false 时生效
     */
    showDescription: {
      type: Boolean,
      default: true
    },

    /**
     * 是否显示 头像
     */
    showImg: {
      type: Boolean,
      default: true
    },

    /**
     * 数据
     */
    data: {
      type: Object,
      validator: (value: any) =>
        typeof value.userName === 'string' && value.imgUrl
          ? typeof value.imgUrl === 'string'
          : true && typeof value.userDescription === 'string' && (!value.values || Array.isArray(value.values))
    },
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    isNewImMode: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return $setup({
      context,
      props,
      template
    })
  }
})
