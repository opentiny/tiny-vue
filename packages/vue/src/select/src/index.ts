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
import { t } from '@opentiny/vue-locale'
import template from 'virtual-template?pc|mobile-first'
import { IconChevronDown } from '@opentiny/vue-icon'

const $constants = {
  CLASS: {
    SelectDropdownWrap: '.tiny-select-dropdown__wrap',
    IsReverse: 'is-reverse'
  },
  I18N: {
    noData: 'ui.select.noData',
    noMatch: 'ui.select.noMatch',
    loading: 'ui.select.loading'
  },
  COMPONENT_NAME: {
    Form: 'Form',
    Select: 'Select',
    Option: 'Option',
    FormItem: 'FormItem',
    OptionGroup: 'OptionGroup',
    SelectDropdown: 'SelectDropdown'
  },
  EVENT_NAME: {
    removeTag: 'remove-tag',
    formChange: 'form.change',
    formBlur: 'form.blur',
    queryChange: 'queryChange',
    setSelected: 'setSelected',
    updatePopper: 'updatePopper',
    destroyPopper: 'destroyPopper',
    visibleChange: 'visible-change',
    handleOptionClick: 'handleOptionClick',
    handleGroupDisabled: 'handleGroupDisabled',
    initValue: 'initValue'
  },
  TYPE: {
    Grid: 'grid',
    Tree: 'tree'
  },
  MAX_WIDTH: 132,
  RECYCLE: {
    SAAS_HEIGHT: 220,
    AURORA_HEIGHT: 180,
    ITEM_HEIGHT: 34,
    SAFE_MARGIN: 4
  },
  SAAS_SIZE: {
    mini: 24,
    small: 28,
    medium: 32
  },
  AURORA_SIZE: {
    mini: 24,
    small: 36,
    medium: 42
  },
  SPACING_HEIGHT: 0,
  MAX_VISIBLE_ROWS: 1 // 多选默认最大显示行数，超出后自动隐藏
}

export default defineComponent({
  name: $prefix + 'Select',
  componentName: 'Select',
  inject: {
    form: {
      default: ''
    },
    formItem: {
      default: ''
    }
  },
  provide() {
    return {
      select: this
    }
  },
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    id: [Number, String],
    name: String,
    size: String,
    remote: Boolean,
    remoteConfig: {
      type: Object,
      default() {
        return {
          showIcon: false,
          clearData: false,
          autoSearch: false
        }
      }
    },
    title: String,
    shape: String,
    tip: String,
    label: String,
    loading: Boolean,
    disabled: Boolean,
    options: Array,
    dataset: Object,
    textField: {
      type: String,
      default: 'label'
    },
    tabindex: {
      type: String,
      default: '1'
    },
    valueField: {
      type: String,
      default: 'value'
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    showCheck: {
      type: Boolean,
      default: true
    },
    showAlloption: {
      type: Boolean,
      default: true
    },
    multiple: Boolean,
    clearable: Boolean,
    noDataText: String,
    filterable: Boolean,
    loadingText: String,
    noMatchText: String,
    popperClass: String,
    allowCreate: Boolean,
    collapseTags: Boolean,
    remoteMethod: Function,
    filterMethod: Function,
    reserveKeyword: Boolean,
    automaticDropdown: Boolean,
    defaultFirstOption: Boolean,
    modelValue: {},
    valueKey: {
      type: String,
      default: 'value'
    },
    placeholder: {
      type: String,
      default: () => t('ui.select.placeholder')
    },
    searchPlaceholder: {
      type: String,
      default: () => t('ui.select.pleaseSearch')
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    multipleLimit: {
      type: Number,
      default: 0
    },
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    hideDrop: {
      type: Boolean,
      default: false
    },
    copyable: {
      type: Boolean,
      default: false
    },
    renderType: String,
    gridOp: {
      type: Object,
      default: () => ({})
    },
    treeOp: {
      type: Object,
      default: () => ({})
    },
    delay: {
      type: Number,
      default: 200
    },
    readonly: Boolean,
    dropStyle: {
      type: Object,
      default: () => ({})
    },
    cacheOp: Object,
    isDropInheritWidth: Boolean,
    tagSelectable: {
      type: Boolean,
      default: false
    },
    selectConfig: {
      type: Object,
      default() {
        return {
          checkMethod() {
            return true
          }
        }
      }
    },
    radioConfig: {
      type: Object,
      default() {
        return {
          checkMethod() {
            return true
          }
        }
      }
    },
    allowCopy: {
      type: Boolean,
      default: false
    },
    textSplit: {
      type: String,
      default: ','
    },
    autoClose: Boolean,
    queryDebounce: Number,
    ignoreEnter: {
      type: Boolean,
      default: false
    },
    dropdownIcon: {
      type: [Object, String],
      default: () => {
        const defaultDropdownIcon = IconChevronDown()
        defaultDropdownIcon.isDefault = true
        return defaultDropdownIcon
      }
    },
    disabledTooltipContent: String,
    hoverExpand: {
      type: Boolean,
      default: false
    },
    optimization: [Boolean, Object],
    displayOnly: {
      type: Boolean,
      default: false
    },
    initQuery: Function,
    extraQueryParams: {
      type: [Object, String, Boolean, Array, Number],
      default: ''
    },
    updateDelay: {
      type: Number,
      default: 0
    },
    showTips: {
      type: Boolean,
      default: true
    },
    closeByMask: {
      type: Boolean,
      default: true
    },
    keepFocus: {
      type: Boolean,
      default: false
    },
    popperOptions: {
      type: Object,
      default: () => ({ gpuAcceleration: false, boundariesPadding: 0 })
    },
    trim: {
      type: Boolean,
      default: false
    },
    topCreate: {
      type: Boolean,
      default: false
    },
    topCreateText: {
      type: String,
      default: () => t('ui.select.add')
    },
    initLabel: {
      type: String,
      default: ''
    },
    blank: {
      type: Boolean,
      default: false
    },
    tooltipConfig: {
      type: Object,
      default() {
        return {}
      }
    },
    // 以下为 tiny 新增
    searchable: {
      type: Boolean,
      default: false
    },
    showEmptyImage: {
      type: Boolean,
      default: false
    },
    InputBoxType: {
      type: String,
      default: 'input',
      validator: (value: string) => ['input', 'underline'].includes(value)
    },
    tagType: {
      type: String,
      default: ''
    },
    clearNoMatchValue: {
      type: Boolean,
      default: false
    },
    showLimitText: {
      type: Boolean,
      default: false
    },
    showProportion: {
      type: Boolean,
      default: false
    },
    clickExpand: {
      type: Boolean,
      default: false
    },
    maxVisibleRows: {
      type: Number,
      default: $constants.MAX_VISIBLE_ROWS
    },
    allText: {
      type: String,
      default: ''
    },
    showAllTextTag: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
