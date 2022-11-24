<template>
  <label
    class="tiny-mobile-checkbox"
    :class="{
      'is-disabled': state.isDisabled,
      'is-checked': state.isChecked,
      'is-indeterminate': indeterminate,
      'is-focus': state.focus
    }"
    :id="id"
  >
    <span
      class="tiny-mobile-checkbox__input"
      :tabindex="indeterminate ? 0 : false"
      :role="indeterminate ? 'checkbox' : false"
      :aria-checked="indeterminate ? 'mixed' : false"
    >
      <span class="tiny-mobile-checkbox__inner"></span>
      <input
        v-if="trueLabel || falseLabel"
        class="tiny-mobile-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
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
        class="tiny-mobile-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :disabled="state.isDisabled"
        :value="label"
        :name="name"
        v-model="state.model"
        @change="handleChange"
        @focus="state.focus = true"
        @blur="state.focus = false"
      />
    </span>
    <span
      class="tiny-mobile-checkbox__label"
      v-if="(slots.default && slots.default()) || text || label"
    >
      <slot>{{ text || label }}</slot>
    </span>
  </label>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/checkbox/vue'
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/checkbox/index.css'

export default {
  inheritAttrs: false,
  props: [
    ...props,
    'modelValue',
    'text',
    'events',
    'label',
    'indeterminate',
    'disabled',
    'checked',
    'name',
    'trueLabel',
    'falseLabel',
    'id'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
