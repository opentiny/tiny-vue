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
  <div class="tiny-collapse" role="tablist" aria-multiselectable="true">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/collapse/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [...props, 'accordion', 'modelValue', 'beforeClose'],
  emits: ['update:modelValue', 'change'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
