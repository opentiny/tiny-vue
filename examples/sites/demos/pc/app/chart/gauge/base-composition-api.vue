<template>
  <div>
    <tiny-chart-gauge :data="chartData" :settings="chartSettings"></tiny-chart-gauge>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartGauge as TinyChartGauge } from '@opentiny/vue'

const chartData = ref({
  columns: ['type', 'a', 'b', 'value'],
  rows: [{ type: '速度', value: 80, a: 1, b: 2 }]
})
const chartSettings = ref({})
</script>
