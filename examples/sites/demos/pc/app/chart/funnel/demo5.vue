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
        columns: ['状态', '数值'],
        rows: [
          { 状态: '展示', 数值: 0.9 },
          { 状态: '访问', 数值: 0.6 },
          { 状态: '点击', 数值: 0.3 },
          { 状态: '订单', 数值: 0.1 }
        ]
      },
      // 指定数据类型漏斗图
      chartSettings: {
        dataType: 'percent'
      }
    }
  }
}
</script>
