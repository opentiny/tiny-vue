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
  <div
    class="tiny-select-dropdown tiny-popper"
    :class="[{ 'is-multiple': state.multiple }, state.popperClass]"
    @mousedown.stop
    :style="{
      minWidth: state.minWidth,
      width: isDropInheritWidth ? state.minWidth : 'auto'
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/select-dropdown/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/select-dropdown/index.less'

export default defineComponent({
  props: [
    ...props,
    'placement',
    'boundariesPadding',
    'popperOptions',
    'visibleArrow',
    'appendToBody',
    'transformOrigin',
    'reference',
    'popper',
    'offset',
    'modelValue',
    'arrowOffset',
    'isDropInheritWidth'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
