<template>
  <div class="tiny-mobile-mini-picker-demo">
    <tiny-button @click="fn">cliclk me!</tiny-button>
    <tiny-mini-picker
      title="触发change事件"
      ref="pickerRef"
      @confirm="getVal"
      :columns="columns1"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
    ></tiny-mini-picker>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyMiniPicker, TinyButton } from '@opentiny/vue-mobile'

const optionIndex = ref('0')
const boxVisibility = ref(false)
const columns1 = ref(['小花', '小草', '小叶', '小树', '小星', '小月'])
const pickerRef = ref()

function fn() {
  boxVisibility.value = true
}

function getVal() {
  const values = pickerRef.value.getColumnValues(optionIndex.value)
  const value = pickerRef.value.getColumnValue(optionIndex.value)
  const index = pickerRef.value.getColumnIndex(optionIndex.value)
  console.log('对应列中所有选项', values)
  console.log('对应列选中的值:', value)
  console.log('对应列选中项的索引', index)
}
</script>
