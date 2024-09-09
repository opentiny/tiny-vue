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
        label: {
          show: true,
          type: 'percent'
        },

        // 图表描边颜色配置
        itemStyle: {
          borderColor: '#F36900'
        },
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
