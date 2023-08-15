<template>
  <div>
    <tiny-chart-liquidfill :data="chartData" :settings="chartSettings"></tiny-chart-liquidfill>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartLiquidfill as TinyChartLiquidfill } from '@opentiny/vue'

// 设置水球图的形状
const chartData = ref({
  columns: ['city', 'percent'],
  rows: [
    {
      city: '上海',
      percent: 0.6
    }
  ]
})
const chartSettings = ref({
  seriesMap: {
    上海: {
      shape: 'rect'
    }
  }
})
</script>
