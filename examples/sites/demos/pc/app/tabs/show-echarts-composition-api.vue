<template>
  <tiny-tabs v-model="activeName" tab-style="card">
    <tiny-tab-item title="条形图组件" name="first">
      <tiny-chart-bar ref="firstChartRef" :data="chartData"></tiny-chart-bar>
    </tiny-tab-item>
    <tiny-tab-item title="油量表组件" name="second">
      <tiny-chart-gauge ref="secondChartRef" :data="chartData1"></tiny-chart-gauge>
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script setup lang="jsx">
import { ref, watch, nextTick } from 'vue'
import {
  Tabs as TinyTabs,
  TabItem as TinyTabItem,
  ChartBar as TinyChartBar,
  ChartGauge as TinyChartGauge
} from '@opentiny/vue'

const activeName = ref('second')
const chartData = ref({
  columns: ['日期', '余额', '年龄'],
  rows: [
    { 日期: '1-1', 余额: 123, 年龄: 3 },
    { 日期: '1-2', 余额: 1223, 年龄: 6 },
    { 日期: '1-3', 余额: 2123, 年龄: 9 },
    { 日期: '1-4', 余额: 4123, 年龄: 12 },
    { 日期: '1-5', 余额: 3123, 年龄: 15 },
    { 日期: '1-6', 余额: 7123, 年龄: 20 }
  ]
})
const chartData1 = ref({
  columns: ['type', 'value'],
  rows: [{ type: '油量', value: 123 }]
})
const firstChartRef = ref()
const secondChartRef = ref()

watch(activeName, () => {
  nextTick(() => {
    firstChartRef.value.resize()
    secondChartRef.value.resize()
  })
})
</script>
