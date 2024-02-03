<template>
  <li
    data-tag="tiny-dropdown-item"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    :class="
      m(
        'rounded-sm list-none leading-10 sm:leading-8 outline-0 min-w-[theme(spacing.18)] max-w-[theme(spacing.52)] w-full [&_svg]:sm:w-3.5 [&_svg]:sm:h-3.5 [&_svg]:sm:mr-1.5 [&_svg]:mr-2 [&_svg]:align-text-bottom',
        disabled
          ? 'cursor-not-allowed text-color-text-disabled [&_svg]:fill-color-text-disabled'
          : 'text-color-text-primary active:bg-color-bg-4 visited:text-color-brand hover:bg-color-bg-2 focus:bg-color-bg-4 cursor-pointer',
        {
          'text-color-brand-focus bg-color-fill-6': dataStore.checkedStatus && selected
        },
        dataStore.multiStage ? '!px-0 mb-1' : '[&:not(:last-of-type)]:mb-1'
      )
    "
    @click.stop="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <div
      data-tag="tiny-dropdown-level"
      ref="level"
      :class="[
        'sm:text-xs text-sm',
        level === '2'
          ? 'mx-6 overflow-hidden text-ellipsis whitespace-nowrap'
          : 'mx-4 sm:mx-3 overflow-hidden text-ellipsis whitespace-nowrap'
      ]"
    >
      <component v-if="icon" :is="icon" class="sm:w-3.5 sm:h-3.5 sm:mr-1.5 mr-2 align-text-bottom" />
      <slot></slot>
    </div>
  </li>
</template>

<script lang="ts">
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/dropdown-item/mf'

export default defineComponent({
  emits: ['update:modelValue', 'change', 'closed', 'open', 'opened', 'close', 'confirm', 'reset'],
  props: [...props, 'disabled', 'icon', 'itemData', 'selected', 'label', 'level', 'currentIndex'],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
