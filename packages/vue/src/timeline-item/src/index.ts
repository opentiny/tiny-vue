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
import template from 'virtual-template?pc'

export const $constants = {
  PROCESS_DONE_CLS: 'process-done',
  PROCESS_CUR_CLS: 'process-current',
  PROCESS_WAIT_CLS: 'process-wait',
  PROCESS_DISABLED_CLS: 'process-disabled',
  PROCESS_ERROR_CLS: 'process-error',
  STACK_NODES_MAX: 7,
  LIMITED_STACK_NODES: 3
}

export const timelineItemProps = {
  ...$props,
  node: {
    type: Object,
    default: {}
  },
  _constants: {
    type: Object,
    default: () => $constants
  },
  space: {
    type: [String, Number],
    default: ''
  },
  lineWidth: {
    type: [String, Number],
    default: ''
  },
  autoColorField: {
    type: String,
    default: 'autoColor'
  }
}

export default defineComponent({
  name: $prefix + 'TimelineItem',
  props: timelineItemProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
