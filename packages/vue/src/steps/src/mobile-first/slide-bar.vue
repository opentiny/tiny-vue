<template>
  <div data-tag="tiny-steps-slide-bar" class="w-full flex">
    <div
      ref="leftButton"
      data-tag="left-button"
      :class="[
        'hidden flex-none h-8 cursor-pointer items-center select-none',
        { 'sm:flex': slideBarState.canLeftScroll || slideBarState.canRightScroll }
      ]"
      @click="leftSlideHandler"
    >
      <slot name="left-button" :show="slideBarState.canLeftScroll" :index="slideBarState.boundingIndex.left">
        <div class="w-4 h-full flex items-center justify-center mr-1.5 bg-color-bg-2">
          <IconChevronLeft class="h-3 w-3"></IconChevronLeft>
        </div>
      </slot>
    </div>
    <div ref="slideMain" data-tag="slide-main" class="flex-auto overflow-auto scrollbar-size-0">
      <div class="flex">
        <div
          :ref="'block' + index"
          v-for="(node, index) in data"
          :key="index"
          :style="{ width: flex ? 100 / data.length + '%' : null }"
        >
          <slot
            name="block"
            :slot-scoped="{
              node,
              index,
              show:
                index > slideBarState.boundingIndex.left &&
                (slideBarState.boundingIndex.right === -1 || index < slideBarState.boundingIndex.right)
            }"
            >{{ index }}</slot
          >
          <slot name="block-bottom" :node="node" :index="index"></slot>
        </div>
      </div>
    </div>
    <div
      ref="rightButton"
      data-tag="right-button"
      :class="[
        'hidden flex-none h-8 cursor-pointer items-center select-none',
        { 'sm:flex': slideBarState.canLeftScroll || slideBarState.canRightScroll }
      ]"
      @click="rightSlideHandler"
    >
      <slot name="right-button" :show="slideBarState.canRightScroll" :index="slideBarState.boundingIndex.right">
        <div class="w-4 h-full flex items-center justify-center ml-1.5 bg-color-bg-2">
          <IconChevronRight class="h-3 w-3"></IconChevronRight>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/steps/slide-bar'
import { defineComponent, setup, $props } from '@opentiny/vue-common'
import { IconChevronLeft, IconChevronRight } from '@opentiny/vue-icon'

const mode = { tiny_mode: 'mobile-first' }

export default defineComponent({
  emits: ['click'],
  components: {
    IconChevronLeft: IconChevronLeft(mode),
    IconChevronRight: IconChevronRight(mode)
  },
  props: {
    ...$props,
    data: Array,
    duration: {
      type: Number,
      default: 300
    },
    delay: {
      type: Number,
      default: 5
    },
    noArrow: Boolean,
    flex: Boolean
  },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api })
  }
})
</script>
