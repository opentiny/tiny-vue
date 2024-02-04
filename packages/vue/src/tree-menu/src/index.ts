import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'
import { iconSearch } from '@opentiny/vue-icon'

export const treeMenuProps = {
  $props,
  placeholder: {
    default: '',
    type: String
  },
  data: Array,
  nodeKey: String,
  defaultExpandAll: Boolean,
  suffixIcon: Object,
  prefixIcon: Object,
  searchIcon: {
    type: Object,
    default: () => iconSearch()
  },
  props: Object,
  draggable: {
    type: Boolean,
    default: false
  },
  emptyText: {
    type: String,
    default: ''
  },
  checkStrictly: Boolean,
  lazy: {
    type: Boolean,
    default: false
  },
  load: Function,
  showCheckbox: Boolean,
  filterNodeMethod: Function,
  defaultCheckedKeys: Array,
  defaultExpandedKeys: Array,
  defaultExpandedKeysHighlight: [Number, String],
  indent: {
    type: Number,
    default: 16
  },
  allowDrag: Function,
  allowDrop: Function,
  expandOnClickNode: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: false
  },
  wrap: {
    type: Boolean,
    default: false
  },
  getMenuDataSync: Function,
  accordion: Boolean,
  showTitle: {
    type: Boolean,
    default: true
  },
  showFilter: {
    type: Boolean,
    default: true
  },
  collapsible: {
    type: Boolean,
    default: true
  },
  showNumber: {
    type: Boolean,
    default: false
  },
  nodeHeight: Number,
  onlyCheckChildren: {
    type: Boolean,
    default: false
  },
  menuCollapsible: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'TreeMenu',
  props: treeMenuProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
