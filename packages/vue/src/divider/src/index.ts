import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import type { PropType } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export type DirectionType = 'horizontal' | 'vertical'
export type BorderStyleType = 'dashed' | 'solid' | 'dotted'
export type ContentPositionType = 'left' | 'right' | 'center'

export const $constants = {}

export const dividerProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  direction: {
    type: String as PropType<DirectionType>,
    default: 'horizontal'
  },
  color: {
    type: String,
    default: ''
  },
  borderStyle: {
    type: String as PropType<BorderStyleType>,
    default: 'solid'
  },
  contentPosition: {
    type: String as PropType<ContentPositionType>,
    default: 'center'
  },
  contentColor: {
    type: String,
    default: ''
  },
  contentBackgroundColor: {
    type: String,
    default: ''
  },
  fontSize: {
    type: String,
    default: () => '14px'
  },
  margin: String,
  offset: String,
  height: String,
  status: {
    type: String,
    values: ['default', 'success', 'warning', 'error', 'info'],
    default: () => 'default'
  }
}

export default defineComponent({
  name: $prefix + 'Divider',
  props: dividerProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
