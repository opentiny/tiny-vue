<template>
  <tiny-tabs v-model="activeName">
    <tiny-tab-item title="图表1" name="1">
      <tiny-chart-line :data="chartData" ref="chartRef1" cancel-resize-check></tiny-chart-line>
    </tiny-tab-item>
    <tiny-tab-item title="图表2" name="2">
      <tiny-chart-line :data="chartData" ref="chartRef2" cancel-resize-check></tiny-chart-line>
    </tiny-tab-item>
    <tiny-tab-item title="图表3" name="3">
      <tiny-chart-line :data="chartData" ref="chartRef3"></tiny-chart-line>
    </tiny-tab-item>
    <tiny-tab-item title="图表4" name="4">
      <tiny-chart-line :data="chartData" ref="chartRef4"></tiny-chart-line>
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { Tabs as TinyTabs, TabItem as TinyTabItem, ChartLine as TinyChartLine } from '@opentiny/vue'

const activeName = ref('1')
const chartData = ref({
  columns: ['日期', '销售额-1季度'],
  rows: [
    { 日期: '1月1日', '销售额-1季度': 1523 },
    { 日期: '1月2日', '销售额-1季度': 1223 },
    { 日期: '1月3日', '销售额-1季度': 2123 },
    { 日期: '1月4日', '销售额-1季度': 4123 },
    { 日期: '1月5日', '销售额-1季度': 3123 },
    { 日期: '1月6日', '销售额-1季度': 7123 }
  ]
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
