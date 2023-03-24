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

const $constants = {
  DEFAULT_COLOR: '#1890FF',
  DEFAULT_BACK_COLOR: '#FFFFFF',
  BOX_SHADOW_PX: '0px 0px 0px 4px',
  FLAG_CONTENT_CLS: '.content'
}

export default defineComponent({
  name: $prefix + 'Milestone',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    showNumber: {
      type: Boolean,
      default: true
    },
    solid: {
      type: Boolean,
      default: false
    },
    lineStyle: {
      type: [String, Number],
      default: 1
    },
    flagBefore: {
      type: Boolean,
      default: false
    },
    completedField: {
      type: String,
      default: 'completed'
    },
    milestonesStatus: {
      type: Object,
      default: () => ({})
    },
    statusField: {
      type: String,
      default: 'status'
    },
    nameField: {
      type: String,
      default: 'name'
    },
    flagField: {
      type: String,
      default: 'flags'
    },
    flagNameField: {
      type: String,
      default: 'name'
    },
    flagContentField: {
      type: String,
      default: 'content'
    },
    flagStatusField: {
      type: String,
      default: 'status'
    },
    timeField: {
      type: String,
      default: 'time'
    },
    data: [Object, Array],
    space: Number,
    start: {
      type: Number,
      default: -1
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
)
