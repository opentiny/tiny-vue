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
  <div ref="indexBarAnchor" class="tiny-mobile-index-bar-anchor">
    <slot>
      <div class="tiny-mobile-index-bar-anchor__label">{{ index }}</div>
    </slot>
  </div>
</template>

<script lang="tsx">
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/index-bar/vue'
import '@opentiny/vue-theme-mobile/index-bar-anchor/index.less'

export default defineComponent({
  name: $prefix + 'IndexBarAnchor',
  props: {
    index: String
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
