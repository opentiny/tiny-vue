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
        <radio v-for="(item, index) in options" :key="index" v-bind="item"></radio>
      </template>
      <template v-if="type === 'button'">
        <radio-button v-for="(item, index) in options" :key="index" v-bind="item"></radio-button>
      </template>
    </slot>
  </component>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/radio-group/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Radio from '@opentiny/vue-radio'
import RadioButton from '@opentiny/vue-radio-button'
import type { IRadioGroupApi } from '@opentiny/vue-renderless/types/radio-group.type'

export default defineComponent({
  components: {
    Radio,
    RadioButton
  },
  emits: ['change', 'update:modelValue'],
  props: [...props, 'options', 'modelValue', 'type', 'size', 'fill', 'textColor', 'disabled', 'vertical'],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IRadioGroupApi
  }
})
</script>
