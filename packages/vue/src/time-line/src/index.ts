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
import { $prefix, $props, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile|mobile-first'

const $constants = {
  PROCESS_DONE_CLS: 'process-done',
  PROCESS_CUR_CLS: 'process-current',
  PROCESS_WAIT_CLS: 'process-wait',
  PROCESS_DISABLED_CLS: 'process-disabled',
  PROCESS_ERROR_CLS: 'process-error',
  STACK_NODES_MAX: '7',
  LIMITED_STACK_NODES: '3'
}

export default defineComponent({
  name: $prefix + 'TimeLine',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    vertical: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    showNumber: {
      type: Boolean,
      default: true
    },
    nameField: {
      type: String,
      default: 'name'
    },
    timeField: {
      type: String,
      default: 'time'
    },
    tipsField: {
      type: String,
      default: 'tips'
    },
    autoColorField: {
      type: String,
      default: 'autoColor'
    },
    showIconField: {
      type: String,
      default: 'showIcon'
    },
    start: {
      type: Number,
      default: 1
    },
    data: Array,
    space: [String, Number],
    active: {
      type: Number,
      default: -1
    },
    reverse: {
      type: Boolean,
      default: false
    },
    showStatus: {
      type: Boolean,
      default: false
    },
    subField: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
