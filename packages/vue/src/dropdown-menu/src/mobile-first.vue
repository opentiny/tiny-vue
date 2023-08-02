<template>
  <tiny-tooltip
    ref="tooltip"
    effect="light"
    :content="state.label"
    placement="top-start"
    :manual="true"
    v-model="state.showContent"
  >
    <transition name="tiny-zoom-in-top" @after-leave="doDestroy">
      <ul
        :class="
          m(
            'my-2 sm:my-1 py-1 min-w-[4.5rem] max-w-[13.5rem] absoulte bg-color-bg-1',
            { 'py-1.5': state.size === 'medium' },
            { 'py-1.5': state.size === 'small' },
            { 'py-0.75': state.size === 'mini' },
            { 'shadow-sm sm:shadow-md': !multiStage },
            { 'overflow-x-hidden': maxHeight },
            multiStage ? '!block  rounded-none' : 'rounded',
            popperClass
          )
        "
        :style="`max-height:${maxHeight}px`"
        v-show="state.showPopper"
      >
        <slot :selected-index="state.selectedIndex"></slot>
      </ul>
    </transition>
  </tiny-tooltip>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/dropdown-menu/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Tooltip from '@opentiny/vue-tooltip'

export default defineComponent({
  props: [
    ...props,
    'visibleArrow',
    'arrowOffset',
    'placement',
    'popperClass',
    'popperAppendToBody',
    'checkedStatus',
    'multiStage',
    'maxHeight'
  ],
  emits: ['menu-item-click', 'created'],
  components: {
    TinyTooltip: Tooltip
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
