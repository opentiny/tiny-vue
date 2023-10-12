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
    { 状态: '展示', 数值: 0.9 },
    { 状态: '访问', 数值: 0.6 },
    { 状态: '点击', 数值: 0.3 },
    { 状态: '订单', 数值: 0.1 }
  ]
})
// 修改legend别名漏斗图
const chartSettings = ref({
  legendName: {
    订单: '订单 total:1000'
  }
})
</script>
