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
import { renderless, api } from '@opentiny/vue-renderless/tag/vue'
import { props, setup, h, defineComponent } from '@opentiny/vue-common'
import type { ITagApi } from '@opentiny/vue-renderless/types/tag.type'
import '@opentiny/vue-theme-mobile/tag/index.less'

export default defineComponent({
  emits: ['click', 'close'],
  props: [...props, 'text', 'color', 'width', 'mini', 'maxWidth'],
  setup(props, context) {
    return setup({ props, context, renderless, api, h }) as unknown as ITagApi
  }
})
</script>
