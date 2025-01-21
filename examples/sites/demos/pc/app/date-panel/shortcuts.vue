<template>
  <div class="demo-date-panel-wrap">
    <div class="value">{{ value }}</div>
    <tiny-date-panel v-model="value" :shortcuts="shortcuts"></tiny-date-panel>
    <div class="value1">{{ value1 }}</div>
    <tiny-date-range type="daterange" v-model="value1" :shortcuts="shortcuts1"></tiny-date-range>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePanel, TinyDateRange } from '@opentiny/vue'

const value = ref('2025-01-15')
const value1 = ref(['2025-01-15', '2025-02-15'])
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
