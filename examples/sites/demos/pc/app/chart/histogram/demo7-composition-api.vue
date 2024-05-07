<template>
  <div>
    <tiny-chart-histogram :options="options"></tiny-chart-histogram>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartHistogram as TinyChartHistogram } from '@opentiny/vue'

const options = ref({
  legend: {
    show: true
  },
  label: {
    position: 'top',
    show: true,
    offset: [0, -6]
  },
  data: [
    { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 1 },
    { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
    { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
    { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
    { 'Month': 'May', 'Domestic': 37, 'Abroad': 1 },
    { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
    { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
    { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
    { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
    { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
    { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
    { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 1 },

  ],
  xAxis: 'Month'
})
</script>
