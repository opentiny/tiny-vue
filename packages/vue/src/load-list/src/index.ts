import { $prefix, $props, $setup, defineComponent } from '@opentiny/vue-common'
import { t } from '@opentiny/vue-locale'
import template from 'virtual-template?mobile-first'

export const loadListProps = {
  ...$props,
  direction: { type: String, default: 'down', validator: (value) => ['down', 'up'].indexOf(value) > -1 },
  offset: { type: [String, Number], default: 300 },
  disabled: Boolean,
  scroller: Object,
  immediateCheck: { type: Boolean, default: true },
  error: Boolean,
  errorText: { type: String, default: t('ui.loadList.errorText') },
  loading: Boolean,
  loadingText: { type: String, default: t('ui.loadList.loadingText') },
  finished: Boolean,
  finishedText: { type: String, default: t('ui.loadList.finishedText') },
  delay: { type: [String, Number], default: 100 }
}

export default defineComponent({
  name: $prefix + 'List',
  props: loadListProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
