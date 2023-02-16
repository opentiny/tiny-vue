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
  <component :is="tag" class="tiny-layout">
    <slot></slot>
  </component>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/layout/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [...props, 'tag'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
