<template>
  <div>
    <tiny-chart-gauge :options="options"></tiny-chart-gauge>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { HuichartsGauge as TinyChartGauge } from '@opentiny/vue'

const options = ref({
  min: 0,
  max: 1000,
  splitNumber: 4,

  // 阈值线，超出阈值线时，进度条会变红色
  markLine: 888,
  pointer: true,
  data: [
    {
      value: 900,
      name: 'Rgistered Persons'
    }
  ]
})
</script>
