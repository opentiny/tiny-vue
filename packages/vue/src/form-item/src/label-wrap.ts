import { setup, h, $props, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: {
    ...$props,
    isAutoWidth: Boolean,
    updateAll: Boolean,
    isMobile: Boolean,
    isMobileFirst: Boolean
  },
  inject: ['form', 'formItem'],
  render() {
    const slotsDefault = this.slots.default && this.slots.default()
    const classPrefix = this.isMobile ? 'tiny-mobile-' : 'tiny-'

    if (!slotsDefault) return null

    if (this.isAutoWidth) {
      const autoLabelWidth = (this as any).form.autoLabelWidth
      const style = {} as any

      if (autoLabelWidth && autoLabelWidth !== 'auto') {
        const marginLeft = parseInt(autoLabelWidth, 10) - this.computedWidth
        if (marginLeft) {
          style.marginLeft = marginLeft + 'px'
        }
      }

      return h(
        'div',
        {
          class: this.isMobileFirst ? 'float-left' : `${classPrefix}form-item_label-wrap`,
          style
        },
        slotsDefault
      )
    } else {
      return slotsDefault[0]
    }
  },
  methods: {
    getLabelWidth() {
      const computedStylWidth = (elem) => window.getComputedStyle(elem).width
      const ceilFloat = (f) => Math.ceil(parseFloat(f))

      return !this.$el || !this.$el.firstElementChild ? 0 : ceilFloat(computedStylWidth(this.$el.firstElementChild))
    },
    updateLabelWidth(action = 'update') {
      if (!this.$slots.default || !this.isAutoWidth || !this.$el.firstElementChild) {
        return
      }

      const setComputedWidth = () => (this.computedWidth = this.getLabelWidth())
      const deregisterFormLabelWidth = () => (this as any).form.deregisterLabelWidth(this.computedWidth)

      if (action === 'update') {
        setComputedWidth()
      } else if (action === 'remove') {
        deregisterFormLabelWidth()
      }
    }
  },
  watch: {
    computedWidth(val, oldVal) {
      if (this.updateAll) {
        ;(this as any).form.registerLabelWidth(val, oldVal)
        ;(this as any).formItem.updateComputedLabelWidth(val)
      }
    }
  },
  setup(props, context): any {
    const renderless = (props, { onMounted, onUpdated, onBeforeUnmount }, { vm }) => {
      onMounted(() => vm.updateLabelWidth('update'))
      onUpdated(() => vm.updateLabelWidth('update'))
      onBeforeUnmount(() => vm.updateLabelWidth('remove'))

      return {
        computedWidth: 0
      }
    }

    const api = ['computedWidth']

    return setup({ props, context, renderless, api })
  }
})
