<template>
  <div>
    <tiny-pie :options="options"></tiny-pie>
  </div>
</template>

<script lang="jsx">
import { HuichartsPie } from '@opentiny/vue'

export default {
  components: {
    TinyPie: ChartPie
  },
  data() {
    return {
      options: {
        type: 'pie',

        // 自定义颜色组，圆盘图会循环使用该颜色组
        color: ['#fa2a2d', '#ff7500', '#ffbf00', '#41ba41', '#00aaee'],
        data: [
          { value: 100, name: 'VPC' },
          { value: 90, name: 'IM' },
          { value: 49, name: 'EIP' },
          { value: 14, name: 'SG' }
        ]
      }
    }
  }
}
</script>
