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
  <!-- TINY-TODO: tiny-select-group的类名命名不规范，应定在后续的某个版本去掉 -->
  <ul class="tiny-option-group tiny-select-group__wrap" v-show="state.visible">
    <li class="tiny-option-group__title tiny-select-group__title">
      {{ label }}
    </li>
    <li>
      <ul class="tiny-option-group__list tiny-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/option-group/vue'
import { setup, $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'OptionGroup',
  componentName: 'OptionGroup',
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
