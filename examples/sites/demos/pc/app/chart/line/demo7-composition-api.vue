<template>
  <div>
    <tiny-chart-line :options="options"></tiny-chart-line>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { HuichartsLine as TinyChartLine } from '@opentiny/vue'

const options = ref({
  markLine: {
    top: 38,
    bottom: 20
  },
  data: [
    { 'Month': 'Jan', 'Domestic': 33 },
    { 'Month': 'Feb', 'Domestic': 27 },
    { 'Month': 'Mar', 'Domestic': 31 },
    { 'Month': 'Apr', 'Domestic': 30 },
    { 'Month': 'May', 'Domestic': 37 },
    { 'Month': 'Jun', 'Domestic': 36 },
    { 'Month': 'Jul', 'Domestic': 42 },
    { 'Month': 'Aug', 'Domestic': 22 },
    { 'Month': 'Sep', 'Domestic': 17 },
    { 'Month': 'Oct', 'Domestic': 40 },
    { 'Month': 'Nov', 'Domestic': 42 },
    { 'Month': 'Dec', 'Domestic': 32 }
  ],
  xAxis: 'Month',
  yAxis: {
    name: 'Percent(%)'
  }
})
</script>
