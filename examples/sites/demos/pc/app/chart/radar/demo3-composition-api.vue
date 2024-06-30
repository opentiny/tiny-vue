<template>
  <div>
    <tiny-radar :options="options"></tiny-radar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChartRadar as TinyRadar } from '@opentiny/vue'

const options = ref({
  color: ['#fa2a2d', '#ff7500', '#ffbf00', '#41ba41', '#00aaee'], // 自定义颜色组，会循环使用该颜色组
  legend: {
    show: true,
    position: {
      left: 'center',
      bottom: 20
    },
    orient: 'horizontal'
  },
  radarMax: 100,
  data: {
    'Domestic': {
      'Equipment': 41,
      'VM': 91,
      'CSP': 81,
      'RD': 51,
      'Markets': 71
    },
    'Abroad': {
      'Equipment': 77,
      'VM': 55,
      'CSP': 93,
      'RD': 90,
      'Markets': 87
    }
  }
})
</script>
