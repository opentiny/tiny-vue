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
  <div class="tiny-scroll-text__wrapper">
    <div ref="wrap" class="tiny-scroll-text" @mouseenter="stopAnimation" @mouseleave="startAnimation">
      <div
        ref="content"
        :class="[{ stop: state.isStop }, direction]"
        :style="state.bindStyle"
        class="tiny-scroll-text__content"
      >
        <slot>
          <p>{{ text }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/scroll-text/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [...props, 'text', 'time', 'styles', 'direction', 'hoverStop'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
