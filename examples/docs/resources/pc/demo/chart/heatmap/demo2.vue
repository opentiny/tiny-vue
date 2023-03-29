<template>
  <div>
    <tiny-heatmap :data="chartData" :settings="chartSettings"></tiny-heatmap>
  </div>
</template>

<script lang="jsx">
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
          { 时间: '星期三', 地点: '上海', 人数: 300 },
          { 时间: '星期二', 地点: '杭州', 人数: 500 }
        ]
      },
      // 配置坐标轴
      chartSettings: {
        xAxisList: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        yAxisList: ['北京', '上海', '杭州', '深圳', '长春', '南京', '江苏']
      }
    }
  }
}
</script>
