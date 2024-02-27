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
  <a
    :class="[
      'tiny-link',
      'tiny-link--additional',
      type ? `tiny-link--${type}` : '',
      state.disabled && 'is-disabled',
      underline && !state.disabled && 'is-underline',
      size === 'medium' ? `tiny-link--${size}` : 'tiny-link--base'
    ]"
    :href="state.disabled ? null : state.href"
    v-bind="a($attrs, ['^on[A-Z]'])"
    rel="noopener noreferrer"
    @click="handleClick"
  >
    <component
      :is="icon"
      v-if="icon"
      class="tiny-svg-size tiny-link-svg"
      :class="{ 'tiny-link-svg-only': !(slots.default || value) }"
    />

    <span v-if="value" class="tiny-link__inner">
      {{ value }}
    </span>

    <span v-else-if="slots.default" class="tiny-link__inner">
      <slot></slot>
    </span>

    <slot v-if="slots.icon" name="icon"></slot>
  </a>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/link/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import type { ILinkApi } from '@opentiny/vue-renderless/types/link.type'

export default defineComponent({
  props: [...props, 'disabled', 'href', 'icon', 'type', 'underline', 'value', 'size'],
  emits: ['click'],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ILinkApi
  }
})
</script>
