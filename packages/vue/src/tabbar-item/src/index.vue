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
  <component :is="$view" v-bind="$bind">
    <template>
      <slot></slot>
    </template>
    <template #icon="{ active }">
      <slot name="icon" :active="active"></slot>
    </template>
  </component>
</template>

<script lang="tsx">
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?mobile'

export default defineComponent({
  name: $prefix + 'TabbarItem',
  componentName: 'TinyTabbarItem',
  props: {
    ...$props,
    url: String,
    replace: Boolean,
    to: [String, Object],
    dot: Boolean,
    icon: Object,
    name: [Number, String],
    info: [Number, String],
    badge: [Number, String]
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
</script>
