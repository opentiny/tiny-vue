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
  <div :class="['tiny-mobile-label', state.labelClass]" :style="state.labelStyle">
    <span>{{ state.label }}</span>
    <span v-if="state.isRequired" class="tiny-mobile-label-isRequired">*</span>
  </div>
</template>

<script lang="ts">
import { renderless, api } from './renderless/vue'
import { props, setup, defineComponent } from '../../../vue-common'
import '@opentiny/vue-theme-mobile/label/index.less'

export default defineComponent({
  props: [
    ...props,
    'label',
    'color',
    'size',
    'type',
    'wholeline',
    'position',
    'ellipsis',
    'decimal',
    'limit',
    'isRequired',
    'bold'
  ],
  emits: ['click'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
