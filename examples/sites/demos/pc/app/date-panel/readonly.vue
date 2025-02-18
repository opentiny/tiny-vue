<template>
  <div class="demo-date-panel-wrap">
    <div class="value">{{ value }}</div>
    <tiny-date-panel v-model="value" readonly></tiny-date-panel>
    <div class="value1">{{ value1 }}</div>
    <tiny-date-range type="daterange" v-model="value1" readonly></tiny-date-range>
    <div class="value2">{{ value2 }}</div>
    <tiny-month-range v-model="value2" readonly></tiny-month-range>
    <div class="value3">{{ value3 }}</div>
    <tiny-year-range v-model="value3" readonly></tiny-year-range>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePanel, TinyDateRange, TinyMonthRange, TinyYearRange } from '@opentiny/vue'

const value = ref('2025-01-15')
const value1 = ref(['2025-01-15', '2025-02-15'])
const value2 = ref(['2024-03', '2025-02'])
const value3 = ref(['2024', '2028'])
</script>

<style scoped lang="less">
.demo-date-panel-wrap {
  width: 560px;
  & > * {
    margin-top: 12px;
  }
  .tiny-date-range-picker {
    width: 668px;
  }
}
</style>
