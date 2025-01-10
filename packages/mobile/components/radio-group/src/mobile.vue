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
  <component
    :is="state.tag"
    class="tiny-radio-group"
    :class="[vertical ? 'list-inline' : '']"
    role="radiogroup"
    @keydown="handleKeydown"
    ref="group"
  >
    <slot>
      <template v-if="type === 'radio'">
        <radio v-for="(item, index) in options" :display-only="displayOnly" :key="index" v-bind="item"></radio>
      </template>
    </slot>
  </component>
</template>

<script lang="ts">
import { renderless, api } from './renderless/vue'
import { setup, defineComponent } from '@mobile-root/common'
import Radio from '../../radio'
import { radioGroupProps } from './radio-group'
import type { IRadioGroupApi } from './radio-group'

export default defineComponent({
  components: {
    Radio
  },
  emits: ['change', 'update:modelValue'],
  props: radioGroupProps,
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IRadioGroupApi
  }
})
</script>
