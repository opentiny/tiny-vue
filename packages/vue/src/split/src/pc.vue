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
  <div ref="outerWrapper" :class="state.wrapperClasses">
    <div v-if="state.isHorizontal" :class="`${state.prefix}-horizontal`">
      <div
        :style="{
          right: `${state.anotherOffset}%`,
          width: state.anotherOffset != 100 && state.isThreeAreas ? `${state.leftTopPane}px` : ''
        }"
        :class="state.paneClasses"
        class="left-pane"
      >
        <slot name="left" />
      </div>
      <div
        :class="[
          `${state.prefix}-trigger-con`,
          `${state.prefix}-trigger-con-vertical`,
          !state.dragable ? `${state.prefix}-trigger-con-disabled` : ``,
          state.isMoving ? `${state.prefix}-trigger-con-drag` : ``,
          state.offset === 0 && state.triggerSimple ? `${state.prefix}-trigger-con-left-active` : ``,
          state.triggerSimple ? `${state.prefix}-trigger-con-simple` : ``
        ]"
        :style="{ left: state.isThreeAreas ? `${state.leftTopPane}px` : `${state.offset}%` }"
        @mousedown="handleMousedown"
      >
        <slot name="trigger">
          <div :class="[`${state.prefix}-trigger`, `${state.prefix}-trigger-vertical`]">
            <div v-if="!state.triggerSimple" :class="[`${state.prefix}-trigger-bar-con`, 'vertical']">
              <i v-for="i in 3" v-once :class="`${state.prefix}-trigger-bar`" :key="`trigger-${i}`"></i>
            </div>
          </div>
        </slot>
        <div
          :class="[
            `${state.prefix}-trigger-button`,
            `${state.prefix}-trigger-left-button`,
            state.offset === 100 ? `${state.prefix}-trigger-button-active` : ``,
            state.offset === 100 || state.collapseLeftTop ? `${state.prefix}-trigger-button-show` : ``
          ]"
          v-if="state.triggerSimple"
          @mousedown="buttonMousedown"
          @click="buttonLeftTopClick"
        >
          <icon-split-left class="tiny-svg-size"></icon-split-left>
        </div>
        <div
          :class="[
            `${state.prefix}-trigger-button`,
            `${state.prefix}-trigger-right-button`,
            state.offset === 0 ? `${state.prefix}-trigger-button-active` : ``,
            state.offset === 0 || state.collapseRightBottom ? `${state.prefix}-trigger-button-show` : ``
          ]"
          v-if="state.triggerSimple"
          @mousedown="buttonMousedown"
          @click="buttonRightBottomClick"
        >
          <icon-split-right class="tiny-svg-size"></icon-split-right>
        </div>
      </div>
      <div
        :style="{
          left: state.isThreeAreas ? `${state.leftTopPane}px` : `${state.offset}%`,
          width: state.isThreeAreas ? `calc(100% - ${state.leftTopPane}px)` : ``
        }"
        :class="state.paneClasses"
        class="right-pane"
      >
        <slot name="right" />
      </div>
    </div>
    <div v-else :class="`${state.prefix}-vertical`">
      <div
        :style="{
          bottom: `${state.anotherOffset}%`,
          height: state.anotherOffset != 100 ? `${state.leftTopPane}px` : ''
        }"
        :class="state.paneClasses"
        class="top-pane"
      >
        <slot name="top" />
      </div>
      <div
        :class="[
          `${state.prefix}-trigger-con`,
          `${state.prefix}-trigger-con-horizontal`,
          !state.dragable ? `${state.prefix}-trigger-con-disabled` : ``,
          state.isMoving ? `${state.prefix}-trigger-con-drag` : ``,
          state.offset === 0 && state.triggerSimple ? `${state.prefix}-trigger-con-top-active` : ``,
          state.triggerSimple ? `${state.prefix}-trigger-con-simple` : ``
        ]"
        :style="{ top: state.isThreeAreas ? `${state.leftTopPane}px` : `${state.offset}%` }"
        @mousedown="handleMousedown"
      >
        <slot name="trigger">
          <div :class="[`${state.prefix}-trigger`, `${state.prefix}-trigger-horizontal`]">
            <div v-if="!state.triggerSimple" :class="[`${state.prefix}-trigger-bar-con`, 'horizontal']">
              <i v-for="i in 3" v-once :class="`${state.prefix}-trigger-bar`" :key="`trigger-${i}`"></i>
            </div>
          </div>
        </slot>
        <div
          :class="[
            `${state.prefix}-trigger-button`,
            `${state.prefix}-trigger-top-button`,
            state.offset === 100 ? `${state.prefix}-trigger-button-active` : ``,
            state.offset === 100 || state.collapseLeftTop ? `${state.prefix}-trigger-button-show` : ``
          ]"
          v-if="state.triggerSimple"
          @mousedown="buttonMousedown"
          @click="buttonLeftTopClick"
        >
          <icon-split-left class="tiny-svg-size"></icon-split-left>
        </div>
        <div
          :class="[
            `${state.prefix}-trigger-button`,
            `${state.prefix}-trigger-bottom-button`,
            state.offset === 0 ? `${state.prefix}-trigger-button-active` : ``,
            state.offset === 0 || state.collapseRightBottom ? `${state.prefix}-trigger-button-show` : ``
          ]"
          v-if="state.triggerSimple"
          @mousedown="buttonMousedown"
          @click="buttonRightBottomClick"
        >
          <icon-split-right class="tiny-svg-size"></icon-split-right>
        </div>
      </div>
      <div
        :style="{
          top: state.isThreeAreas ? `${state.leftTopPane}px` : `${state.offset}%`,
          height: state.isThreeAreas ? `calc(100% - ${state.leftTopPane}px)` : ``
        }"
        :class="state.paneClasses"
        class="bottom-pane"
      >
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/split/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconLeft, IconRight } from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    IconSplitLeft: IconLeft(), // 暂时使用tiny-vue的图标代替。 备注：这个图标在简易模式也看不到
    IconSplitRight: IconRight()
  },
  emits: [
    'moving',
    'mousemove',
    'mouseup',
    'moveend',
    'movestart',
    'update:modelValue',
    'left-top-click',
    'right-bottom-click'
  ],
  props: [
    ...props,
    'modelValue',
    'mode',
    'leftTopMin',
    'rightBottomMin',
    'disabled',
    'triggerSimple',
    'collapseLeftTop',
    'collapseRightBottom',
    'threeAreas'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
