<template>
  <tiny-chart-pie :options="options" :events="chartEvents" judge-width> </tiny-chart-pie>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartPie as TinyChartPie, Modal as TinyModal } from '@opentiny/vue'

const options = ref({
  type: 'pie',
  data: [
    { name: '1/1', value: 1393 },
    { name: '1/2', value: 3530 },
    { name: '1/3', value: 2923 },
    { name: '1/4', value: 1723 },
    { name: '1/5', value: 3792 },
    { name: '1/6', value: 4593 }
  ]
})
const chartEvents = ref({
  click: (data) => {
    TinyModal.alert(`被点击日期：${data.name}`)
  }
})
</script>
