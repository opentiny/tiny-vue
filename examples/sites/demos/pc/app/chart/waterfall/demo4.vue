<template>
  <div>
    <tiny-waterfall :data="chartData" :settings="chartSettings"></tiny-waterfall>
  </div>
</template>

<script lang="jsx">
import { ChartWaterfall } from '@opentiny/vue'

export default {
  components: {
    TinyWaterfall: ChartWaterfall
  },
  data() {
    return {
      chartData: {
        columns: ['活动', '时间'],
        rows: [
          { 活动: '吃饭', 时间: 0.1 },
          { 活动: '睡觉', 时间: 0.2 },
          { 活动: '打豆豆', 时间: 0.3 }
        ]
      },
      // 修改指标名称
      chartSettings: {
        labelMap: {
          时间: 'time'
        }
      }
    }
  }
}
</script>
