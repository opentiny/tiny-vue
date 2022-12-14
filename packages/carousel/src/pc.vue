<template>
  <div
    @mouseenter.stop="handleMouseEnter"
    :class="['tiny-carousel', { 'tiny-carousel--card': type === 'card' }]"
    @mouseleave.stop="handleMouseLeave"
  >
    <div :style="{ height: height }" class="tiny-carousel__container">
      <transition name="tiny-transition-carousel-arrow-left">
        <button
          v-if="arrow !== 'never'"
          v-show="
            (arrow === 'always' || state.hover) &&
            (loop || state.activeIndex > 0)
          "
          type="button"
          class="tiny-carousel__arrow tiny-carousel__arrow-left"
          @mouseenter="handleButtonEnter('left')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(state.activeIndex - 1)"
        >
          <component class="tiny-svg-size" :is="'icon-chevron-left'" />
        </button>
      </transition>
      <transition name="tiny-transition-carousel-arrow-right">
        <button
          v-if="arrow !== 'never'"
          v-show="
            (arrow === 'always' || state.hover) &&
            (loop || state.activeIndex < state.items.length - 1)
          "
          type="button"
          class="tiny-carousel__arrow tiny-carousel__arrow-right"
          @mouseenter="handleButtonEnter('right')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(state.activeIndex + 1)"
        >
          <component class="tiny-svg-size" :is="'icon-chevron-right'" />
        </button>
      </transition>
      <slot></slot>
    </div>
    <ul
      :class="{
        'tiny-carousel__indicators-vertical': type === 'vertical',
        'tiny-carousel__indicators-title': showTitle,
        'tiny-carousel__indicators-labels': state.hasLabel,
        'tiny-carousel__indicators-outside':
          indicatorPosition === 'outside' || type === 'card'
      }"
      v-if="indicatorPosition !== 'none'"
      class="tiny-carousel__indicators"
    >
      <li
        v-for="(item, index) in state.items"
        :key="index"
        :class="[
          'tiny-carousel__indicator',
          { 'is-active': index === state.activeIndex }
        ]"
        @mouseenter="throttledIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)"
      >
        <button type="button" class="tiny-carousel__button">
          <span v-if="state.hasLabel">{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/carousel/vue'
import { props, setup } from '@opentiny/vue-common'
import { iconChevronLeft,iconChevronRight } from '@opentiny/vue-icon'

export default {
  props: [
    ...props,
    'initialIndex',
    'height',
    'trigger',
    'autoplay',
    'interval',
    'indicatorPosition',
    'arrow',
    'type',
    'showTitle',
    'loop'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  },
  components: {
    IconChevronLeft: iconChevronLeft(),
    IconChevronRight: iconChevronRight()
  }
}
</script>
