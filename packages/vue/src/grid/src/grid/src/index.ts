import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import { methods } from '@opentiny/vue-renderless/grid/grid/vue'
import TinyGridTable from '../../table'
import template from 'virtual-template?pc'
import GlobalConfig from '../../config'

const TinyGridTablePropKeys = Object.keys(TinyGridTable.props)

export const $constants = {
  GLOBAL_CONFIG: GlobalConfig,
  TinyGridTablePropKeys
}

export const gridProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  columns: Array,
  proxyConfig: Object,
  fetchData: Object,
  saveData: Object,
  deleteData: Object,
  toolbar: Object,
  pager: Object,
  dataset: Object,
  autoLoad: {
    type: Boolean,
    default: true
  },
  seqSerial: {
    type: Boolean,
    default: false
  },
  events: Object,
  ...TinyGridTable.props,
  isBeforePageChange: Boolean,
  showSaveMsg: {
    type: Boolean,
    default: false
  },
  isMultipleHistory: Boolean,
  selectToolbar: [Boolean, Object]
}

export default defineComponent({
  name: $prefix + 'Grid',
  props: gridProps,
  setup(props, context) {
    return $setup({ props, context, template })
  },
  methods: {
    ...methods.methods
  }
})
