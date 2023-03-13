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
  <div
    ref="wrapper"
    class="tiny-fullscreen"
    v-bind="$attrs"
    :style="state.wrapperStyle"
    :class="{ [fullscreenClass]: state.isFullscreen }"
    @click="shadeClick($event)"
    @keyup="exit"
  >
    <slot />
  </div>
</template>

<script>
import { $prefix, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/fullscreen/vue'

export default {
  name: $prefix + 'Fullscreen',
  props: {
    fullscreen: {
      type: Boolean,
      default: false
    },
    exitOnClickWrapper: {
      type: Boolean,
      default: true
    },
    fullscreenClass: {
      type: String,
      default: ''
    },
    pageOnly: {
      type: Boolean,
      default: false
    },
    teleport: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 0
    },
    beforeChange: Function
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
