<template>
  <div>
    <tiny-chart-funnel :data="chartData" :settings="chartSettings"></tiny-chart-funnel>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartFunnel as TinyChartFunnel } from '@opentiny/vue'

const chartData = ref({
  columns: ['状态', '状态1', '数值'],
  rows: [
    { 状态: '展示', 状态1: '展示1', 数值: 900 },
    { 状态: '访问', 状态1: '访问1', 数值: 600 },
    { 状态: '点击', 状态1: '点击1', 数值: 300 },
    { 状态: '订单', 状态1: '订单1', 数值: 100 }
  ]
})
// 指定指标维度
const chartSettings = ref({
  dimension: '状态1',
  metrics: '数值'
})
</script>
