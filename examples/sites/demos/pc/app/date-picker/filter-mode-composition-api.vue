<template>
  <div class="demo-date-picker-wrap">
    <tiny-date-picker v-model="value" shape="filter" label="日期选择"></tiny-date-picker>
    <tiny-date-picker v-model="rangeValue" type="daterange" shape="filter" label="日期范围选择"></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref('')
const rangeValue = ref('')
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 280px;

  & > * {
    margin-top: 12px;
  }
}
</style>
