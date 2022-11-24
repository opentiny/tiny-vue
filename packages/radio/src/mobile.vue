<template>
  <label
    class="tiny-mobile-radio"
    :class="[
      { 'is-disabled': state.isDisabled },
      { 'is-focus': state.focus },
      { 'is-bordered': border },
      { 'is-checked': state.model === label }
    ]"
    role="radio"
    :aria-checked="state.model === label"
    :aria-disabled="state.isDisabled"
    :tabindex="state.tabIndex"
    @keydown.space.stop.prevent="
      state.model = state.isDisabled ? state.model : label
    "
  >
    <div class="tiny-mobile-radio__input">
      <span class="tiny-mobile-radio__inner"></span>
      <input
        ref="radio"
        class="tiny-mobile-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="state.model"
        @focus="state.focus = true"
        @blur="state.focus = false"
        @change="handleChange"
        :name="name"
        :disabled="state.isDisabled"
        tabindex="-1"
      />
    </div>
    <span class="tiny-mobile-radio__label" @keydown.stop>
      <slot>{{ text || label }}</slot>
    </span>
  </label>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/radio/vue'
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/radio/index.css'

export default {
  emits: ['change'],
  props: [
    ...props,
    'modelValue',
    'events',
    'label',
    'text',
    'disabled',
    'name',
    'border',
    'size'
  ],
  inheritAttrs: false,
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
