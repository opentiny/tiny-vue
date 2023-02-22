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
      // 设置数据类型
      chartData: {
        columns: ['type', 'value'],
        rows: [{ type: '占比', value: 0.8 }]
      },
      chartSettings: {
        dataType: {
          占比: 'percent'
        },
        seriesMap: {
          占比: {
            min: 0,
            max: 1
          }
        }
      }
    }
  }
}
</script>
