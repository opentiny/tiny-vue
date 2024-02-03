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
    :style="{ width: !state.showAutoWidth && state.width }"
    :class="['tiny-text-popup', { 'show-auto-width': state.showAutoWidth }]"
  >
    <input v-show="state.type === 'input'" ref="text" :placeholder="placeholder" class="area text" @focus="onFocus" />
    <textarea
      v-show="state.type === 'textarea'"
      ref="popup"
      v-model="state.textAreaValue"
      :readonly="readonly"
      class="area popup"
      rows="5"
      @blur="onBlur"
      @input="onInput"
    >
    </textarea>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/text-popup/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [...props, 'modelValue', 'placeholder', 'readonly', 'width', 'separtor'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
