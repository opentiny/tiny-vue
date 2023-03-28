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
  <tiny-select
    v-model="state.selectedValue"
    filterable
    :size="size"
    :clearable="clearable"
    :disabled="disabled"
    :placeholder="placeholder"
    @change="change"
    v-bind="a($attrs, ['^on[A-Z]'])"
    @clear="$emit('clear')"
    @visible-change="$emit('visible-change', $event)"
  >
    <tiny-option v-for="item in state.options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-select>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/company/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Select from '@opentiny/vue-select'
import Option from '@opentiny/vue-option'

export default defineComponent({
  inheritAttrs: false,
  emits: ['clear', 'update:modelValue', 'visible-change', 'change'],
  props: [...props, 'modelValue', 'max', 'placeholder', 'size', 'clearable', 'disabled', 'fetchCompany', 'fields', 'popperClass', 'popperAppendToBody'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  },
  components: {
    TinySelect: Select,
    TinyOption: Option
  }
})
</script>
