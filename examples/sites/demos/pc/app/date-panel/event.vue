<template>
  <div class="demo-date-panel-wrap">
    <div class="value">{{ value }}</div>
    <tiny-date-panel v-model="value" @select-change="handleSelectChange"></tiny-date-panel>
    <div class="month">{{ month }}</div>
    <tiny-date-panel v-model="month" type="month" @select-change="handleSelectChangeMonth"></tiny-date-panel>
    <div class="year">{{ year }}</div>
    <tiny-date-panel v-model="year" type="year" @select-change="handleSelectChangeYear"></tiny-date-panel>
    <div class="value1">{{ value1 }}</div>
    <tiny-date-range type="daterange" v-model="value1" @select-change="handleSelectChange1"></tiny-date-range>
    <div class="value2">{{ value2 }}</div>
    <tiny-month-range v-model="value2" @select-change="handleSelectChange2"></tiny-month-range>
    <div class="value3">{{ value3 }}</div>
    <tiny-year-range v-model="value3" @select-change="handleSelectChange3"></tiny-year-range>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePanel, TinyDateRange, TinyMonthRange, TinyYearRange, TinyModal } from '@opentiny/vue'

const value = ref('2025-01-15')
const month = ref('2025-01')
const year = ref('2025')
const value1 = ref(['2025-01-15', '2025-02-15'])
const value2 = ref(['2024-03', '2025-02'])
const value3 = ref(['2024', '2028'])

const handleSelectChange = (value) => {
  TinyModal.message({ message: '触发 面板选中 事件，组件绑定值为：' + value, status: 'info' })
}

const handleSelectChangeMonth = (value) => {
  TinyModal.message({ message: '触发 月份面板选中 事件，组件绑定值为：' + value, status: 'info' })
}

const handleSelectChangeYear = (value) => {
  TinyModal.message({ message: '触发 年份面板选中 事件，组件绑定值为：' + value, status: 'info' })
}

const handleSelectChange1 = (value) => {
  TinyModal.message({ message: '触发 区间面板选中 事件，组件绑定值为：' + value, status: 'info' })
}

const handleSelectChange2 = (value) => {
  TinyModal.message({ message: '触发 月份区间面板选中 事件，组件绑定值为：' + value, status: 'info' })
}

const handleSelectChange3 = (value) => {
  TinyModal.message({ message: '触发 年份区间面板选中 事件，组件绑定值为：' + value, status: 'info' })
}
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
