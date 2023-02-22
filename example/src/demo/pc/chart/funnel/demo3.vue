<template>
  <div>
    <tiny-funnel :data="chartData" :settings="chartSettings"></tiny-funnel>
  </div>
</template>

<script>
import { ChartFunnel } from '@opentiny/vue'

export default {
  components: {
    TinyFunnel: ChartFunnel
  },
  data() {
    return {
      chartData: {
        columns: ['状态', '数值'],
        rows: [
          { 状态: '展示', 数值: 900 },
          { 状态: '访问', 数值: 100 },
          { 状态: '零', 数值: 0 },
          { 状态: '点击', 数值: 300 },
          { 状态: '订单', 数值: 200 }
        ]
      },
      // 自动按照数值排序并过滤0值
      chartSettings: {
        useDefaultOrder: true,
        filterZero: true
      }
    }
  }
}
</script>
