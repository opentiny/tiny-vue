<template>
  <button
    data-tag="tiny-floating-button"
    @touchstart="handleClick"
    :class="
      m(
        'w-11 h-11 p-3 rounded-full fixed bottom-6 leading-none',
        position === 'center' ? '' : position === 'left' ? !state.specialHiddenSpace && 'left-3' : 'right-3',
        state.disabled
          ? 'text-color-text-disabled bg-color-bg-3 border-transparent active:cursor-not-allowed'
          : backgroundColor === 'white'
          ? 'bg-color-bg-1'
          : 'text-color-bg-1 bg-color-brand'
      )
    "
    :style="state.style"
  >
    <component
      :is="icon"
      :class="[
        'w-5 h-5',
        state.disabled
          ? 'fill-color-icon-disabled active:cursor-not-allowed'
          : backgroundColor === 'white'
          ? 'fill-color-icon-secondary'
          : 'fill-color-bg-1'
      ]"
    />
  </button>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/floating-button/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconPlus } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['touchstart'],
  props: [...props, 'position', 'backgroundColor', 'icon', 'resetTime', 'animated'],
  components: { IconPlus: IconPlus() },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api })
  }
})
</script>
