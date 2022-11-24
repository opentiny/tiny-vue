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
import { setup, h } from '@opentiny/vue-common'

export default {
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean,
    isMobile: Boolean
  },
  inject: ['form', 'formItem'],
  render() {
    const slotsDefault = this.slots.default && this.slots.default()
    const classPrefix = this.isMobile ? 'tiny-mobile-' : 'tiny-'

    if (!slotsDefault) return null

    if (this.isAutoWidth) {
      const autoLabelWidth = this.form.autoLabelWidth
      const style = {}

      if (autoLabelWidth && autoLabelWidth !== 'auto') {
        const marginLeft = parseInt(autoLabelWidth, 10) - this.computedWidth
        if (marginLeft) {
          style.marginLeft = marginLeft + 'px'
        }
      }

      return h(
        'div',
        {
          class: `${classPrefix}form-item_label-wrap`,
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
      const deregisterFormLabelWidth = () => this.form.deregisterLabelWidth(this.computedWidth)

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
        this.form.registerLabelWidth(val, oldVal)
        this.formItem.updateComputedLabelWidth(val)
      }
    }
  },
  setup(props, context) {
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
}
