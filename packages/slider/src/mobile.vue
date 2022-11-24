<template>
  <div style="position: relative">
    <div
      :class="[
        'tiny-mobile-slider',
        { 'tiny-mobile-slider__vertical': vertical, disabled: disabled }
      ]"
      :style="{ height: vertical ? height : '' }"
      @touchstart="bindMouseDown"
    >
      <div
        :class="[
          'tiny-mobile-slider__range',
          vertical ? 'tiny-mobile-slider__down' : 'tiny-mobile-slider__left'
        ]"
        :style="state.barStyle"
      ></div>
      <div
        class="tiny-mobile-slider__handle"
        tabindex="0"
        v-if="state.leftBtnShow"
        :style="state.leftBtnStyle"
        :class="{ 'handle-focus': state.activeIndex === 0 }"
        @mouseenter="displayTip"
        @mouseleave="hideTip"
        @keydown="bindKeyDown"
      ></div>
      <div
        class="tiny-mobile-slider__handle"
        tabindex="0"
        v-if="state.rightBtnShow"
        :style="state.rightBtnStyle"
        :class="{ 'handle-focus': state.activeIndex === 1 }"
        @mouseenter="displayTip"
        @mouseleave="hideTip"
        @keydown="bindKeyDown"
      ></div>
      <div
        class="tiny-mobile-slider__tips"
        v-show="showTip && state.showTip"
        :style="state.tipStyle"
      >
        {{ state.tipValue }}
      </div>
    </div>
    <template v-if="showInput && !state.isDouble">
      <div class="tiny-mobile-slider__input">
        <slot :slot-scope="state.activeValue">
          <input type="text" v-model="state.activeValue" :disabled="disabled" />
          <span class="tiny-mobile-slider__per">%</span>
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/slider/vue'
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/slider/index.css'

export default {
  emits: ['update:modelValue', 'change', 'start', 'stop'],
  props: [
    ...props,
    'modelValue',
    'disabled',
    'max',
    'min',
    'vertical',
    'step',
    'numPages',
    'showTip',
    'showInput',
    'height',
    'range',
    'formatTooltip'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
