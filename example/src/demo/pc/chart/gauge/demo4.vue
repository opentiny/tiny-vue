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
      // 设置指标别名与单位
      chartData: {
        columns: ['type', 'value'],
        rows: [{ type: 'speed', value: 60 }]
      },
      chartSettings: {
        labelMap: {
          speed: '速度'
        },
        dataName: {
          speed: 'km/h'
        }
      }
    }
  }
}
</script>
