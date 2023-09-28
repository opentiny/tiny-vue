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
import template from 'virtual-template?pc|mobile|mobile-first'

const $constants = {
  TAB_ITEM: 'TabItem'
}

export default defineComponent({
  name: $prefix + 'Tabs',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    tabStyle: String,
    activeName: String,
    withClose: Boolean,
    withAdd: Boolean,
    size: String,
    activeColor: {
      type: String,
      default: ''
    },
    modelValue: {},
    editable: Boolean,
    position: {
      type: String,
      default: 'top'
    },
    beforeLeave: Function,
    stretch: Boolean,
    showMoreTabs: Boolean,
    showExpandTabs: Boolean,
    expandTabsTitle: String,
    expandTabsMode: String,
    swipeable: {
      type: Boolean,
      default: true
    },
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    dropConfig: {
      type: Object,
      default: () => null
    },
    tooltipConfig: [String, Object]
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
