<template>
  <div>
    <tiny-liquidfill :data="chartData" :settings="chartSettings"></tiny-liquidfill>
  </div>
</template>

<script lang="jsx">
import { ChartLiquidfill } from '@opentiny/vue'

export default {
  components: {
    TinyLiquidfill: ChartLiquidfill
  },
  data() {
    return {
      // 水球图分层
      chartData: {
        columns: ['city', 'percent'],
        rows: [
          {
            city: '上海',
            percent: 0.7
          }
        ]
      },
      chartSettings: {
        wave: [0.5, 0.3, 0.1],
        seriesMap: {
          上海: {
            color: ['red', 'green', 'yellow']
          }
        }
      }
    }
  }
}
</script>
