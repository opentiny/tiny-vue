import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import { t } from '@opentiny/vue-locale'
import template from 'virtual-template?mobile|mobile-first'

const $constants = {
  DEFAULT_HEAD_HEIGHT: 50,
  STATUS: {
    NORMAL: 'normal',
    LOADING: 'loading',
    LOOSING: 'loosing',
    PULLING: 'pulling',
    SUCCESS: 'success'
  }
}

export default defineComponent({
  name: $prefix + 'PullRefresh',
  props: {
    ...$props,
    _constants: { type: Object, default: () => $constants },
    modelValue: Boolean,
    loosingText: { type: String, default: t('ui.pullRefresh.loosing') },
    successText: { type: String, default: $constants.STATUS.SUCCESS },
    failedText: String,
    successDuration: {
      type: [Number, String],
      default: 500
    },
    animationDuration: {
      type: [Number, String],
      default: 300
    },
    disabled: {
      type: Boolean,
      default: false
    },
    pullUp: {
      type: Object,
      default: {}
    },
    pullDown: {
      type: Object,
      default: {}
    },
    hasMore: {
      type: Boolean,
      default: true
    },

    // mobile-first的props
    headHeight: { type: [Number, String], default: $constants.DEFAULT_HEAD_HEIGHT },
    pullingText: { type: String, default: t('ui.pullRefresh.pulling') },
    loadingText: { type: String, default: $constants.STATUS.LOADING },
    pullDistance: [Number, String],
    loadingOptions: { type: Object, default: () => ({}) },
    selfSimulate: { type: Boolean, default: false }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
