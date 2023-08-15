<template>
  <div>
    <p><button @click="addData">添加一条数据</button></p>
    <tiny-chart-line :data="chartData" :settings="chartSettings" :width-change-delay="300"></tiny-chart-line>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartLine as TinyChartLine } from '@opentiny/vue'

const chartData = ref({
  columns: ['日期', 'value'],
  rows: [
    { 日期: '1月1日', value: 1523 },
    { 日期: '1月2日', value: 1223 },
    { 日期: '1月3日', value: 2123 },
    { 日期: '1月4日', value: 4123 },
    { 日期: '1月5日', value: 3123 },
    { 日期: '1月6日', value: 7123 }
  ]
})
const chartSettings = ref({})

function addData() {
  chartData.value.rows.push({
    日期: `1月${chartData.value.rows.length + 1}日`,
    value: Math.ceil(10000 * Math.random())
  })
}
</script>
