<template>
  <div>
    <tiny-chart-gauge :data="chartData" :settings="chartSettings"></tiny-chart-gauge>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartGauge as TinyChartGauge } from '@opentiny/vue'

// 设置数据类型
const chartData = ref({
  columns: ['type', 'value'],
  rows: [{ type: '占比', value: 0.8 }]
})
const chartSettings = ref({
  dataType: {
    占比: 'percent'
  },
  seriesMap: {
    占比: {
      min: 0,
      max: 1
    }
  }
})
</script>
