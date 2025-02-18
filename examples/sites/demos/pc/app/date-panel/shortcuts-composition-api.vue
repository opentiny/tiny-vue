<template>
  <div class="demo-date-panel-wrap">
    <div class="value">{{ value }}</div>
    <tiny-date-panel v-model="value" :shortcuts="shortcuts"></tiny-date-panel>
    <div class="month">{{ month }}</div>
    <tiny-date-panel v-model="month" type="month" :shortcuts="shortcutsMonth"></tiny-date-panel>
    <div class="year">{{ year }}</div>
    <tiny-date-panel v-model="year" type="year" :shortcuts="shortcutsYear"></tiny-date-panel>
    <div class="value1">{{ value1 }}</div>
    <tiny-date-range type="daterange" v-model="value1" :shortcuts="shortcuts1"></tiny-date-range>
    <div class="value2">{{ value2 }}</div>
    <tiny-month-range v-model="value2" :shortcuts="shortcuts2"></tiny-month-range>
    <div class="value3">{{ value3 }}</div>
    <tiny-year-range v-model="value3" :shortcuts="shortcuts3"></tiny-year-range>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePanel, TinyDateRange, TinyMonthRange, TinyYearRange } from '@opentiny/vue'

const value = ref('2025-01-15')
const month = ref('2025-01')
const year = ref('2025')
const value1 = ref(['2025-01-15', '2025-02-15'])
const value2 = ref(['2024-03', '2025-02'])
const value3 = ref(['2024', '2028'])
const shortcuts = [
  {
    text: '今天',
    onClick(picker) {
      const date = new Date()
      picker.$emit('pick', date)
    }
  },
  {
    text: '昨天',
    onClick(picker) {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      picker.$emit('pick', date)
    }
  },
  {
    text: '一周前',
    onClick(picker) {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', date)
    }
  }
]

const shortcutsMonth = [
  {
    text: '一个月前',
    onClick(picker) {
      const date = new Date()
      date.setMonth(date.getMonth() - 1)
      picker.$emit('pick', date)
    }
  },
  {
    text: '三个月前',
    onClick(picker) {
      const date = new Date()
      date.setMonth(date.getMonth() - 3)
      picker.$emit('pick', date)
    }
  },
  {
    text: '六个月前',
    onClick(picker) {
      const date = new Date()
      date.setMonth(date.getMonth() - 6)
      picker.$emit('pick', date)
    }
  }
]

const shortcutsYear = [
  {
    text: '一年前',
    onClick(picker) {
      const date = new Date()
      date.setFullYear(date.getFullYear() - 1)
      picker.$emit('pick', date)
    }
  },
  {
    text: '五年前',
    onClick(picker) {
      const date = new Date()
      date.setFullYear(date.getFullYear() - 5)
      picker.$emit('pick', date)
    }
  },
  {
    text: '十年前',
    onClick(picker) {
      const date = new Date()
      date.setFullYear(date.getFullYear() - 10)
      picker.$emit('pick', date)
    }
  }
]

const shortcuts1 = [
  {
    text: '最近一周',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', [start, end])
    }
  },
  {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      picker.$emit('pick', [start, end])
    }
  },
  {
    text: '最近三个月',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      picker.$emit('pick', [start, end])
    }
  }
]

const shortcuts2 = [
  {
    text: '本月',
    onClick(picker) {
      const date = new Date()
      const tmp = new Date(date.getFullYear(), date.getMonth() + 1, 1, 0, 0, 0)
      const start = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0)
      const end = new Date(tmp.getTime() - 1)
      picker.$emit('pick', [start, end])
    }
  },
  {
    text: '今年至今',
    onClick(picker) {
      const date = new Date()
      const start = new Date(date.getFullYear(), 0)
      const end = new Date()
      picker.$emit('pick', [start, end])
    }
  },
  {
    text: '最近六个月',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setMonth(start.getMonth() - 6)
      picker.$emit('pick', [start, end])
    }
  }
]

const shortcuts3 = [
  {
    text: '本年',
    onClick(picker) {
      const date = new Date()
      const tmp = new Date(date.getFullYear(), 0, 2)
      const start = new Date(date.getFullYear(), 0, 2)
      const end = new Date(tmp.getTime() - 1)
      picker.$emit('pick', [start, end])
    }
  },
  {
    text: '近五年',
    onClick(picker) {
      const date = new Date()
      const start = new Date(date.getFullYear() - 5, 0, 2)
      const end = date
      picker.$emit('pick', [start, end])
    }
  },
  {
    text: '近十年',
    onClick(picker) {
      const date = new Date()
      const start = new Date(date.getFullYear() - 10, 0, 2)
      const end = new Date()
      picker.$emit('pick', [start, end])
    }
  }
]
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
