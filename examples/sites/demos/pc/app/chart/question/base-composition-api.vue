<template>
  <tiny-tabs v-model="activeName">
    <tiny-tab-item title="图表1" name="1">
      <tiny-chart-line :options="options" ref="chartRef1" cancel-resize-check></tiny-chart-line>
    </tiny-tab-item>
    <tiny-tab-item title="图表2" name="2">
      <tiny-chart-line :options="options" ref="chartRef2" cancel-resize-check></tiny-chart-line>
    </tiny-tab-item>
    <tiny-tab-item title="图表3" name="3">
      <tiny-chart-line :options="options" ref="chartRef3"></tiny-chart-line>
    </tiny-tab-item>
    <tiny-tab-item title="图表4" name="4">
      <tiny-chart-line :options="options" ref="chartRef4"></tiny-chart-line>
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { Tabs as TinyTabs, TabItem as TinyTabItem, HuichartsLine as TinyChartLine } from '@opentiny/vue'

const activeName = ref('1')
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
const chartRef1 = ref()
const chartRef2 = ref()
const chartRef3 = ref()
const chartRef4 = ref()

watch(activeName, (v) => {
  nextTick(() => {
    chartRef1.value.resize()
    chartRef2.value.resize()
    chartRef3.value.resize()
    chartRef4.value.resize()
  })
})
</script>
