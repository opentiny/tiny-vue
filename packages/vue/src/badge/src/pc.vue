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
  <div class="tiny-badge__wrapper">
    <span v-if="data">{{ data }}</span>
    <slot v-else />
    <slot />
    <div
      v-if="!hidden && (state.content || state.content === 0 || isDot)"
      class="tiny-badge"
      :class="[
        isDot ? 'tiny-badge--default' : '',
        state.isOverstep ? 'tiny-badge--max' : '',
        type ? 'tiny-badge--' + type : '', badgeClass || ''
      ]"
      :style="{
        transform: `translate(
          ${offset[0]}${typeof offset[0] === 'number' ? 'px' : ''},
          ${offset[1]}${typeof offset[1] === 'number' ? 'px' : ''}
        )`
      }"
    >
      <slot name="content">
        <a v-if="state.href" :href="state.href" :target="target" rel="noopener noreferrer">{{ state.content }}</a>
        <span class="tiny-badge__content-text" v-if="!state.href">{{ state.content }}</span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/badge/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/badge/index.less'

export default defineComponent({
  props: [...props, 'isDot', 'hidden', 'type', 'max', 'value', 'modelValue', 'href', 'target', 'badgeClass', 'offset', 'data'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
