<template>
  <div>
    <tiny-chart-histogram :options="options"></tiny-chart-histogram>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartHistogram as TinyChartHistogram } from '@opentiny/vue'

const options = ref({
  itemStyle: {
    barMinHeight: 2 // 最小高度为2
  },
  data: [
    { 'Month': 'Jan', 'Value': 100 },
    { 'Month': 'Feb', 'Value': 0.01 },
    { 'Month': 'Mar', 'Value': 0.01 },
    { 'Month': 'Apr', 'Value': 0.01 },
    { 'Month': 'May', 'Value': 0.01 },
    { 'Month': 'Jun', 'Value': 0.01 },
    { 'Month': 'Jul', 'Value': 0.01 },
    { 'Month': 'Aug', 'Value': 0.01 },
    { 'Month': 'Sep', 'Value': 0.01 },
    { 'Month': 'Oct', 'Value': 0.01 },
    { 'Month': 'Nov', 'Value': 0.01 },
    { 'Month': 'Dec', 'Value': 0.01 }
  ],
  xAxis: {
    data: 'Month'
  },
  yAxis: {
    name: 'Percent(%)'
  }
})
</script>
