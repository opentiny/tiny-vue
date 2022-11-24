<template>
  <label
    class="tiny-radio-button"
    :class="[
      state.size ? 'tiny-radio-button--' + state.size : '',
      { 'is-active': state.value === label },
      { 'is-disabled': state.isDisabled },
      { 'is-focus': state.focus }
    ]"
    role="radio"
    :aria-checked="state.value === label"
    :aria-disabled="state.isDisabled"
    :tabindex="state.tabIndex"
    @keydown.space.stop.prevent="
      state.value = state.isDisabled ? state.value : label
    "
  >
    <input
      ref="radio"
      class="tiny-radio-button__orig-radio"
      :value="label"
      type="radio"
      v-model="state.value"
      :name="name"
      @change="handleChange"
      :disabled="state.isDisabled"
      tabindex="-1"
      @focus="state.focus = true"
      @blur="state.focus = false"
    />
    <span
      class="tiny-radio-button__inner"
      :style="state.value === label ? state.activeStyle : null"
      @keydown.stop
    >
      <slot></slot>
      <template v-if="!slots.default">{{ text || label }}</template>
    </span>
  </label>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/radio-button/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  emits: ['change'],
  props: [...props, 'label', 'events', 'text', 'disabled', 'name'],
  inheritAttrs: false,
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
