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
  <div :class="['tiny-cascader-panel', border && 'is-bordered']" @keydown="handleKeyDown">
    <cascader-menu v-for="(menu, index) in state.menus" :index="index" :key="index" :nodes="menu"></cascader-menu>
  </div>
</template>

<script lang="tsx">
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/cascader-panel/vue'
import CascaderMenu from '@opentiny/vue-cascader-menu'

export default defineComponent({
  name: $prefix + 'CascaderPanel',
  componentName: $prefix + 'CascaderPanel',
  components: {
    CascaderMenu
  },
  props: {
    modelValue: {},
    options: Array,
    props: Object,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function
  },
  provide() {
    return {
      panel: this
    }
  },
  emits: ['update:modelValue', 'change', 'close', 'active-item-change', 'expand-change'],
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
