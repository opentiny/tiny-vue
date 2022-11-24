<template>
  <div>
    <tiny-input
      @hook-mounted="hookMounted"
      v-model="state.displayValue"
      ref="refrence"
      @focus="showPickerAndlockSrcoll"
      readOnly="true"
      :_mode="_mode"
    >
      <icon-close
        slot="suffix"
        v-if="!state.clearable"
        @click="clearDisplayValue"
      ></icon-close>
    </tiny-input>
    <tiny-mini-picker
      :visible.sync="state.visible"
      ref="picker"
      :columns="state.columns"
      @change="onChange"
      @confirm="onConfirm"
      @cancel="onCancel"
    ></tiny-mini-picker>
  </div>
</template>

<script>
import { props, setup } from '@opentiny/vue-common'
import {
  renderless,
  api
} from '@opentiny/vue-renderless/date-picker/vue'
import MiniPicker from '@opentiny/vue-mini-picker'
import Input from '@opentiny/vue-input'
import { iconCloseCircle } from '@opentiny/vue-icon'

export default {
  components: {
    TinyMiniPicker: MiniPicker,
    TinyInput: Input,
    IconClose: iconCloseCircle()
  },
  props: [
    ...props,
    'modelValue',
    'type',
    'clearable',
    'visible',
    'minDate',
    'maxDate',
    'formatter'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
