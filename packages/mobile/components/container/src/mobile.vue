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
  <div :class="[pattern]" class="tiny-mobile-container">
    <div :style="state.leftStyle" class="tiny-mobile-container__left">
      <slot name="left"></slot>
    </div>
    <div class="tiny-mobile-container__center">
      <slot name="center"></slot>
    </div>
    <div v-if="state.showRight" :style="state.rightStyle" class="tiny-mobile-container__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/container/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/container/index.less'

export default defineComponent({
  props: [...props, 'pattern', 'leftWidth', 'rightWidth'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
