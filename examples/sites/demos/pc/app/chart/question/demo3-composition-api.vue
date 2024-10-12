<template>
  <tiny-chart-line :data="chartData" :settings="chartSettings"> </tiny-chart-line>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { HuichartsLine as TinyChartLine } from '@opentiny/vue'

const chartSettings = {
  yAxisType: ['percent'],
  digit: 3
}
const chartData = ref({
  columns: ['日期', 'value'],
  rows: [
    { 日期: '1月1日', value: 0.00001 },
    { 日期: '1月2日', value: 0.00002 },
    { 日期: '1月3日', value: 0.00003 },
    { 日期: '1月4日', value: 0.00004 },
    { 日期: '1月5日', value: 0.00005 },
    { 日期: '1月6日', value: 0.00006 }
  ]
})
</script>
