<template>
  <div
    class="tiny-mobile-checkbox-group"
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
import '@opentiny/vue-theme-mobile/checkbox-group/index.css'

export default {
  inheritAttrs: false,
  components: {
    Checkbox
  },
  props: [
    ...props,
    'modelValue',
    'type',
    'options',
    'disabled',
    'vertical',
    'max',
    'min'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
