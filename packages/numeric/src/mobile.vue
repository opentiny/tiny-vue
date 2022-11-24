<template>
  <div
    @dragstart.prevent
    :class="[
      'tiny-mobile-numeric',
      state.inputSize ? 'tiny-mobile-numeric--' + state.inputSize : '',
      { 'is-disabled': state.inputDisabled },
      { 'is-without-controls': !controls },
      { 'is-controls-right': state.controlsAtRight },
      { 'is-round': theme === 'round' }
    ]"
    @mousewheel.passive="mouseEvent"
  >
    <span
      class="tiny-mobile-numeric__decrease"
      role="button"
      v-if="controls"
      v-repeat-click="decrease"
      :class="{ 'is-disabled': state.minDisabled }"
      @keydown.enter="decrease"
    >
      <component
        :is="state.controlsAtRight ? 'icon-chevron-down' : 'icon-minus'"
      />
    </span>
    <span
      class="tiny-mobile-numeric__increase"
      role="button"
      v-if="controls"
      v-repeat-click="increase"
      :class="{ 'is-disabled': state.maxDisabled }"
      @keydown.enter="increase"
    >
      <component
        :is="state.controlsAtRight ? 'icon-chevron-up' : 'icon-plus'"
      />
    </span>
    <div
      :class="[
        'tiny-mobile-numeric__input',
        state.inputSize ? `tiny-input-${state.inputSize}` : '',
        state.inputDisabled ? 'is-disabled' : ''
      ]"
    >
      <input
        class="tiny-mobile-numeric__input-inner"
        ref="input"
        :value="state.displayValue"
        :placeholder="placeholder"
        :max="max"
        :min="min"
        :name="name"
        :aria-label="label"
        @keydown.up.prevent="increase"
        @keydown.down.prevent="decrease"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
        @change="handleInputChange"
      />
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/numeric/vue'
import { props, setup, directive } from '@opentiny/vue-common'
import bind from '@opentiny/vue-renderless/common/deps/repeat-click'
import {
  iconChevronDown,
  iconChevronUp,
  iconMinus,
  iconPlus
} from '@opentiny/vue-icon'
import '@opentiny/vue-theme-mobile/numeric/index.css'

export default {
  directives: directive({
    repeatClick: { bind }
  }),
  components: {
    IconChevronDown: iconChevronDown(),
    IconChevronUp: iconChevronUp(),
    IconMinus: iconMinus(),
    IconPlus: iconPlus()
  },
  props: [
    ...props,
    'step',
    'stepStrictly',
    'max',
    'min',
    'modelValue',
    'disabled',
    'size',
    'controls',
    'controlsPosition',
    'name',
    'label',
    'placeholder',
    'precision',
    'circulate',
    'theme'
  ],
  emits: ['update:modelValue', 'change', 'blur', 'focus'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
