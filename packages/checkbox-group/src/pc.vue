<template>
  <div
    class="tiny-checkbox-group"
    :class="vertical ? 'is-vertical' : ''"
    role="group"
    aria-label="checkbox-group"
  >
    <slot>
      <template v-if="type === 'checkbox'">
        <checkbox
          v-for="(item, index) in options"
          :key="index"
          v-bind="item"
        ></checkbox>
      </template>
      <template v-if="type === 'button'">
        <checkbox-button
          v-for="(item, index) in options"
          :key="index"
          v-bind="item"
        ></checkbox-button>
      </template>
    </slot>
  </div>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/checkbox-group/vue'
import { props, setup } from '@opentiny/vue-common'
import Checkbox from '@opentiny/vue-checkbox'
import CheckboxButton from '@opentiny/vue-checkbox-button'
import '@opentiny/vue-theme/checkbox-group/index.css'

export default {
  components: {
    Checkbox,
    CheckboxButton
  },
  inheritAttrs: false,
  props: [
    ...props,
    'modelValue',
    'type',
    'options',
    'disabled',
    'min',
    'max',
    'size',
    'fill',
    'textColor',
    'vertical'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
