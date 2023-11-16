<template>
  <div>
    <tiny-chart-gauge :data="chartData" :settings="chartSettings"></tiny-chart-gauge>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartGauge as TinyChartGauge } from '@opentiny/vue'

// 指标维度配置
const chartData = ref({
  columns: ['a', 'b', 'type', 'value'],
  rows: [{ type: '速度', value: 80, a: 1, b: 2 }]
})
const chartSettings = ref({
  dimension: 'type',
  metrics: 'value'
})
</script>
