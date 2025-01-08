<template>
  <tiny-chart-line :data="chartData" :settings="chartSettings"> </tiny-chart-line>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyHuichartsLine as TinyChartLine } from '@opentiny/vue'

const chartSettings = {
  yAxisType: ['percent'],
  digit: 3
}
const chartData = ref({
  columns: ['日期', 'value'],
  rows: [
    { 日期: '1 月 1 日', value: 0.00001 },
    { 日期: '1 月 2 日', value: 0.00002 },
    { 日期: '1 月 3 日', value: 0.00003 },
    { 日期: '1 月 4 日', value: 0.00004 },
    { 日期: '1 月 5 日', value: 0.00005 },
    { 日期: '1 月 6 日', value: 0.00006 }
  ]
})
</script>
