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
  <div class="tiny-mobile-badge">
    <slot />
    <div
      v-if="!hidden && (value > 0 || isDot)"
      class="tiny-mobile-badge__content"
      :class="[
        {
          'is-dot': isDot,
          'is-fixed': isFixed,
          'is-mini': isMini
        },
        value < 10 ? 'is-circle' : '',
        type ? 'tiny-mobile-badge--' + type : ''
      ]"
    >
      <span v-if="!isDot">
        <slot name="content">
          <a :href="state.href" :target="target" rel="noopener noreferrer" class="tiny-mobile-badge__link">{{
            state.content
          }}</a>
        </slot>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/badge/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/badge/index.less'

export default defineComponent({
  props: [...props, 'isDot', 'isFixed', 'isMini', 'hidden', 'max', 'type', 'value', 'modelValue', 'href', 'target'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
