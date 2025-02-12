<template>
  <div class="demo-date-panel-wrap">
    <div class="label">默认启用面板联动：</div>
    <div class="value-link">{{ value }}</div>
    <tiny-date-range v-model="value" type="daterange"></tiny-date-range>
    <div class="value-link1">{{ value1 }}</div>
    <tiny-month-range v-model="value1"></tiny-month-range>
    <div class="value-link2">{{ value2 }}</div>
    <tiny-year-range v-model="value2"></tiny-year-range>
    <br />
    <div class="label">关闭面板联动：</div>
    <div class="value-unlink">{{ value }}</div>
    <tiny-date-range v-model="value" type="daterange" unlink-panels></tiny-date-range>
    <div class="value-unlink1">{{ value1 }}</div>
    <tiny-month-range v-model="value1" unlink-panels></tiny-month-range>
    <div class="value-unlink2">{{ value2 }}</div>
    <tiny-year-range v-model="value2" unlink-panels></tiny-year-range>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDateRange, TinyMonthRange, TinyYearRange } from '@opentiny/vue'

const value = ref(['2025-01-15', '2025-02-15'])
const value1 = ref(['2024-03', '2025-02'])
const value2 = ref(['2024', '2028'])
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
