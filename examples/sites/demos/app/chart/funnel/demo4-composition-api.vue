<template>
  <div>
    <tiny-chart-funnel :data="chartData" :settings="chartSettings"></tiny-chart-funnel>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartFunnel as TinyChartFunnel } from '@opentiny/vue'

const chartData = ref({
  columns: ['状态', '数值'],
  rows: [
    { 状态: '展示', 数值: 900 },
    { 状态: '访问', 数值: 600 },
    { 状态: '点击', 数值: 300 },
    { 状态: '订单', 数值: 100 }
  ]
})
// 定制顺序漏斗图
const chartSettings = ref({
  sequence: ['订单', '点击', '访问', '展示']
})
</script>
