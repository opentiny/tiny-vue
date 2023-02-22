import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

const $constants = {
  COMPONENT_NAME: { FormItem: 'FormItem' },
  EVENT_NAME: { FormBlur: 'form.blur' }
}

const template = function () {
  return PCTemplate
}

export default {
  name: $prefix + 'User',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    tabindex: { type: String, default: '1' },
    modelValue: {
      type: [String, Number],
      required: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    valueSplit: {
      type: String,
      default: ','
    },
    textSplit: {
      type: String,
      default: ','
    },
    valueField: {
      type: String,
      default: 'userId'
    },
    textField: {
      type: String,
      default: 'userCN'
    },
    cache: {
      type: Boolean,
      default: true
    },
    cacheKey: {
      type: String,
      default: 'aurora-user'
    },
    delay: {
      type: Number,
      default: 600
    },
    suggestLength: {
      type: Number,
      default: 3
    },
    cacheFields: {
      type: Array,
      default: () => []
    },
    collapseTags: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    showOverflowTooltip: {
      type: Boolean,
      default: true
    },
    sortByFetchData: {
      type: Boolean,
      default: false
    },
    sortable: Function,
    size: String,
    fetchW3Accounts: Function,
    fetchSuggestUser: Function,
    fetchUserByUserId: Function,
    userCache: Object,
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    tagSelectable: {
      type: Boolean,
      default: false
    },
    copyable: {
      type: Boolean,
      default: false
    },
    batch: {
      type: [Boolean, Number],
      default: 0
    },
    allowCopy: {
      type: Boolean,
      default: false
    },
    noDataText: String,
    loadingText: String,
    autoClose: Boolean,
    queryDebounce: {
      type: Number,
      default: 100
    },
    hideSelected: Boolean,
    ignoreEnter: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
