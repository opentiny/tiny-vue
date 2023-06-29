<template>
  <div class="relative flex h-auto flex-row w-full">
    <div class="self-center mr-2 block sm:hidden text-sm">
      <slot name="left">
        {{ min }}
      </slot>
    </div>
    <div
      ref="slider"
      role="tiny-slider"
      class="tiny-mobile-slider relative bg-color-bg-3 w-full h-0.5 flex-1 my-4 mx-0"
      :class="[disabled ? 'cursor-default' : 'cursor-pointer']"
      @touchstart="bindMouseDown"
      @mousedown="bindMouseDown"
    >
      <div
        role="tiny-slider__range"
        class="tiny-mobile-slider__range absolute rounded left-0 -bottom-px h-1"
        :class="[disabled ? 'bg-color-none-hover' : 'bg-color-brand']"
        :style="state.barStyle"
      ></div>
      <div
        role="tiny-slider__handle"
        tabindex="0"
        v-if="state.leftBtnShow"
        class="tiny-mobile-slider__handle absolute w-6 h-6 sm:w-5 sm:h-5 box-border border-0 sm:border-2 shadow-md sm:shadow-none rounded-full bg-color-bg-1 -translate-x-2.5 -bottom-[0.5625rem] left-0"
        :class="[
          disabled
            ? 'border-color-none-hover cursor-not-allowed'
            : 'cursor-grab border-color-brand hover:border-color-brand-hover',
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
        role="tiny-slider__handle"
        tabindex="0"
        v-if="state.rightBtnShow"
        class="tiny-mobile-slider__handle absolute w-6 h-6 sm:w-5 sm:h-5 box-border border-0 sm:border-2 shadow-md sm:shadow-none rounded-full bg-color-bg-1 -translate-x-2.5 -bottom-[0.5625rem] left-0"
        :class="[
          disabled
            ? 'border-color-none-hover cursor-not-allowed'
            : 'cursor-grab border-color-brand hover:border-color-brand-hover',
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
        v-show="showTip && state.showTip"
        :class="[
          'absolute -top-[3.25rem] px-4 py-1.5 bg-white drop-shadow-lg rounded select-none z-10 whitespace-nowrap text-sm sm:text-xs',
          'after:content-[\'\'] after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:w-0 after:h-2',
          'after:border-t-8 after:border-r-8 after:border-l-8 after:border-t-white after:border-x-transparent'
        ]"
        :style="state.tipStyle"
      >
        {{ state.tipValue }}
      </div>
      <div v-if="showSteps">
        <div
          class="w-0.5 h-0.5 rounded-full sm:rounded absolute sm:h-1 bottom-1.5 sm:bottom-1"
          :class="[
            p.value >= Math.min(state.rightBtnValue, state.leftBtnValue) &&
            p.value <= Math.max(state.rightBtnValue, state.leftBtnValue)
              ? 'bg-color-brand'
              : 'bg-color-bg-3',
            disabled ? 'bg-color-border-disabled' : ''
          ]"
          v-for="(p, i) in state.points"
          :key="p.position + i"
          :style="{ 'left': p.position }"
        ></div>
      </div>
      <div v-if="showLabel" class="hidden sm:block w-full h-4 mt-4">
        <div
          class="absolute -translate-x-1/2 first:translate-x-0 last:-translate-x-full"
          :class="[disabled ? 'text-color-text-disabled' : 'text-color-text-primary']"
          v-for="(p, i) in state.labels"
          :key="p.position + i"
          :style="{ 'left': p.position, 'max-width': `calc( ${max / step}% - 20px )` }"
        >
          {{ p.label }}
        </div>
      </div>
    </div>
    <div class="self-center ml-2 block text-sm sm:hidden">
      <slot name="right">
        {{ max }}
      </slot>
    </div>
    <template v-if="showInput">
      <div v-if="state.isDouble" class="relative flex justify-between items-center ml-5">
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
            :class="[disabled ? 'bg-color-border-disabled' : 'bg-color-text-primary']"
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
      <div v-else class="ml-5 self-center">
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
    return setup({ props, context, renderless, api })
  }
})
</script>
