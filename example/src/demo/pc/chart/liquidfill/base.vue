<template>
  <div>
    <tiny-liquidfill :data="chartData" :settings="chartSettings"></tiny-liquidfill>
  </div>
</template>

<script>
import { ChartLiquidfill } from '@opentiny/vue'

export default {
  components: {
    TinyLiquidfill: ChartLiquidfill
  },
  data() {
    return {
      chartData: {
        columns: ['city', 'percent'],
        rows: [
          {
            city: '上海',
            percent: 0.6
          }
        ]
      },
      chartSettings: {}
    }
  }
}
</script>
