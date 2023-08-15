<template>
  <div>
    <tiny-chart-bar :data="chartData" :settings="chartSettings"></tiny-chart-bar>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartBar as TinyChartBar } from '@opentiny/vue'

const chartSettings = ref({
  xAxisType: ['KMB', 'KMB'],
  xAxisName: ['下单用户', '访问用户'],
  axisSite: {
    top: ['访问用户']
  }
})
const chartData = ref({
  columns: ['日期', '访问用户', '下单用户'],
  rows: [
    { 日期: '1/1', 访问用户: 1393, 下单用户: 1093 },
    { 日期: '1/2', 访问用户: 3530, 下单用户: 3230 },
    { 日期: '1/3', 访问用户: 2923, 下单用户: 2623 },
    { 日期: '1/4', 访问用户: 1723, 下单用户: 1423 },
    { 日期: '1/5', 访问用户: 3792, 下单用户: 3492 },
    { 日期: '1/6', 访问用户: 4593, 下单用户: 4293 }
  ]
})
</script>
