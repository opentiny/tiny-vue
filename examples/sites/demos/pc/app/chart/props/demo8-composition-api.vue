<template>
  <tiny-chart-line :data="chartData" :mark-line="markLine" :mark-point="markPoint"></tiny-chart-line>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartLine as TinyChartLine } from '@opentiny/vue'

const chartData = ref({
  columns: ['日期', '成本', '利润'],
  rows: [
    { 日期: '1月1日', 成本: 15, 利润: 12 },
    { 日期: '1月2日', 成本: 12, 利润: 25 },
    { 日期: '1月3日', 成本: 21, 利润: 10 },
    { 日期: '1月4日', 成本: 41, 利润: 32 },
    { 日期: '1月5日', 成本: 31, 利润: 30 },
    { 日期: '1月6日', 成本: 71, 利润: 55 }
  ]
})
const markLine = ref({
  data: [
    {
      name: '平均线',
      type: 'average'
    }
  ]
})
const markPoint = ref({
  data: [
    {
      name: '最大值',
      type: 'max'
    }
  ]
})
</script>
