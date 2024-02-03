<template>
  <div class="demo-date-picker-wrap">
    <tiny-date-picker v-model="datesValue" type="dates" placeholder="请选择日期"></tiny-date-picker>
    <tiny-date-picker v-model="yearsValue" type="years" placeholder="请选择年份"></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const datesValue = ref('')
const yearsValue = ref('')
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 280px;

  & > * {
    margin-top: 12px;
  }
}
</style>
