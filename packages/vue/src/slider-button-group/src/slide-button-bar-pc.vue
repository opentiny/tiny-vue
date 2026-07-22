<template>
  <div class="tiny-slider-button-bar">
    <div
      class="tiny-slider-button-bar-box"
      :class="sliderState.canLeftScroll || sliderState.canRightScroll ? 'tiny-slider-button-bar-box-flex' : ''"
      @click="arrowLeftHandler"
    >
      <slot name="left-bar" class="tiny-slider-button-bar-left">
        <div class="tiny-slider-button-bar-left-box">
          <IconChevronLeft
            class="tiny-slider-button-bar-left-icon"
            :class="
              sliderState.canLeftScroll
                ? 'tiny-slider-button-bar-left-icon-primary'
                : 'tiny-slider-button-bar-left-text-disabled'
            "
          ></IconChevronLeft>
        </div>
      </slot>
    </div>
    <div
      ref="slideMain"
      class="tiny-slider-button-bar-slidemain"
      :class="
        size === 'large'
          ? 'tiny-slider-button-bar-slidemain-large'
          : size === 'medium'
            ? 'tiny-slider-button-bar-slidemain-medium'
            : ''
      "
    >
      <div
        class="tiny-slider-button-bar-slidemain-box"
        :class="size === 'large' ? 'tiny-slider-button-bar-slidemain-box-top' : ''"
        :style="{
          'transition': 'left 0.5s',
          'left': sliderSpace + 'px',
          'width': sliderWidth + 'px',
          'height': sliderHeight + 'px'
        }"
      ></div>

      <div class="tiny-slider-button-bar-slidemain-flex">
        <div
          :ref="'block' + index"
          v-for="(node, index) in data"
          :key="index"
          :style="{ width: flex ? 100 / data.length + '%' : null }"
          @click="clickHandler(index)"
        >
          <slot
            class="tiny-slider-button-bar-content"
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
      class="tiny-slider-button-bar-right"
      :class="sliderState.canLeftScroll || sliderState.canRightScroll ? 'tiny-slider-button-bar-right-flex' : ''"
      @click="arrowRightHandler"
    >
      <slot name="right-bar" class="tiny-slider-button-bar-right-slot">
        <div class="tiny-slider-button-bar-right-slot-box">
          <IconChevronRight
            :class="
              sliderState.canRightScroll
                ? 'tiny-slider-button-bar-right-slot-icon-primary'
                : 'tiny-slider-button-bar-right-slot-text-disabled'
            "
          ></IconChevronRight>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, setup, $props } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/slider-button-group/slide-button'
import { IconChevronLeft, IconChevronRight } from '@opentiny/vue-icon'

export default defineComponent({
  name: 'TinySliderButtonBar',
  emits: ['click'],
  components: {
    IconChevronRight: IconChevronRight(),
    IconChevronLeft: IconChevronLeft()
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
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
