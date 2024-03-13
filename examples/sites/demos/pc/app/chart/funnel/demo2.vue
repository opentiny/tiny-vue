<template>
  <div>
    <tiny-funnel :data="chartData" :settings="chartSettings"></tiny-funnel>
  </div>
</template>

<script lang="jsx">
import { ChartFunnel } from '@opentiny/vue'

export default {
  components: {
    TinyFunnel: ChartFunnel
  },
  data() {
    return {
      chartData: {
        columns: ['状态', '状态1', '数值'],
        rows: [
          { 状态: '展示', 状态1: '展示1', 数值: 900 },
          { 状态: '访问', 状态1: '访问1', 数值: 600 },
          { 状态: '点击', 状态1: '点击1', 数值: 300 },
          { 状态: '订单', 状态1: '订单1', 数值: 100 }
        ]
      },
      // 指定指标维度
      chartSettings: {
        dimension: '状态1',
        metrics: '数值'
      }
    }
  }
}
</script>
