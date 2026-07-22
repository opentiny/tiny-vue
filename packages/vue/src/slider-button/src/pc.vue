<template>
  <label
    class="tiny-slider-button"
    ref="sliderButton"
    :class="[flex ? 'tiny-slider-button--flex' : '', state.size === 'large' ? 'tiny-slider-button--large' : '']"
    role="radio"
    :aria-checked="state.value === (label || text)"
    :aria-disabled="state.disabled"
    :tabindex="state.tabIndex"
  >
    <input
      class="tiny-slider-button__input"
      :value="label || text"
      type="radio"
      v-model="state.value"
      @change="handleChange"
      tabindex="-1"
      ref="sliderInput"
      :disabled="state.disabled"
    />
    <span
      class="tiny-slider-button__text"
      :class="[
        state.value !== (label || text)
          ? !state.disabled && 'tiny-slider-button__text--secondary'
          : !state.disabled && 'tiny-slider-button__text--selected',
        state.type === 'icon' ? 'tiny-slider-button__text--type-icon' : 'tiny-slider-button__text--normal',
        state.size === 'large'
          ? state.type === 'icon'
            ? 'tiny-slider-button__text--large-icon'
            : 'tiny-slider-button__text--large-normal-icon'
          : state.type !== 'icon' && 'tiny-slider-button__text--normal-large-normal-icon',
        state.size === 'medium'
          ? state.type === 'icon'
            ? 'tiny-slider-button__text--medium-icon'
            : 'text-sm h-7 leading-7'
          : '',
        state.type === 'icon' && state.value === (label || text)
          ? 'tiny-slider-button__text--icon-fill-brand'
          : 'tiny-slider-button__text--fill-brand',
        state.value === (label || text) && state.disabled
          ? state.type === 'icon'
            ? 'tiny-slider-button__text--icon-fill-brand-disabled'
            : 'tiny-slider-button__text--fill-brand-disabled'
          : '',
        state.value !== (label || text) && state.disabled
          ? state.type === 'icon'
            ? 'tiny-slider-button__text--normal-icon-fill-brand-disabled'
            : 'tiny-slider-button__text--normal-fill-brand-disabled'
          : ''
      ]"
      @keydown.stop
    >
      <slot></slot>
      <template v-if="!slots.default">{{ text || label }} </template>
    </span>
  </label>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/slider-button/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/slider-button/index.less'

export default defineComponent({
  props: [...props, 'label', 'events', 'text', 'disabled', 'flex'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
