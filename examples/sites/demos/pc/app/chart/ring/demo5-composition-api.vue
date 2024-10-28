<template>
  <div>
    <tiny-chart-ring :options="options"></tiny-chart-ring>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { HuichartsRing as TinyChartRing } from '@opentiny/vue'

const options = ref({
  color: ['#10c7c1', '#ff88800'],
  position: {
    radius: ['12%', '15%'],
    center: ['50%', '50%']
  },
  silent: true,
  itemStyle: {
    borderWidth: 1
  },
  label: {
    show: false
  },
  legend: {
    show: false
  },
  data: [
    { value: 37, name: 'VPC' },
    { value: 3, name: 'IM' }
  ]
})
</script>
