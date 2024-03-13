<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <div class="tiny-slider-container" :class="[!vertical && 'tiny-slider-container__horizontal']">
    <div
      ref="slider"
      role="tiny-slider"
      :class="[
        'tiny-slider',
        { 'tiny-slider__vertical': vertical, disabled: state.disabled },
        !showInput || state.isDouble ? (state.showAutoWidth ? 'show-auto-width' : '') : ''
      ]"
      :style="{ height: vertical ? height : '' }"
      @mousedown="bindMouseDown"
    >
      <transition
        appear
        appear-class="custom-appear-class"
        @before-appear="customBeforeAppearHook"
        @after-appear="customAfterAppearHook"
      >
        <div
          :class="['tiny-slider__range', vertical ? 'tiny-slider__down' : 'tiny-slider__left']"
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
      >
        <svg viewBox="0 0 1024 1024" class="tiny-slider-left-svg">
          <path
            class="tiny-slider-left-svg"
            d="M278.863 867.255c0 29.47 24.686 53.36 55.138 53.36s55.138-23.89 55.138-53.36v-838.511c0-29.47-24.686-53.36-55.138-53.36s-55.138 23.89-55.138 53.36v838.511zM3.17 791.027c0 29.47 24.686 53.36 55.138 53.36s55.138-23.89 55.138-53.36v-686.055c0-29.47-24.686-53.36-55.138-53.36s-55.138 23.89-55.138 53.36v686.055zM554.555 791.027c0 29.47 24.686 53.36 55.138 53.36s55.138-23.89 55.138-53.36v-686.055c0-29.47-24.686-53.36-55.138-53.36s-55.138 23.89-55.138 53.36v686.055z"
          ></path>
        </svg>
      </div>
      <div
        class="tiny-slider__handle"
        tabindex="0"
        v-if="state.rightBtnShow"
        :style="state.rightBtnStyle"
        :class="{ 'handle-focus': state.activeIndex === 1 }"
        @mouseenter="displayTip"
        @mouseleave="hideTip"
        @keydown="bindKeyDown"
      >
        <svg viewBox="0 0 1024 1024" class="tiny-slider-right-svg">
          <path
            class="tiny-slider-right-svg"
            d="M278.863 867.255c0 29.47 24.686 53.36 55.138 53.36s55.138-23.89 55.138-53.36v-838.511c0-29.47-24.686-53.36-55.138-53.36s-55.138 23.89-55.138 53.36v838.511zM3.17 791.027c0 29.47 24.686 53.36 55.138 53.36s55.138-23.89 55.138-53.36v-686.055c0-29.47-24.686-53.36-55.138-53.36s-55.138 23.89-55.138 53.36v686.055zM554.555 791.027c0 29.47 24.686 53.36 55.138 53.36s55.138-23.89 55.138-53.36v-686.055c0-29.47-24.686-53.36-55.138-53.36s-55.138 23.89-55.138 53.36v686.055z"
          ></path>
        </svg>
      </div>
      <div ref="sliderTip" class="tiny-slider__tips" v-show="showTip && state.showTip" :style="state.tipStyle">
        {{ state.tipValue }}
      </div>
      <div v-if="state.markList">
        <template v-for="mark in state.markList" :key="mark.value">
          <div class="tiny-slider__mark-point" :style="mark.positionStyle"></div>
          <div class="tiny-slider__mark-label" :style="mark.positionStyle">{{ mark.label }}</div>
        </template>
      </div>
    </div>
    <template v-if="showInput">
      <div class="tiny-slider__input">
        <slot :slot-scope="state.slotValue">
          <input
            v-if="!state.isDouble"
            type="text"
            :value="state.slotValue"
            @focus="handleSlotInputFocus"
            @blur="handleSlotInputBlur"
            @input="handleSlotInput($event)"
            :disabled="state.disabled"
          />
          <template v-else>
            <input
              :value="state.slotValue[0]"
              @focus="handleSlotInputFocus"
              @blur="handleSlotInputBlur"
              @input="handleSlotInput($event)"
              :disabled="state.disabled"
            />
            <span class="tiny-slider__input__split">-</span>
            <input
              :value="state.slotValue[1]"
              @focus="handleSlotInputFocus"
              @blur="handleSlotInputBlur"
              @input="handleSlotInput($event, false)"
              :disabled="state.disabled"
            />
          </template>
          <span class="tiny-slider__input__unit">{{ unit }}</span>
        </slot>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/slider/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import type { ISliderApi } from '@opentiny/vue-renderless/types/slider.type'
import '@opentiny/vue-theme/slider/index.less'

export default defineComponent({
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
    'marks',
    'showInput',
    'unit',
    'height',
    'range',
    'formatTooltip'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ISliderApi
  }
})
</script>
