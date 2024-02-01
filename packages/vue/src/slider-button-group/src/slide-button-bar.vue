<template>
  <div class="items-center w-full flex" data-tag="tiny-slider-button-bar">
    <div
      :class="[
        'hidden flex-none h-12 items-center select-none cursor-pointer bg-color-bg-1',
        { 'sm:flex': sliderState.canLeftScroll || sliderState.canRightScroll }
      ]"
      @click="arrowLeftHandler"
    >
      <slot name="left-bar" data-tag="tiny-slider-button-bar-left">
        <div class="w-7 flex items-center justify-center h-full pr-2">
          <IconChevronLeft
            :class="['h-5 w-5', sliderState.canLeftScroll ? 'fill-color-icon-primary' : 'fill-color-text-disabled']"
          ></IconChevronLeft>
        </div>
      </slot>
    </div>
    <div
      ref="slideMain"
      :class="[
        'inline-flex rounded relative scrollbar-size-0 box-border flex-auto overflow-auto',
        size === 'large' ? 'h-auto' : size === 'medium' ? 'h-8' : 'h-7'
      ]"
    >
      <div
        :class="['absolute bg-color-bg-1 shadow h-6 rounded', size === 'large' ? 'top-1' : 'top-0.5']"
        :style="{
          'transition': 'left 0.5s',
          'left': sliderSpace + 'px',
          'width': sliderWidth + 'px',
          'height': sliderHeight + 'px'
        }"
      ></div>

      <div class="flex bg-color-bg-2 rounded-md">
        <div
          :ref="'block' + index"
          v-for="(node, index) in data"
          :key="index"
          :style="{ width: flex ? 100 / data.length + '%' : null }"
          @click="clickHandler(index)"
        >
          <slot
            data-tag="tiny-slider-button-bar-content"
            name="content"
            :slot-scoped="{
              node,
              index,
              show:
                index > sliderState.boundingIndex.left &&
                (sliderState.boundingIndex.right === -1 || index < sliderState.boundingIndex.right)
            }"
          ></slot>
        </div>
      </div>
    </div>
    <div
      :class="[
        'hidden flex-none h-12 cursor-pointer items-center select-none bg-color-bg-1',
        { 'sm:flex': sliderState.canLeftScroll || sliderState.canRightScroll }
      ]"
      @click="arrowRightHandler"
    >
      <slot name="right-bar" data-tag="tiny-slider-button-bar-right">
        <div class="w-7 h-full flex items-center justify-center pl-2">
          <IconChevronRight
            :class="['h-5 w-5', sliderState.canRightScroll ? 'fill-color-icon-primary' : 'fill-color-text-disabled']"
          ></IconChevronRight>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, setup, $props } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/slider-button-group/slide-button'
import { iconChevronLeft, iconChevronRight } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['click'],
  components: {
    IconChevronRight: iconChevronRight(),
    IconChevronLeft: iconChevronLeft()
  },
  props: {
    ...$props,
    noArrow: Boolean,
    flex: Boolean,
    size: String,
    sliderSpace: Number,
    sliderWidth: Number,
    delay: {
      type: Number,
      default: 5
    },
    sliderHeight: Number,
    data: Array,
    duration: {
      type: Number,
      default: 300
    },
    sliderCount: {
      type: Number,
      default: 0
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api })
  }
})
</script>
