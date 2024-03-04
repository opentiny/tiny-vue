<template>
  <div>
    <tiny-chart-waterfall :data="chartData" :settings="chartSettings"></tiny-chart-waterfall>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartWaterfall as TinyChartWaterfall } from '@opentiny/vue'

const chartData = ref({
  columns: ['活动', '时间'],
  rows: [
    { 活动: '吃饭', 时间: 4 },
    { 活动: '睡觉', 时间: 10 },
    { 活动: '打豆豆', 时间: 5 }
  ]
})
const chartSettings = ref({})
</script>
