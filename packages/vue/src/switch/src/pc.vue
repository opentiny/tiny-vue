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
  <span
    :class="[state.wrapClasses, state.showText ? 'tiny-switch__text' : '']"
    :tabindex="tabindex"
    @click="toggle"
    @keydown.space="toggle"
  >
    <span :class="state.innerClasses">
      <div v-if="!mini && state.showText">
        <slot v-if="state.currentValue === trueValue" name="open">ON</slot>
        <slot v-if="state.currentValue === falseValue" name="close">OFF</slot>
      </div>
    </span>
  </span>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/switch/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/switch/index.less'
import type { ISwitchApi } from '@opentiny/vue-renderless/types/switch.type'

export default defineComponent({
  emits: ['change', 'update:modelValue'],
  props: [
    ...props,
    'modelValue',
    'trueValue',
    'falseValue',
    'disabled',
    'mini',
    'tabindex',
    'showText',
    'beforeChange',
    'displayOnly'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ISwitchApi
  }
})
</script>
