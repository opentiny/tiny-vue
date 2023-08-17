import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export const tooltipProps = {
  ...$props,
  adjustArrow: {
    type: Boolean,
    default: () => false
  },
  appendToBody: {
    type: Boolean,
    default: () => true
  },
  arrowOffset: {
    type: Number,
    default: () => 0
  },
  boundariesPadding: {
    type: Number,
    default: () => 5
  },
  content: { type: String },
  disabled: { type: Boolean },
  enterable: {
    type: Boolean,
    default: () => true
  },
  hideAfter: {
    type: Number,
    default: () => 0
  },
  manual: { type: Boolean },
  modelValue: { type: Boolean },
  offset: {
    default: () => 0
  },
  effect: {
    type: String,
    default: () => 'dark'
  },
  openDelay: {
    type: Number,
    default: () => 0
  },
  closeDelay: {
    type: Number,
    default: () => 100
  },
  placement: {
    type: String,
    default: () => 'bottom'
  },
  popper: {},
  popperClass: { type: String },
  popperOptions: {
    default: () => ({ gpuAcceleration: false, boundariesPadding: 10 })
  },
  pre: { type: Boolean },
  reference: {},
  renderContent: { type: Function },
  tabindex: {
    type: Number,
    default: () => 0
  },
  transformOrigin: {
    type: [Boolean, String],
    default: () => true
  },
  transition: {
    type: String,
    default: () => 'tiny-fade-in-linear'
  },
  type: {
    type: String,
    validator: (value: string) => Boolean(~['normal', 'warning', 'error', 'info', 'success'].indexOf(value))
  },
  visibleArrow: {
    type: Boolean,
    default: () => true
  },
  zIndex: {
    type: String,
    default: () => 'next'
  }
}
export default defineComponent({
  name: $prefix + 'Tooltip',
  componentName: 'Tooltip',
  props: tooltipProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
