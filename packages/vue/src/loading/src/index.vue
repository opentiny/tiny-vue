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
  <transition name="tiny-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="state.visible"
      class="tiny-loading tiny-loading__mask"
      :style="{ backgroundColor: state.background || '' }"
      :class="[state.customClass, { 'is-fullscreen': state.fullscreen }]"
    >
      <div class="tiny-loading__spinner">
        <svg v-if="!state.spinner" class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="24" fill="none" />
        </svg>
        <component v-else :is="state.spinner" class="tiny-icon-loading" />
        <p v-if="state.text" class="tiny-loading__text">{{ state.text }}</p>
      </div>
    </div>
  </transition>
</template>

<script lang="tsx">
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/loading/vue'

export default defineComponent({
  inheritAttrs: false,
  name: $prefix + 'Loading',
  props: {
    _constants: Object
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
