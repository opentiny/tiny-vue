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
    :tabindex="tabindex"
    :size="size"
    v-model="state.selectedValue"
    :placeholder="placeholder"
    @change="change"
    :popper-class="'tiny-drop-times' + (popperClass ? ' ' + popperClass : '')"
    :popper-append-to-body="popperAppendToBody"
    v-bind="a($attrs, ['^on[A-Z]'])"
    @clear="$emit('clear')"
    @visible-change="$emit('visible-change', $event)"
  >
    <tiny-option v-for="(item, index) in state.options" :key="index" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-select>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/drop-times/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Select from '@opentiny/vue-select'
import Option from '@opentiny/vue-option'

export default defineComponent({
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  props: [...props, 'size', 'tabindex', 'modelValue', 'placeholder', 'start', 'end', 'step', 'popperClass', 'popperAppendToBody'],
  emits: ['change', 'update:modelValue', 'clear', 'visible-change'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
