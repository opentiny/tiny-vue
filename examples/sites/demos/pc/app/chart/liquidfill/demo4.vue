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
      // 设置水球图的形状
      chartData: {
        columns: ['city', 'percent'],
        rows: [
          {
            city: '上海',
            percent: 0.6
          }
        ]
      },
      chartSettings: {
        seriesMap: {
          上海: {
            shape: 'rect'
          }
        }
      }
    }
  }
}
</script>
