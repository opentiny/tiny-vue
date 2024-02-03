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
  ISCHECKED: 'is-checked',
  DROPPANEL: '.tiny-transfer-panel__list',
  TRANSFERPANEL: '.tiny-transfer-panel__item'
}

export default defineComponent({
  name: $prefix + 'Transfer',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    buttonTexts: {
      type: Array,
      default: () => []
    },
    columns: Array,
    data: {
      type: Array,
      default: () => []
    },
    dropConfig: Object,
    filterMethod: Function,
    filterPlaceholder: {
      type: String,
      default: ''
    },
    filterable: Boolean,
    format: {
      type: Object,
      default: () => ({})
    },
    leftDefaultChecked: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    pagerOp: {
      type: Object,
      default: () => ({ mode: 'fixed', pageVO: { currentPage: 1, pageSize: 10 } })
    },
    props: {
      type: Object,
      default: () => ({ label: 'label', key: 'key', disabled: 'disabled' })
    },
    render: Object,
    renderContent: Function,
    renderType: String,
    rightDefaultChecked: {
      type: Array,
      default: () => []
    },
    showAllBtn: Boolean,
    showPager: {
      type: Boolean,
      default: false
    },
    targetOrder: {
      type: String,
      default: 'original'
    },
    titles: {
      type: Array,
      default: () => []
    },
    toLeftDisable: {
      type: Boolean,
      default: true
    },
    toRightDisable: {
      type: Boolean,
      default: true
    },
    treeOp: Object,
    beforeTransfer: Function
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
