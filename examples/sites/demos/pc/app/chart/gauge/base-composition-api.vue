<template>
  <div>
    <tiny-chart-gauge :options="options"></tiny-chart-gauge>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartGauge as TinyChartGauge } from '@opentiny/vue'

const options = ref({
  data: [
    {
      value: 71,
      name: 'Utilization rate'
    }
  ]
})
</script>
