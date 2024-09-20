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
  <transition name="mask-fade">
    <div
      v-show="visible"
      class="tiny-mobile-mask"
      :style="state.calcStyle"
      @mousedown="handleTouch"
      @touchmove="handleTouch"
      @touchstart="handleTouch"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { props, setup, defineComponent, $prefix } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/mask/vue'
import '@opentiny/vue-theme-mobile/mask/index.less'

export default defineComponent({
  name: $prefix + 'Mask',
  props: {
    ...props,
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 99
    },
    cancelTouch: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:visible', 'click'],
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
