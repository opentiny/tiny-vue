<template>
  <div>
    <tiny-chart-pie :options="options"></tiny-chart-pie>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { HuichartsPie as TinyChartPie } from '@opentiny/vue'

const options = ref({
  type: 'pie',
  position: {
    center: ['50%', '50%']
  },
  legend: {
    show: true,
    position: {
      right: '10%',
      top: 'center'
    },
    orient: 'vertical'
  },
  label: {
    show: true,
    type: 'percent',
    line: true
  },
  data: [
    { value: 100, name: 'VPC' },
    { value: 90, name: 'IM' },
    { value: 49, name: 'EIP' },
    { value: 14, name: 'SG' },
    { value: 120, name: 'OTHER' }
  ]
})
</script>
