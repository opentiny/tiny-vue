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
  <i :style="styleExternalIcon" class="tiny-svg" v-on="$listeners" />
</template>

<script lang="ts">
import { $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'SvgIcon',
  props: {
    src: {
      type: String,
      required: true
    },
    width: String,
    height: String,
    fill: String
  },
  computed: {
    styleExternalIcon() {
      const style = {
        mask: `url(${this.src}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.src}) no-repeat 50% 50%`
      }

      this.width && (style.width = this.width)
      this.height && (style.height = this.height)
      this.fill && (style.background = this.fill)

      return style
    }
  }
})
</script>
