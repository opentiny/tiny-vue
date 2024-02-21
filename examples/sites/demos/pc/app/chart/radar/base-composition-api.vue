<template>
  <div>
    <tiny-radar :data="chartData" :settings="chartSettings"></tiny-radar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChartRadar as TinyRadar } from '@opentiny/vue'

const chartData = ref({
  columns: ['日期', '访问用户', '下单用户', '下单率', 'aa', 'bb'],
  rows: [
    { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 2023, aa: 1444, bb: 2100 },
    { 日期: '1/2', 访问用户: 1530, 下单用户: 1230, 下单率: 1300, aa: 1144, bb: 1552 }
  ]
})
const chartSettings = ref({
  // label: {show: true, position: 'top'}
})
</script>
