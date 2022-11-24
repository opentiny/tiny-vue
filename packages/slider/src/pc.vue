<template>
  <div style="position: relative">
    <div
      :class="[
        'tiny-slider',
        { 'tiny-slider__vertical': vertical, disabled: state.disabled }
      ]"
      :style="{ height: vertical ? height : '' }"
      @mousedown="bindMouseDown"
    >
      <transition
        appear
        appear-class="custom-appear-class"
        @before-appear="customBeforeAppearHook"
        @appear="customAppearHook"
        @after-appear="customAfterAppearHook"
      >
        <div
          :class="[
            'tiny-slider__range',
            vertical ? 'tiny-slider__down' : 'tiny-slider__left'
          ]"
          :style="state.barStyle"
        ></div>
      </transition>
      <div
        class="tiny-slider__handle"
        tabindex="0"
        v-if="state.leftBtnShow"
        :style="state.leftBtnStyle"
        :class="{ 'handle-focus': state.activeIndex === 0 }"
        @mouseenter="displayTip"
        @mouseleave="hideTip"
        @keydown="bindKeyDown"
      ></div>
      <div
        class="tiny-slider__handle"
        tabindex="0"
        v-if="state.rightBtnShow"
        :style="state.rightBtnStyle"
        :class="{ 'handle-focus': state.activeIndex === 1 }"
        @mouseenter="displayTip"
        @mouseleave="hideTip"
        @keydown="bindKeyDown"
      ></div>
      <div
        class="tiny-slider__tips"
        v-show="showTip && state.showTip"
        :style="state.tipStyle"
      >
        {{ state.tipValue }}
      </div>
    </div>
    <template v-if="showInput && !state.isDouble">
      <div class="tiny-slider__input">
        <slot :slot-scope="state.activeValue">
          <input
            type="text"
            v-model="state.activeValue"
            :disabled="state.disabled"
          /><span>%</span>
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/slider/vue'
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme/slider/index.css'

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
