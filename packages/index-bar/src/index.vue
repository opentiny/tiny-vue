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
  <div class="tiny-mobile-index-bar" @scroll="handleScroll">
    <div ref="indexBarContent">
      <slot></slot>
    </div>

    <div
      ref="indexSide"
      class="tiny-mobile-index-bar__side"
      @mousedown="handleTouchDown"
      @mousemove="handleTouchMove"
      @mouseup="handleTouchUp"
      @touchstart="handleTouchDown"
      @touchmove="handleTouchMove"
      @touchend="handleTouchUp"
    >
      <span
        v-for="(label, index) in indexList"
        :key="label"
        :id="index"
        :class="['tiny-mobile-index-bar__label', state.index === index ? 'tiny-mobile-index-bar__label--active' : null]"
        @click="handleIndexClick({ index, label })"
      >
        {{ label }}
      </span>
    </div>
  </div>
</template>

<script>
import { props, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/index-bar/vue'

import '@opentiny/vue-theme-mobile/index-bar/index.css'

export default {
  emits: ['select', 'change'],
  props: [...props, 'indexList'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
