<template>
  <label
    class="tiny-slider-button"
    ref="sliderButton"
    :class="[flex ? 'button-flex' : '', state.size === 'large' ? 'size-large' : '']"
    role="radio"
    :aria-checked="state.value === (label || text)"
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
    />
    <span
      class="tiny-slider-button-text"
      :class="[
        state.value !== (label || text)
          ? !state.disabled && 'tiny-slider-button-text-secondary'
          : !state.disabled && 'tiny-slider-button-text-icon-unselected-disabled',
        state.type === 'icon' ? 'tiny-slider-button-text-type-icon' : 'tiny-slider-button-text-normal',
        state.size === 'large'
          ? state.type === 'icon'
            ? 'tiny-slider-button-text-large-icon'
            : 'tiny-slider-button-text-large-normal-icon'
          : state.type !== 'icon' && 'tiny-slider-button-text-normal-large-normal-icon',
        state.size === 'medium'
          ? state.type === 'icon'
            ? 'tiny-slider-button-text-medium-icon'
            : 'text-sm h-7 leading-7'
          : '',
        state.type === 'icon' && state.value === (label || text)
          ? 'tiny-slider-button-text-icon-fill-brand'
          : 'tiny-slider-button-text-fill-brand',
        state.value === (label || text) && state.disabled
          ? state.type === 'icon'
            ? 'tiny-slider-button-text-icon-fill-brand-disabled'
            : 'tiny-slider-button-text-fill-brand-disabled'
          : '',
        state.value !== (label || text) && state.disabled
          ? state.type === 'icon'
            ? 'tiny-slider-button-text-normal-icon-fill-brand-disabled'
            : 'tiny-slider-button-text-normal-fill-brand-disabled'
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
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
