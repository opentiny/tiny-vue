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
  <div :class="[pattern]" class="tiny-container">
    <div v-if="state.showHeader" :style="state.headerStyle" class="tiny-container__header">
      <slot name="header"></slot>
    </div>
    <div v-if="state.showAside" :style="state.asideStyle" class="tiny-container__aside">
      <slot name="aside"></slot>
    </div>
    <div :style="state.mainStyle" class="tiny-container__main">
      <slot></slot>
    </div>
    <div v-if="state.showFooter" :style="state.footerStyle" class="tiny-container__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/container/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [...props, 'pattern', 'headerHeight', 'asideWidth', 'footerHeight'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
