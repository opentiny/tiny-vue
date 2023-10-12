<template>
  <div>
    <tiny-chart-liquidfill :data="chartData" :settings="chartSettings"></tiny-chart-liquidfill>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartLiquidfill as TinyChartLiquidfill } from '@opentiny/vue'

// 设置多个水球图
const chartData = ref({
  columns: ['city', 'percent'],
  rows: [
    {
      city: '上海',
      percent: 0.6
    },
    {
      city: '广州',
      percent: 0.4
    },
    {
      city: '成都',
      percent: 0.9
    }
  ]
})
const chartSettings = ref({
  wave: [[0.5, 0.3, 0.1], [0.3, 0.2], []],
  seriesMap: [
    {
      color: ['red', 'green', 'yellow'],
      label: {
        formatter(options) {
          const {
            seriesName,
            data: { value }
          } = options
          return `${seriesName}\n${value}`
        },
        fontSize: 30
      },
      center: ['24%', '20%'],
      radius: '40%',
      waveAnimation: false
    },
    {
      label: {
        formatter(options) {
          return `${options.seriesName}\n${options.data.value}`
        },
        fontSize: 30
      },
      center: ['25%', '70%'],
      radius: '40%'
    },
    {
      label: {
        fontSize: 30
      },
      center: ['70%', '50%'],
      radius: '40%',
      waveAnimation: false
    }
  ]
})
</script>
