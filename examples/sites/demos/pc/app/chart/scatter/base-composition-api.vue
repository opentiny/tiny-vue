<template>
  <div>
    <tiny-chart-scatter :data="chartData" :settings="chartSettings"></tiny-chart-scatter>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartScatter as TinyChartScatter } from '@opentiny/vue'

// 单维度多指标散点图示例
const chartData = ref({
  columns: ['日期', '访问用户', '下单用户', '年龄'],
  rows: [
    { 日期: '1/1', 访问用户: 123, 年龄: 3, 下单用户: 1244 },
    { 日期: '1/2', 访问用户: 1223, 年龄: 6, 下单用户: 2344 },
    { 日期: '1/3', 访问用户: 7123, 年龄: 9, 下单用户: 3245 },
    { 日期: '1/4', 访问用户: 4123, 年龄: 12, 下单用户: 4355 },
    { 日期: '1/5', 访问用户: 3123, 年龄: 15, 下单用户: 4564 },
    { 日期: '1/6', 访问用户: 2323, 年龄: 20, 下单用户: 6537 }
  ]
})
const chartSettings = ref({})
</script>
