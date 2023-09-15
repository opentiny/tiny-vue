<template>
  <div class="demo-date-picker-wrap">
    <tiny-date-picker v-model="value" placeholder="请选择日期"></tiny-date-picker>
    <tiny-date-picker v-model="weekValue" type="week" placeholder="请选择周"></tiny-date-picker>
    <tiny-date-picker v-model="monthValue" type="month" placeholder="请选择月份"></tiny-date-picker>
    <tiny-date-picker v-model="yearValue" type="year" placeholder="请选择年份"></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref('')
const weekValue = ref('')
const monthValue = ref('')
const yearValue = ref('')
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 280px;

  & > * {
    margin-top: 12px;
  }
}
</style>
