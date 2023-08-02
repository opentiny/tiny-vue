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
import template from 'virtual-template?pc'

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
    handleGroupDisabled: 'handleGroupDisabled'
  },
  TYPE: {
    Grid: 'grid',
    Tree: 'tree'
  },
  InputBoxType: {
    Input: 'input',
    Underline: 'underline'
  },
  ICON_MAP: {
    downWard: 'icon-delta-down'
  }
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
      default: 0
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
    optimization: [Boolean, Object],
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
      default: 'input'
    },
    tagType: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
