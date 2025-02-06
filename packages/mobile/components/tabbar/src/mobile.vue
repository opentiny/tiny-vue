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
  <div :class="{ 'tiny-mobile-tabbar-placeholder': placeholder }" :style="{ height: state.height }">
    <div
      ref="tabbar"
      class="tiny-mobile-tabbar"
      :class="[{ 'is-border': border }, { unfit: !state.fit, 'tiny-mobile-tabbar--fixed': fixed }]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { setup, $prefix, defineComponent } from '@mobile-root/common'
import { renderless, api } from './renderless/vue'
import { tabbarProps } from './tabbar'
import '@opentiny/vue-theme-mobile/tabbar/index.less'

export default defineComponent({
  name: $prefix + 'Tabbar',
  componentName: 'Tabbar',
  props: tabbarProps,
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
