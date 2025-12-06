<template>
  <component ref="childComponent" :is="resolvedComponent" v-bind="mergedProps" v-on="listeners">
    <template v-slot:default="slotProps">
      <slot v-if="hasScopedDefault" v-bind="slotProps"></slot>
      <slot v-else></slot>
    </template>
    <template v-for="slotName in slotNames" v-slot:[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps"></slot>
    </template>
  </component>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/select-wrapper/vue'
import { props, $prefix, defineComponent, setup } from '@opentiny/vue-common'
import TinyBaseSelect from '@opentiny/vue-base-select'
import TinyTreeSelect from '@opentiny/vue-tree-select'
import TinyGridSelect from '@opentiny/vue-grid-select'
import '@opentiny/vue-theme/select/index.less'

const $constants = {
  TYPE: {
    Grid: 'grid',
    Tree: 'tree'
  }
}

export default defineComponent({
  name: $prefix + 'SelectWrapper',
  inheritAttrs: false,
  components: {
    TinyBaseSelect,
    TinyTreeSelect,
    TinyGridSelect
  },
  props: {
    ...props,
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
    placeholder: String,
    searchPlaceholder: String,
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
      default: ''
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
    topCreateText: String,
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
    showEmptyValue: Boolean,
    dropdownHeight: {
      type: String,
      default: 'initial'
    },
    stopPropagation: {
      type: Boolean,
      default: undefined
    },
    searchable: {
      type: Boolean,
      default: false
    },
    showEmptyImage: {
      type: Boolean,
      default: false
    },
    inputBoxType: {
      type: String,
      default: 'input',
      validator: (value: string) => ['input', 'underline'].includes(value)
    },
    tagType: String,
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
      default: 1
    },
    allText: String,
    showAllTextTag: {
      type: Boolean,
      default: false
    },
    maxTagWidth: {
      type: [String, Number],
      default: null
    },
    autoSelect: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const components = {
      TinyBaseSelect,
      TinyTreeSelect,
      TinyGridSelect
    }

    return setup({ props, context, renderless, api, extendOptions: { components } }) as any
  }
})
</script>
