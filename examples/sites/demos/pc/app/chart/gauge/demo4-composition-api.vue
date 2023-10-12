<template>
  <div>
    <tiny-chart-gauge :data="chartData" :settings="chartSettings"></tiny-chart-gauge>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartGauge as TinyChartGauge } from '@opentiny/vue'

// 设置指标别名与单位
const chartData = ref({
  columns: ['type', 'value'],
  rows: [{ type: 'speed', value: 60 }]
})
const chartSettings = ref({
  labelMap: {
    speed: '速度'
  },
  dataName: {
    speed: 'km/h'
  }
})
</script>
