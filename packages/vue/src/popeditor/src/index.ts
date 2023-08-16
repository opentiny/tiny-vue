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
import { iconPopup, iconSearch } from '@opentiny/vue-icon'
import template from 'virtual-template?pc'

const $constants = {
  TITLE: 'ui.popeditor.title',
  COLUMNS_TYPE: {
    selection: 'selection',
    radio: 'radio',
    index: 'index',
    width: 40
  },
  GRID_REF: {
    history: 'historyGrid',
    source: 'sourceGrid'
  },
  TAG_NAME: 'INPUT',
  MODAL_WIDTH: {
    multi: 900,
    radio: 600
  },
  ACTIVE_NAME: {
    history: 'history',
    source: 'source'
  },
  TYPE_GRID: 'grid',
  TYPE_TREE: 'tree',
  ID: 'id',
  LABEL: 'label'
}

export default defineComponent({
  name: $prefix + 'Popeditor',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: {
      type: [String, Number, Array],
      default: ''
    },
    tabindex: {
      type: String,
      default: '1'
    },
    placeholder: {
      type: String,
      default: ''
    },
    size: String,
    trigger: {
      type: String,
      default: 'default'
    },
    icon: {
      type: Object,
      default() {
        return iconPopup()
      }
    },
    iconSearch: {
      type: Object,
      default() {
        return iconSearch()
      }
    },
    title: {
      type: String,
      default: ''
    },
    textField: {
      type: String,
      default: 'label'
    },
    textSplit: {
      type: String,
      default: '/'
    },
    valueField: {
      type: String,
      default: 'id'
    },
    valueSplit: {
      type: String,
      default: ';'
    },
    popseletor: {
      type: String,
      default: 'grid',
      validator(value) {
        return ['grid', 'tree'].includes(value)
      }
    },
    conditions: {
      type: Array,
      default() {
        return []
      }
    },
    width: {
      type: [String, Number],
      default: ''
    },
    gridOp: {
      type: Object,
      default() {
        return {
          columns: [],
          data: []
        }
      }
    },
    remoteSearch: Function,
    dataset: Object,
    alwaysLoad: {
      type: Boolean,
      default: false
    },
    treeOp: {
      type: Object,
      default() {
        return {
          data: []
        }
      }
    },
    pagerOp: {
      type: Object,
      default() {
        return {}
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: true
    },
    multi: {
      type: Boolean,
      default: false
    },
    showClearBtn: {
      type: Boolean,
      default: true
    },
    showPager: {
      type: Boolean,
      default: false
    },
    showHistory: {
      type: Boolean,
      default: false
    },
    autoLookup: {
      type: Boolean,
      default: true
    },
    beforeReset: Function,
    resize: {
      type: Boolean,
      default: false
    },
    dialogClass: {
      type: String,
      default: ''
    },
    textRenderSource: Function,
    draggable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    suggest: Boolean,
    beforeClose: {
      type: Function,
      default: () => () => true
    },
    showSelectedBox: Boolean,
    selectedBoxOp: {
      type: Object,
      default: () => ({})
    },
    tooltipConfig: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
