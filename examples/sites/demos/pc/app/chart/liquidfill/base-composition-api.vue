<template>
  <div>
    <tiny-chart-liquidfill :options="options"></tiny-chart-liquidfill>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartLiquidfill as TinyChartLiquidfill } from '@opentiny/vue'

const options = ref({
  label: {
    formatter: '{a}\n\n购房比: {c}',
    fontSize: 40
  },
  legend: {
    show: false
  },
  series: [
    {
      name: '广东深圳',
      data: [
        0.6,
        {
          value: 0.5,
          itemStyle: {
            color: 'red'
          }
        },
        0.4
      ],
      center: ['25%', '50%'],
      shape: 'circle',
      waveAnimation: false
    },
    {
      name: '江苏南京',
      data: [0.7, 0.5, 0.4, 0.3],
      color: ['#BD72f0', '#6D8FF0', '#6D8FF0'],
      center: ['75%', '50%'],
      shape: 'rect'
    }
  ]
})
</script>
