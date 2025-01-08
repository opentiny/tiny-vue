import { t } from '@opentiny/vue-locale'

export const $constants = {
  DEFAULT_HEAD_HEIGHT: 50,
  STATUS: {
    NORMAL: 'normal',
    LOADING: 'loading',
    LOOSING: 'loosing',
    PULLING: 'pulling',
    SUCCESS: 'success'
  }
}

export const pullRefreshProps = {
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
  pullUpLoadingText: {
    type: String,
    default: ''
  },
  pullDownLoadingText: {
    type: String,
    default: ''
  },
  disabledPullUp: {
    type: Boolean,
    default: false
  }
}
