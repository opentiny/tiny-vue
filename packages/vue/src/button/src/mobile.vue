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
  <button
    class="tiny-mobile-button"
    @click="handleClick"
    :disabled="state.buttonDisabled || loading"
    :type="nativeType"
    :class="[
      type ? 'tiny-mobile-button--' + type : '',
      size ? 'tiny-mobile-button--' + size : '',
      {
        'is-disabled': state.buttonDisabled,
        'is-loading': loading
      }
    ]"
    v-bind="a($attrs, ['class', 'style'], true)"
  >
    <template v-if="loading">
      <div
        :class="[
          'tiny-mobile-button-loading',
          'tiny-mobile-button-loading-' + (type === 'primary' ? 'white' : 'black')
        ]"
      >
        <div class="tiny-mobile-button-loading-inner"></div>
      </div>
    </template>
    <component v-if="icon && !loading" :is="icon" :class="['tiny-icon', 'is-icon', text ? 'small' : null]" />

    <slot>
      <span :style="{ marginLeft: text && (icon || loading) ? '4px' : 0 }">{{ text }}</span>
    </slot>
  </button>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/button/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/button/index.less'

export default defineComponent({
  emits: ['hook-updated', 'click'],
  props: [...props, 'type', 'text', 'size', 'icon', 'resetTime', 'nativeType', 'loading', 'disabled', 'customClass'],
  components: {},
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
