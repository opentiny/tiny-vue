<template>
  <li
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    :class="[
      'list-none leading-10 sm:leading-8 m-0 cursor-pointer outline-0 min-w-[4.5rem] max-w-[13.5rem] w-full [&_svg]:sm:w-3.5 [&_svg]:sm:h-3.5 [&_svg]:sm:mr-1.5 [&_svg]:mr-2 [&_svg]:align-text-bottom',
      {
        'text-color-text-primary active:bg-color-bg-4 visited:text-color-brand hover:bg-color-bg-4 focus:bg-color-bg-4':
          !disabled
      },
      { 'cursor-not-allowed text-color-text-disabled [&_svg]:fill-color-text-disabled': disabled },
      {
        'text-color-brand-focus': dataStore.checkedStatus && selected
      },
      { '!px-0 sm:!px-0': dataStore.multiStage }
    ]"
    @click.stop="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <div
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
  props: [...props, 'disabled', 'icon', 'itemData', 'selected', 'label', 'level', 'currentIndex'],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
