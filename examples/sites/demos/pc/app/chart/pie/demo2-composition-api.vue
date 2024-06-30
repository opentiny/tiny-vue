<template>
  <div>
    <tiny-chart-pie :options="options"></tiny-chart-pie>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartPie as TinyChartPie } from '@opentiny/vue'

const options = ref({
  type: 'pie',

  // 自定义颜色组，圆盘图会循环使用该颜色组
  color: ['#fa2a2d', '#ff7500', '#ffbf00', '#41ba41', '#00aaee'],
  data: [
    { value: 100, name: 'VPC' },
    { value: 90, name: 'IM' },
    { value: 49, name: 'EIP' },
    { value: 14, name: 'SG' }
  ]
})
</script>
