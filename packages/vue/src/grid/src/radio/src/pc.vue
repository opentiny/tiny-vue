<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/grid/radio/vue'
import { h, $prefix, defineComponent, setup } from '@opentiny/vue-common'
import { iconRadio, iconRadioselected } from '@opentiny/vue-icon'

export default defineComponent({
  name: $prefix + 'GridRadio',
  emits: ['update:modelValue', 'change'],
  props: {
    modelValue: [String, Number],
    label: [String, Number],
    disabled: Boolean,
    name: String,
    size: String
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  },
  render() {
    let { disabled, vSize, modelValue, label, name, state } = this
    let $slots = this.slots
    const disableClass = 'disabled'

    return h(
      'label',
      {
        class: [
          'tiny-grid-radio',
          {
            [`size__${vSize}`]: state.vSize,
            [`is__${disableClass}`]: disabled
          }
        ]
      },
      [
        h('input', {
          attrs: {
            type: 'radio',
            name,
            disabled
          },
          domProps: {
            checked: modelValue === label
          },
          on: {
            change: (event) => {
              if (!disabled) {
                this.$emit('update:modelValue', label)
                this.$emit('change', label, event)
              }
            }
          }
        }),
        h('span', { class: 'tiny-grid-radio__icon' }, [
          h(iconRadio(), { class: ['tiny-svg-size', 'icon-radio'] }),
          h(iconRadioselected(), { class: ['tiny-svg-size', 'icon-radio-selected'] })
        ]),
        $slots.default ? h('span', { class: 'tiny-grid-radio__label' }, $slots.default()) : null
      ]
    )
  }
})
</script>
