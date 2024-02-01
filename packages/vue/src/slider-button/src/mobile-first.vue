<template>
  <label
    data-tag="tiny-slider-button"
    ref="sliderButton"
    :class="[
      'inline-flex relative outline-0 cursor-pointer items-center',
      { 'hover:bg-color-fill-1 hover:rounded hover:shadow-sm': (state.value !== (label || text)) & !state.disabled },
      state.size === 'large' ? 'm-1' : 'm-0.5'
    ]"
    role="radio"
    :aria-checked="state.value === (label || text)"
    :tabindex="state.tabIndex"
  >
    <input
      class="opacity-0 outline-0 absolute -z-10"
      :value="label || text"
      type="radio"
      v-model="state.value"
      @change="handleChange"
      tabindex="-1"
      ref="sliderInput"
    />
    <span
      data-tag="tiny-slider-button-text"
      :class="
        m(
          'relative items-center text-center overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer box-border',
          state.value !== (label || text)
            ? !state.disabled && 'shadow-none text-color-text-secondary hover:text-color-text-primary'
            : !state.disabled && 'text-color-brand active:text-color-brand',
          state.type === 'icon'
            ? 'flex items-center justify-center w-6 h-6 p-1 [&_svg]:w-6 [&_svg]:h-6'
            : 'inline-block',
          state.size === 'large'
            ? state.type === 'icon'
              ? 'w-10 h-10 p-2'
              : 'h-10 px-4 min-w-[theme(spacing.12)] max-w-[theme(spacing.32)] text-sm leading-10'
            : state.type !== 'icon' && 'h-6 px-2 min-w-[theme(spacing.10)] max-w-[theme(spacing.28)] text-xs leading-6',
          { 'p-1 w-7 h-7 [&_svg]:w-4.5 [&_svg]:h-4.5': state.size === 'medium' && state.type === 'icon' },
          state.type === 'icon' && state.value === (label || text)
            ? 'fill-color-brand active:fill-color-brand'
            : 'fill-color-none-hover active:fill-color-none-hover hover:fill-color-icon-secondary',
          state.value === (label || text) && state.disabled
            ? state.type === 'icon'
              ? 'fill-color-brand-disabled cursor-not-allowed'
              : 'text-color-brand-disabled cursor-not-allowed'
            : '',
          state.value !== (label || text) && state.disabled
            ? state.type === 'icon'
              ? 'fill-color-icon-disabled cursor-not-allowed'
              : 'text-color-text-disabled cursor-not-allowed'
            : ''
        )
      "
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

export default defineComponent({
  emits: ['change'],
  props: [...props, 'label', 'events', 'text', 'size', 'disabled'],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
