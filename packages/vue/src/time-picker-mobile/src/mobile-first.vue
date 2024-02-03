<template>
  <div data-tag="tiny-time-picker-mobile" v-show="visible">
    <tiny-cascader-select
      v-model="state.dateArr"
      :options="state.optionList"
      :visible="state.visible"
      @update:visible="updateVisible"
      @update:modelValue="confirm"
    ></tiny-cascader-select>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/time-picker-mobile/vue'
import { $prefix, setup, $props, defineComponent } from '@opentiny/vue-common'
import CascaderSelect from '@opentiny/vue-cascader-select'

export default defineComponent({
  name: $prefix + 'TimePickerMobile',
  components: {
    TinyCascaderSelect: CascaderSelect
  },
  props: {
    ...$props,
    modelValue: Array,
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
