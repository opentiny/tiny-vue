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
  <form
    class="tiny-mobile-form"
    :class="[
      labelPosition ? 'tiny-mobile-form--label-' + labelPosition : '',
      { 'tiny-mobile-form--inline': inline },
      { 'label-align': labelAlign }
    ]"
    @submit.prevent
  >
    <slot></slot>
  </form>
</template>

<script lang="tsx">
import { renderless, api } from './renderless/vue'
import { $prefix, setup, defineComponent } from '@mobile-root/common'
import type { IFormApi } from './form'
import { formProps } from './form'
import '@opentiny/vue-theme-mobile/form/index.less'
import '@opentiny/vue-theme-mobile/form-item/index.less'

export default defineComponent({
  name: $prefix + 'Form',
  componentName: 'Form',
  props: formProps,
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IFormApi
  }
})
</script>
