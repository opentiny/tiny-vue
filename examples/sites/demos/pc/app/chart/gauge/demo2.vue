<template>
  <div>
    <tiny-gauge :options="options"></tiny-gauge>
  </div>
</template>

<script lang="jsx">
import { ChartGauge } from '@opentiny/vue'

export default {
  components: {
    TinyGauge: ChartGauge
  },
  data() {
    return {
      options: {
        // 仪表盘的最小值
        min: 0,

        // 仪表盘的最大值
        max: 1000,
        pointer: true,
        data: [
          {
            value: 666,
            name: 'Utilization rate'
          }
        ]
      }
    }
  }
}
</script>
