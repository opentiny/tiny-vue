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
          { 状态: '展示', 数值: 900 },
          { 状态: '访问', 数值: 600 },
          { 状态: '点击', 数值: 300 },
          { 状态: '订单', 数值: 100 }
        ]
      },
      // 金字塔
      chartSettings: {
        ascending: true
      }
    }
  }
}
</script>
