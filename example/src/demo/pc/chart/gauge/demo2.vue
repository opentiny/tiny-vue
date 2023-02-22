<template>
  <div>
    <tiny-gauge :data="chartData" :settings="chartSettings"></tiny-gauge>
  </div>
</template>

<script>
import { ChartGauge } from '@opentiny/vue'

export default {
  components: {
    TinyGauge: ChartGauge
  },
  data() {
    return {
      // 指标维度配置
      chartData: {
        columns: ['a', 'b', 'type', 'value'],
        rows: [{ type: '速度', value: 80, a: 1, b: 2 }]
      },
      chartSettings: {
        dimension: 'type',
        metrics: 'value'
      }
    }
  }
}
</script>
