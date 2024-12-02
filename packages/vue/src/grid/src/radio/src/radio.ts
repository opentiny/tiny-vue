/**
 * MIT License
 *
 * Copyright (c) 2019 Xu Liangzhan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
import { h, $prefix, defineComponent, isVue2, hooks } from '@opentiny/vue-common'
import { iconRadio, iconRadioselected } from '@opentiny/vue-icon'
import { AutoTip } from '@opentiny/vue-directive'

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
  directives: { AutoTip },
  computed: {
    vSize() {
      return this.size || this.$parent.size || this.$parent.vSize
    }
  },
  setup(props, { slots }) {
    return { slots }
  },
  render() {
    let { disabled, vSize, modelValue, label, name } = this
    let $slots = this.slots
    const disableClass = 'disabled'

    const labelContent = () => {
      let content = h(
        'span',
        { class: 'tiny-grid-radio__label', directives: isVue2 ? [{ name: 'AutoTip' }] : null },
        $slots.default()
      )
      if (!isVue2) {
        hooks.withDirectives(content, [[AutoTip]])
      }
      return content
    }

    return h(
      'label',
      {
        class: [
          'tiny-grid-radio',
          {
            [`size__${vSize}`]: vSize,
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
        $slots.default ? labelContent() : null
      ]
    )
  }
})
