<template>
  <div>
    <tiny-gauge :options="options"></tiny-gauge>
  </div>
</template>

<script lang="jsx">
import { HuichartsGauge } from '@opentiny/vue'

export default {
  components: {
    TinyGauge: ChartGauge
  },
  data() {
    return {
      options: {
        // gradientColor表示从仪表盘左到右的渐变色
        // gradientColor.length == 1 时也可以表示单色
        // 注意： splitColor 的优先级高于 gradientColor
        gradientColor: ['#00bfc9', '#a9e4a9'],
        data: [
          {
            value: 71,
            name: 'Utilization rate'
          }
        ]
      }
    }
  }
}
</script>
