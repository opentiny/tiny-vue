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
        :style="{ right: state.collapsed ? '100%' : `${state.anotherOffset}%` }"
        :class="state.paneClasses"
        class="left-pane"
      >
        <slot name="left" />
      </div>
      <div
        :class="`${state.prefix}-trigger-con`"
        :style="{ left: state.collapsed ? '2px' : `${state.offset}%` }"
        @mousedown="handleMousedown"
      >
        <slot name="trigger">
          <div :class="[`${state.prefix}-trigger`, `${state.prefix}-trigger-vertical`]">
            <div :class="[`${state.prefix}-trigger-bar-con`, 'vertical']">
              <i v-for="i in 3" v-once :class="`${state.prefix}-trigger-bar`" :key="`trigger-${i}`"></i>
            </div>
          </div>
        </slot>
      </div>
      <div
        v-if="collapsible"
        :class="`${state.prefix}-collapse-bar`"
        :style="{
          left: state.collapsed ? 0 : `calc(${state.offset}% - 2px)`
        }"
        @click="handleCollapse"
      >
        <icon-chevron-right :style="{ transform: `rotate(${state.collapsed ? '0deg' : '180deg'})` }" />
      </div>
      <div :style="{ left: state.collapsed ? '0' : `${state.offset}%` }" :class="state.paneClasses" class="right-pane">
        <slot name="right" />
      </div>
    </div>
    <div v-else :class="`${state.prefix}-vertical`">
      <div
        :style="{ bottom: state.collapsed ? '100%' : `${state.anotherOffset}%` }"
        :class="state.paneClasses"
        class="top-pane"
      >
        <slot name="top" />
      </div>
      <div
        :class="`${state.prefix}-trigger-con`"
        :style="{ top: state.collapsed ? '2px' : `${state.offset}%` }"
        @mousedown="handleMousedown"
      >
        <slot name="trigger">
          <div :class="[`${state.prefix}-trigger`, `${state.prefix}-trigger-horizontal`]">
            <div :class="[`${state.prefix}-trigger-bar-con`, 'horizontal']">
              <i v-for="i in 3" v-once :class="`${state.prefix}-trigger-bar`" :key="`trigger-${i}`"></i>
            </div>
          </div>
        </slot>
      </div>
      <div
        v-if="collapsible"
        :class="`${state.prefix}-collapse-bar`"
        :style="{
          top: state.collapsed ? 0 : `calc(${state.offset}% - 2px)`
        }"
        @click="handleCollapse"
      >
        <icon-chevron-right :style="{ transform: `rotate(${state.collapsed ? '90deg' : '270deg'})` }" />
      </div>
      <div :style="{ top: state.collapsed ? '0' : `${state.offset}%` }" :class="state.paneClasses" class="bottom-pane">
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/split/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconChevronRight } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['moving', 'mousemove', 'mouseup', 'moveend', 'movestart', 'update:modelValue', 'collapsedChange'],
  props: [...props, 'modelValue', 'mode', 'leftTopMin', 'rightBottomMin', 'collapsible'],
  components: {
    IconChevronRight: iconChevronRight()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
