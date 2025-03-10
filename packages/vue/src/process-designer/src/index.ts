import type { PropType } from '@opentiny/vue-common'
import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'
import '@opentiny/vue-theme/process-designer/index.less'
import type { Modeler } from '@opentiny/tiny-bpmn'

const $constants = {}

export interface ProcessDesignerProps {
  getData?: () => Promise<string>
  additionalModules?: any[]
  modeler?: Modeler
  data?: string
  showProperties: boolean
  readonly: boolean
  keyboard: boolean
}

export const processDesignerProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  getData: {
    type: Function as PropType<() => Promise<string>>,
    required: true
  },
  additionalModules: {
    type: Array as PropType<any[]>,
    requrie: false
  },
  modeler: {
    type: Object as PropType<Modeler>,
    require: false
  },
  data: {
    type: String,
    requrie: false
  },
  modules: {
    type: Array,
    require: false
  },
  showProperties: {
    type: Boolean,
    require: false,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  keyboard: {
    type: Boolean,
    default: true
  }
}

export default defineComponent({
  name: $prefix + 'ProcessDesigner',
  props: {
    ...$props
  },
  setup(props, context) {
    return $setup({ props, context, template: () => PCTemplate })
  }
})
