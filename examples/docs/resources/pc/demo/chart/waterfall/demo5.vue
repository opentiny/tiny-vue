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
          { 活动: '吃饭', 时间: 4 },
          { 活动: '睡觉', 时间: 10 },
          { 活动: '打豆豆', 时间: 5 }
        ]
      },
      // 设置 总计、剩余 的名称
      chartSettings: {
        totalNum: 24,
        totalName: '总时间',
        remainName: '剩余时间'
      }
    }
  }
}
</script>
