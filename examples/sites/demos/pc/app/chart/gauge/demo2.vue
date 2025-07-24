<template>
  <div>
    <tiny-gauge :options="options"></tiny-gauge>
  </div>
</template>

<script lang="jsx">
import { TinyHuichartsGauge } from '@opentiny/vue-huicharts'

export default {
  components: {
    TinyGauge: TinyHuichartsGauge
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
