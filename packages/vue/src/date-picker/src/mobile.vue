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
  <div>
    <tiny-input @hook-mounted="hookMounted" v-model="state.displayValue" ref="refrence" @focus="showPickerAndlockSrcoll" readOnly="true" :_mode="_mode">
      <icon-close slot="suffix" v-if="!state.clearable" @click="clearDisplayValue"></icon-close>
    </tiny-input>
    <tiny-mini-picker
      v-model:visible="state.visible"
      ref="picker"
      :columns="state.columns"
      @change="onChange"
      @confirm="onConfirm"
      @cancel="onCancel"
    ></tiny-mini-picker>
  </div>
</template>

<script lang="ts">
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/date-picker/vue'
import MiniPicker from '@opentiny/vue-mini-picker'
import Input from '@opentiny/vue-input'
import { iconCloseCircle } from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    TinyMiniPicker: MiniPicker,
    TinyInput: Input,
    IconClose: iconCloseCircle()
  },
  props: [...props, 'modelValue', 'type', 'clearable', 'visible', 'minDate', 'maxDate', 'formatter'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
