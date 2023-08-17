<template>
  <div>
    <tiny-chart-liquidfill :data="chartData" :settings="chartSettings"></tiny-chart-liquidfill>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartLiquidfill as TinyChartLiquidfill } from '@opentiny/vue'

// 水球图文字标签及样式设置
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
      color: ['red'],
      itemStyle: {
        opacity: 0.2
      },
      emphasis: {
        itemStyle: {
          opacity: 0.8
        }
      },
      backgroundStyle: {
        color: 'yellow'
      },
      label: {
        formatter(options) {
          const { seriesName, value } = options
          return `${seriesName}\n${value * 100}%`
        },
        fontSize: 40,
        color: 'green',
        insideColor: 'red'
      }
    }
  }
})
</script>
