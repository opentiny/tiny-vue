<template>
  <div
    data-tag="tiny-carousel"
    class="relative overflow-hidden rounded"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <div
      data-tag="tiny-carousel-block"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      ref="carousel"
      class="relative overflow-hidden rounded"
      :style="state.style"
    >
      <button
        v-if="arrow !== 'never' && state.items.length > 1"
        v-show="(arrow === 'always' || state.hover) && (loop || state.activeIndex > 0)"
        type="button"
        class="absolute group border-none outline-0 p-0 m-0 h-8 w-8 cursor-pointer z-[3] rounded-full bg-color-bg-3 active:bg-color-bg-3 text-color-text-inverse text-center text-xs flex items-center justify-center hover:bg-color-text-primary"
        :class="[type === 'vertical' ? 'top-4 left-1/2' : 'left-4 top-1/2 -translate-y-4']"
        @mouseenter="handleButtonEnter('left')"
        @mouseleave="handleButtonLeave"
        @click.stop="throttledArrowClick(state.activeIndex - 1)"
      >
        <component
          class="w-4.5 h-4.5 opacity-50 fill-color-bg-2 group-active:fill-color-bg-2 group-hover:fill-color-bg-1"
          :is="type === 'vertical' ? 'icon-chevron-up' : 'icon-chevron-left'"
        />
      </button>
      <button
        v-if="arrow !== 'never' && state.items.length > 1"
        v-show="(arrow === 'always' || state.hover) && (loop || state.activeIndex < state.items.length - 1)"
        type="button"
        class="absolute group border-none outline-0 p-0 m-0 h-8 w-8 cursor-pointer z-[3] rounded-full bg-color-bg-3 active:bg-color-bg-3 text-color-text-inverse text-center text-xs flex items-center justify-center hover:bg-color-text-primary"
        :class="[type === 'vertical' ? 'top-auto left-1/2 bottom-4' : 'right-4 top-1/2 -translate-y-4']"
        @mouseenter="handleButtonEnter('right')"
        @mouseleave="handleButtonLeave"
        @click.stop="throttledArrowClick(state.activeIndex + 1)"
      >
        <component
          class="w-4.5 h-4.5 opacity-50 fill-color-bg-2 group-active:fill-color-bg-2 group-hover:fill-color-bg-1"
          :is="type === 'vertical' ? 'icon-chevron-down' : 'icon-chevron-right'"
        />
      </button>
      <slot></slot>
    </div>
    <ul
      data-tag="tiny-carousel-body"
      v-if="indicatorPosition !== 'none' && state.items.length > 1"
      :class="[
        'list-none m-0 py-0 px-1 z-[2] flex justify-center items-center',
        type === 'vertical' && indicatorPosition !== 'outside'
          ? 'flex-col left-4 bottom-0 transform-none w-1 h-full py-1 px-0'
          : 'w-full h-1 left-0 bottom-4',
        indicatorPosition === 'outside' ? 'static mt-2' : 'absolute',
        state.hasLabel ? 'left-0 right-0 text-center transform-none' : '',
        showTitle ? 'left-auto right-3 bottom-1 transform-none bg-transparent' : ''
      ]"
    >
      <li
        data-tag="tiny-carousel-list"
        v-for="(item, index) in state.items"
        :key="index"
        :class="[
          'group cursor-pointer',
          type === 'vertical'
            ? 'block h-auto mb-1.5 mx-0 p-0 first:pl-0 last:pr-0'
            : 'inline-block h-1 p-0 my-0 mr-1.5',
          state.hasLabel ? 'py-1.5 px-1' : ''
        ]"
        @mouseenter="throttledIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)"
      >
        <button
          type="button"
          :class="
            m([
              'block border-none outline-0 p-0 m-0 cursor-pointer rounded-sm',
              indicatorPosition === 'outside' || indicatorStyle === 'light'
                ? 'bg-color-bg-3 hover:bg-color-brand'
                : 'bg-color-bg-6 hover:bg-color-bg-5',
              state.hasLabel ? 'py-0.5 px-4.5 text-xs' : '',
              type === 'vertical' ? 'h-1 w-1' : 'w-1 h-1',
              index === state.activeIndex ? (type === 'vertical' ? 'h-4 w-1' : 'w-4 h-1') : '',
              index === state.activeIndex
                ? indicatorPosition === 'outside' || indicatorStyle === 'light'
                  ? 'bg-color-brand'
                  : 'bg-color-bg-1'
                : ''
            ])
          "
        >
          <span data-tag="tiny-carousel-label" v-if="state.hasLabel">{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/carousel/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconChevronLeft, IconChevronRight, IconChevronUp, IconChevronDown } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['change', 'complete'],
  props: [
    ...props,
    'initialIndex',
    'height',
    'trigger',
    'autoplay',
    'interval',
    'indicatorPosition',
    'indicatorStyle',
    'arrow',
    'type',
    'showTitle',
    'loop',
    'aspectRatio'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  },
  components: {
    IconChevronLeft: IconChevronLeft(),
    IconChevronRight: IconChevronRight(),
    IconChevronUp: IconChevronUp(),
    IconChevronDown: IconChevronDown()
  }
})
</script>
