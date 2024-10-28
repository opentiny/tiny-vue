<template>
  <div>
    <tiny-chart-histogram :options="options" :extend="chartExtend1" height="400px" width="auto"></tiny-chart-histogram>
    <tiny-chart-histogram :options="options" :extend="chartExtend2"></tiny-chart-histogram>
    <tiny-chart-histogram :options="options" :extend="chartExtend3"></tiny-chart-histogram>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { HuichartsHistogram as TinyChartHistogram } from '@opentiny/vue'

const options = ref({
  padding: [50, 30, 50, 20],
  legend: {
    show: true,
    icon: 'line'
  },
  data: [
    { 'Month': 'Jan', 'Domestics': 33, 'Abroad': 37 },
    { 'Month': 'Feb', 'Domestics': 27, 'Abroad': 39 },
    { 'Month': 'Mar', 'Domestics': 31, 'Abroad': 20 },
    { 'Month': 'Apr', 'Domestics': 30, 'Abroad': 15 },
    { 'Month': 'May', 'Domestics': 37, 'Abroad': 13 },
    { 'Month': 'Jun', 'Domestics': 36, 'Abroad': 17 },
    { 'Month': 'Jul', 'Domestics': 42, 'Abroad': 22 },
    { 'Month': 'Aug', 'Domestics': 22, 'Abroad': 12 },
    { 'Month': 'Sep', 'Domestics': 17, 'Abroad': 30 },
    { 'Month': 'Oct', 'Domestics': 40, 'Abroad': 33 },
    { 'Month': 'Nov', 'Domestics': 42, 'Abroad': 22 },
    { 'Month': 'Dec', 'Domestics': 32, 'Abroad': 11 }
  ],
  xAxis: {
    data: 'Month'
  },
  yAxis: {
    name: 'precentage(%)'
  }
})
// chartExtend1、chartExtend2、chartExtend3 设置是等效的
const chartExtend1 = ref({
  series: [
    {
      barWidth: 10
    },
    {
      barWidth: 10
    }
  ],
  tooltip: {
    trigger: 'none'
  }
})
const chartExtend2 = ref({
  series: {
    barWidth: 10
  },
  tooltip: {
    trigger: 'none'
  }
})
const chartExtend3 = ref({
  series(v) {
    v.forEach((i) => {
      i.barWidth = 10
    })

    return v
  },
  tooltip(v) {
    v.trigger = 'none'

    return v
  }
})
</script>
