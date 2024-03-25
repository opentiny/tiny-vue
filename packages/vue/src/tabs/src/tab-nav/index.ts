import { $props } from '@opentiny/vue-common'

export const tabNavPcProps = {
  ...$props,
  panes: {
    type: Array,
    default: () => []
  },
  currentName: String,
  editable: Boolean,
  overflowTitle: Boolean,
  onTabClick: {
    type: Function,
    default: () => {}
  },
  onTabRemove: {
    type: Function,
    default: () => {}
  },
  tabStyle: String,
  stretch: Boolean,
  showMoreTabs: Boolean,
  showPanesCount: Number,
  popperClass: String,
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  dropConfig: {
    type: Object,
    default: () => null
  },
  titleWidth: {
    type: String,
    default: '256px'
  },
  // tiny 新增
  tooltipConfig: [String, Object]
}

export const tabNavMobileProps = {
  ...$props,
  panes: {
    type: Array,
    default: () => []
  },
  currentName: String,
  activeColor: {
    type: String,
    default: ''
  },
  onTabClick: {
    type: Function,
    default: () => {}
  },
  onTabRemove: {
    type: Function,
    default: () => {}
  },
  showExpandTabs: Boolean,
  expandPanesWidth: {
    type: String,
    default: ''
  },
  expandTabsTitle: {
    type: String,
    default: '请选择'
  },
  expandTabsMode: {
    type: String,
    default: 'columns'
  },
  stretch: {
    type: Boolean,
    default: false
  }
}

export const tabBarProps = {
  ...$props,
  tabs: Array
}
