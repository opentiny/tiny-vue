<template>
  <div>
    <tiny-ring :options="options"></tiny-ring>
  </div>
</template>

<script lang="jsx">
import { ChartRing } from '@opentiny/vue'

export default {
  components: {
    TinyRing: ChartRing
  },
  data() {
    return {
      options: {
        color: ['#10c7c1', '#ff88800'],
        position: {
          radius: ['12%', '15%'],
          center: ['50%', '50%']
        },
        silent: true,
        itemStyle: {
          borderWidth: 1
        },
        label: {
          show: false
        },
        legend: {
          show: false
        },
        data: [
          { value: 37, name: 'VPC' },
          { value: 3, name: 'IM' }
        ]
      }
    }
  }
}
</script>
