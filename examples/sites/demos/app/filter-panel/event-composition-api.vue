<template>
  <div>
    <tiny-filter-panel
      ref="filterPanelRef"
      label="物品数量"
      @handle-clear="handleClear"
      @visible-change="visibleChange"
      :value="value"
    >
      <tiny-radio-group v-model="radioVal" size="mini">
        <tiny-radio label="大于">大于</tiny-radio>
        <tiny-radio label="等于">等于</tiny-radio>
        <tiny-radio label="小于">小于</tiny-radio>
      </tiny-radio-group>
      <tiny-input type="text" v-model="inputVal" style="margin-top: 20px"></tiny-input>
    </tiny-filter-panel>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  FilterPanel as TinyFilterPanel,
  Radio as TinyRadio,
  RadioGroup as TinyRadioGroup,
  Input as TinyInput,
  Modal
} from '@opentiny/vue'

const inputVal = ref('')
const radioVal = ref('')
const value = computed(() => {
  return radioVal.value + inputVal.value
})

function handleClear() {
  radioVal.value = ''
  inputVal.value = ''
}

function visibleChange(v) {
  Modal.message({
    message: `${v} visibleChange`,
    status: 'info'
  })
}
</script>
