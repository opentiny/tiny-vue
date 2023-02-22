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
      chartData: {
        columns: ['type', 'a', 'b', 'value'],
        rows: [{ type: '速度', value: 80, a: 1, b: 2 }]
      },
      chartSettings: {}
    }
  }
}
</script>
