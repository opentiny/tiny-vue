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
    v-if="!lazy || state.loaded || state.active"
    v-show="state.active"
    :aria-hidden="!state.active"
    :id="`pane-${state.paneName}`"
    :aria-labelledby="`tab-${state.paneName}`"
    :class="['tiny-tab-pane', state.animateShow ? 'active-item' : '']"
    role="tabpanel"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/tab-item/vue'
import type { ITabItemApi } from '@opentiny/vue-renderless/types/tab-item.type'

export default defineComponent({
  name: $prefix + 'TabItem',
  componentName: 'TabItem',
  emits: ['tab-nav-update'],
  props: {
    title: String,
    name: String,
    withClose: Boolean,
    disabled: Boolean,
    lazy: Boolean
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ITabItemApi
  }
})
</script>
