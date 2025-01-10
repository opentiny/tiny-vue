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
    :class="['tiny-mobile-tag', 'tiny-mobile-tag-' + state.color, state.mini ? 'tiny-mobile-tag-mini' : null]"
    :style="{ maxWidth: state.maxWidth ? `${state.maxWidth}px` : null }"
  >
    <slot>{{ state.text }}</slot>
  </div>
</template>

<script lang="ts">
import { renderless, api } from './renderless/vue'
import { setup, h, defineComponent } from '@mobile-root/common'
import { tagProps } from './tag'
import type { ITagApi } from './tag'
import '@opentiny/vue-theme-mobile/tag/index.less'

export default defineComponent({
  emits: ['click', 'close'],
  props: tagProps,
  setup(props, context) {
    return setup({ props, context, renderless, api, h }) as unknown as ITagApi
  }
})
</script>
