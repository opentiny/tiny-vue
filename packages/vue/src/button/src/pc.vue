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
    class="tiny-button"
    @click="handleClick"
    :disabled="state.buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'tiny-button--' + type : '',
      size ? 'tiny-button--' + size : '',
      {
        'is-disabled': state.buttonDisabled,
        'is-loading': loading,
        'is-plain': state.plain,
        'is-round': round,
        'is-circle': circle,
        'is-icon': icon && !loading && (text || slots.default),
        'is-only-icon': icon && !loading && !(text || slots.default)
      }
    ]"
    :tabindex="tabindex"
    v-bind="a($attrs, ['class', 'style'], true)"
  >
    <icon-loading v-if="loading" class="tiny-icon-loading tiny-svg-size" />
    <component v-if="icon && !loading" :is="icon" :class="{ 'is-text': text || slots.default }" />
    <slot>
      <span>{{ text }}</span>
    </slot>
  </button>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/button/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconLoading } from '@opentiny/vue-icon'
import type { IButtonApi } from '@opentiny/vue-renderless/types/button.type'
import '@opentiny/vue-theme/button/index.less'

export default defineComponent({
  emits: ['click', 'hook-updated'],
  props: [
    ...props,
    'type',
    'text',
    'size',
    'icon',
    'resetTime',
    'nativeType',
    'loading',
    'disabled',
    'plain',
    'autofocus',
    'round',
    'circle',
    'tabindex',
    'customClass'
  ],
  components: { IconLoading: iconLoading() },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IButtonApi
  }
})
</script>
