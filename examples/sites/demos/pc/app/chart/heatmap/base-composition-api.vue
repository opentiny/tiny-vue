<template>
  <div>
    <tiny-chart-heatmap :data="chartData" :settings="chartSettings"></tiny-chart-heatmap>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartHeatmap as TinyChartHeatmap } from '@opentiny/vue'

const chartData = ref({
  columns: ['时间', '地点', '人数'],
  rows: [
    { 时间: '星期一', 地点: '北京', 人数: 1000 },
    { 时间: '星期二', 地点: '上海', 人数: 400 },
    { 时间: '星期三', 地点: '杭州', 人数: 800 },
    { 时间: '星期二', 地点: '深圳', 人数: 200 },
    { 时间: '星期三', 地点: '长春', 人数: 100 },
    { 时间: '星期五', 地点: '南京', 人数: 300 },
    { 时间: '星期四', 地点: '江苏', 人数: 800 },
    { 时间: '星期一', 地点: '北京', 人数: 700 },
    { 时间: '星期三', 地点: '上海', 人数: 300 },
    { 时间: '星期二', 地点: '杭州', 人数: 500 }
  ]
})
const chartSettings = ref({})
</script>
