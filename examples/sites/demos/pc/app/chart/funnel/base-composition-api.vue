<template>
  <div>
    <tiny-chart-funnel :options="options"></tiny-chart-funnel>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartFunnel as TinyChartFunnel } from '@opentiny/vue'

const options = ref({
  data: [
    { value: 100, name: 'Show' },
    { value: 75, name: 'Click' },
    { value: 50, name: 'Visit' },
    { value: 25, name: 'Order' },
  ]
})
</script>
