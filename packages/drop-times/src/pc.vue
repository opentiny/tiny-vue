<template>
  <tiny-select
    :tabindex="tabindex"
    :size="size"
    v-model="state.selectedValue"
    :placeholder="placeholder"
    @change="change"
    :popper-class="'tiny-drop-times' + (popperClass ? ' ' + popperClass : '')"
    :popper-append-to-body="popperAppendToBody"
    v-bind="a($attrs, ['^on[A-Z]'])"
    @clear="$emit('clear')"
    @visible-change="$emit('visible-change', $event)"
  >
    <tiny-option
      v-for="(item, index) in state.options"
      :key="index"
      :label="item.label"
      :value="item.value"
    >
    </tiny-option>
  </tiny-select>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/drop-times/vue'
import { props, setup } from '@opentiny/vue-common'
import Select from '@opentiny/vue-select'
import Option from '@opentiny/vue-option'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  props: [
    ...props,
    'size',
    'tabindex',
    'modelValue',
    'placeholder',
    'start',
    'end',
    'step',
    'popperClass',
    'popperAppendToBody'
  ],
  emits: ['change', 'update:modelValue', 'clear', 'visible-change'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
