<template>
  <label
    class="tiny-checkbox-button"
    :class="[
      state.size ? 'tiny-checkbox-button--' + state.size : '',
      { 'is-disabled': state.isDisabled },
      { 'is-checked': state.isChecked },
      { 'is-focus': state.focus }
    ]"
    role="checkbox"
    :aria-checked="state.isChecked"
    :aria-disabled="state.isDisabled"
  >
    <input
      v-if="trueLabel || falseLabel"
      class="tiny-checkbox-button__original"
      type="checkbox"
      :name="name"
      :disabled="state.isDisabled"
      :true-value="trueLabel"
      :false-value="falseLabel"
      v-model="state.model"
      @change="handleChange"
      @focus="state.focus = true"
      @blur="state.focus = false"
    />
    <input
      v-else
      class="tiny-checkbox-button__original"
      type="checkbox"
      :name="name"
      :disabled="state.isDisabled"
      :value="label"
      v-model="state.model"
      @change="handleChange"
      @focus="state.focus = true"
      @blur="state.focus = false"
    />

    <span
      class="tiny-checkbox-button__inner"
      v-if="slots.default || text || label"
      :style="state.isChecked ? state.activeStyle : null"
    >
      <slot>{{ text || label }}</slot>
    </span>
  </label>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/checkbox-button/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  inheritAttrs: false,
  props: [
    ...props,
    'modelValue',
    'label',
    'text',
    'events',
    'disabled',
    'checked',
    'name',
    'trueLabel',
    'falseLabel'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
