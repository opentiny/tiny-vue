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
  selectedMode: 'multipe',
  data: [
    { value: 100, name: 'VPC' },
    { value: 90, name: 'IM' },
    { value: 49, name: 'EIP' },
    { value: 14, name: 'SG' }
  ]
})
</script>
