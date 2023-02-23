<template>
  <div>
    <tiny-heatmap :data="chartData" :visual-map="chartVisualMap" :grid="chartGrid"></tiny-heatmap>
  </div>
</template>

<script>
import { ChartHeatmap } from '@opentiny/vue'

export default {
  components: {
    TinyHeatmap: ChartHeatmap
  },
  data() {
    return {
      chartData: {
        columns: ['时间', '地点', '人数'],
        rows: [
          { 时间: '星期一', 地点: '北京', 人数: 1000 },
          { 时间: '星期二', 地点: '上海', 人数: 400 },
          { 时间: '星期三', 地点: '杭州', 人数: 800 },
          { 时间: '星期二', 地点: '深圳', 人数: 200 },
          { 时间: '星期三', 地点: '长春', 人数: 100 },
          { 时间: '星期五', 地点: '南京', 人数: 300 },
          { 时间: '星期四', 地点: '江苏', 人数: 800 },
          { 时间: '星期三', 地点: '北京', 人数: 700 },
          { 时间: '星期三', 地点: '上海', 人数: 200 },
          { 时间: '星期二', 地点: '杭州', 人数: 500 }
        ]
      },
      // 自定义 visualMap
      chartVisualMap: {
        min: 0,
        max: 1500,
        type: 'piecewise',
        right: 0,
        top: '50%'
      },
      chartGrid: {
        right: 100
      }
    }
  }
}
</script>
