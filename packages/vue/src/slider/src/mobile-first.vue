<template>
  <div data-tag="tiny-slider" class="relative flex h-auto flex-row w-full">
    <div data-tag="tiny-slider-left" class="self-center mr-2 block sm:hidden text-sm">
      <slot name="left">
        {{ min }}
      </slot>
    </div>
    <div
      ref="slider"
      role="tiny-slider"
      class="relative w-full h-1 flex-1 my-4 mx-0 bg-color-none-disabled"
      :class="[state.disabled ? 'cursor-default' : 'cursor-pointe']"
      @touchstart="bindMouseDown"
      @mousedown="bindMouseDown"
    >
      <div
        data-tag="tiny-slider-range"
        role="tiny-slider__range"
        class="absolute rounded left-0 -bottom-px h-1"
        :class="[state.disabled ? 'bg-color-none' : 'bg-color-brand']"
        :style="state.barStyle"
      ></div>
      <div
        data-tag="tiny-slider-handle"
        role="tiny-slider__handle"
        tabindex="0"
        v-if="state.leftBtnShow"
        class="absolute w-6 h-6 sm:w-5 sm:h-5 box-border shadow-xsm rounded-full bg-color-bg-1 -translate-x-2.5 -translate-y-1/2 left-0 top-0.5"
        :class="[
          state.disabled
            ? 'border-color-none-hover cursor-not-allowed'
            : 'cursor-grab hover:border-color-brand-hover hover:border-solid hover:border-2 active:border-2 active:border-solid active:border-color-brand-active',
          state.activeIndex === 0 ? 'z-20' : 'z-10'
        ]"
        :style="state.leftBtnStyle"
        @mouseenter="displayTip"
        @mouseleave="hideTip"
        @touchstart="displayTip"
        @touchend="hideTip"
        @keydown="bindKeyDown"
      ></div>
      <div
        data-tag="tiny-slider-handle"
        role="tiny-slider__handle"
        tabindex="0"
        v-if="state.rightBtnShow"
        class="absolute w-6 h-6 sm:w-5 sm:h-5 box-border shadow-xsm rounded-full bg-color-bg-1 -translate-x-2.5 -translate-y-1/2 left-0 top-0.5"
        :class="[
          state.disabled
            ? 'border-color-none-hover cursor-not-allowed'
            : 'cursor-grab hover:border-color-brand-hover hover:border-solid hover:border-2 active:border-2 active:border-solid active:border-color-brand-active',
          state.activeIndex === 1 ? 'z-20' : 'z-10'
        ]"
        :style="state.rightBtnStyle"
        @mouseenter="displayTip"
        @mouseleave="hideTip"
        @touchstart="displayTip"
        @touchend="hideTip"
        @keydown="bindKeyDown"
      ></div>
      <div
        ref="sliderTip"
        data-tag="tiny-slider-showtips"
        v-show="showTip && state.showTip"
        :class="[
          'absolute bottom-6 px-4 py-1.5 bg-color-bg-1 shadow-lg rounded select-none z-10 whitespace-nowrap text-sm sm:text-xs',
          'after:content-[\'\'] after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:w-0 after:h-2',
          'after:border-t-8 after:border-r-8 after:border-l-8 after:border-t-color-bg-1 after:border-x-transparent'
        ]"
        :style="state.tipStyle"
      >
        {{ state.tipValue }}
      </div>
      <div data-tag="tiny-slider-showsteps" v-if="showSteps">
        <div
          data-tag="tiny-slider-points"
          class="w-0.5 h-0.5 rounded-full sm:rounded absolute sm:h-1 bottom-1.5 sm:bottom-1"
          :class="[
            p.value >= Math.min(state.rightBtnValue, state.leftBtnValue) &&
            p.value <= Math.max(state.rightBtnValue, state.leftBtnValue)
              ? 'bg-color-brand'
              : 'bg-color-bg-3',
            state.disabled ? 'bg-color-border-disabled' : ''
          ]"
          v-for="(p, i) in state.points"
          :key="p.position + i"
          :style="{ 'left': p.position }"
        ></div>
      </div>
      <div data-tag="tiny-slider-label" v-if="showLabel" class="hidden sm:block w-full h-4 mt-4">
        <div
          class="absolute -translate-x-1/2 first:translate-x-0 last:-translate-x-full"
          :class="[state.disabled ? 'text-color-text-disabled' : 'text-color-text-primary']"
          v-for="(p, i) in state.labels"
          :key="p.position + i"
          :style="{ 'left': p.position, 'max-width': `calc( ${max / step}% - 20px )` }"
        >
          {{ p.label }}
        </div>
      </div>
    </div>
    <div data-tag="tiny-slider-right" class="self-center ml-2 block text-sm sm:hidden">
      <slot name="right">
        {{ max }}
      </slot>
    </div>
    <template data-tag="tiny-slider-showinput" v-if="showInput">
      <div
        data-tag="tiny-slider-isdouble"
        v-if="state.isDouble"
        class="relative flex justify-between items-center ml-5"
      >
        <slot :slot-scope="state.inputValue">
          <input
            type="text"
            v-model="state.inputValue[0]"
            :disabled="state.disabled"
            @change="inputValueChange($event, 'left')"
            class="h-8 w-12 outline-0 px-2 py-0 text-center border border-color-bg-3 hover:border-color-border-hover focus:border-color-brand-focus disabled:border-color-border rounded"
          />
          <div
            class="h-px w-4 mx-2 my-0"
            :class="[state.disabled ? 'bg-color-border-disabled' : 'bg-color-text-primary']"
          ></div>
          <input
            type="text"
            v-model="state.inputValue[1]"
            :disabled="state.disabled"
            @change="inputValueChange($event, 'right')"
            class="h-8 w-12 outline-0 px-2 py-0 text-center border border-color-bg-3 hover:border-color-border-hover focus:border-color-brand-focus disabled:border-color-border rounded"
          />
          <span class="ml-2">{{ unit }}</span>
        </slot>
      </div>
      <div data-tag="tiny-slider-active-value" v-else class="ml-5 self-center">
        <slot :slot-scope="state.activeValue">
          <input
            type="text"
            v-model="state.activeValue"
            class="h-8 w-12 outline-0 px-2 py-0 text-center border border-color-bg-3 hover:border-color-border-hover focus:border-color-brand-focus disabled:border-color-border rounded"
            :disabled="state.disabled"
          /><span class="ml-2">{{ unit }}</span>
        </slot>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/slider/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import type { ISliderApi } from '@opentiny/vue-renderless/types/slider.type'

export default defineComponent({
  emits: ['update:modelValue', 'change', 'start', 'stop'],
  props: [
    ...props,
    'modelValue',
    'disabled',
    'max',
    'min',
    'step',
    'numPages',
    'showTip',
    'showInput',
    'height',
    'range',
    'formatTooltip',
    'showSteps',
    'showLabel',
    'formatLabel',
    'vertical',
    'unit'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ISliderApi
  }
})
</script>
