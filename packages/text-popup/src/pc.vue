<template>
  <div :style="{ width: state.width }" class="tiny-text-popup">
    <input
      v-show="state.type === 'input'"
      ref="text"
      :placeholder="placeholder"
      class="area text"
      @focus="onFocus"
    />
    <textarea
      v-show="state.type === 'textarea'"
      ref="popup"
      v-model="state.textAreaValue"
      :readonly="readonly"
      class="area popup"
      rows="5"
      @blur="onBlur"
      @input="onInput"
    >
    </textarea>
  </div>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/text-popup/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [
    ...props,
    'modelValue',
    'placeholder',
    'readonly',
    'width',
    'separtor'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
