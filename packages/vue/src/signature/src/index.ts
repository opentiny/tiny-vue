import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import { t } from '@opentiny/vue-locale'
import template from 'virtual-template?mobile-first'

export default defineComponent({
  name: $prefix + 'Signature',
  props: {
    ...$props,
    placeholder: {
      type: String,
      default: t('ui.signature.placeholder')
    },
    height: String,
    type: { type: String, default: 'png' },
    penColor: { type: String, default: '#191919' },
    lineWidth: { type: Number, default: 4 },
    backgroundColor: { type: String, default: '' },
    value: String,
    showSubmitButton: {
      type: Boolean,
      default: true
    },
    rewriteButtonText: {
      type: String,
      default: t('ui.signature.rewrite')
    },
    resignButtonText: {
      type: String,
      default: t('ui.signature.resign')
    },
    cancelButtonText: {
      type: String,
      default: t('ui.signature.cancel')
    },
    submitButtonText: {
      type: String,
      default: t('ui.signature.confirm')
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
