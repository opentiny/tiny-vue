<template>
  <div>
    <tiny-funnel :options="options"></tiny-funnel>
  </div>
</template>

<script lang="jsx">
import { HuichartsFunnel } from '@opentiny/vue'

export default {
  components: {
    TinyFunnel: ChartFunnel
  },
  data() {
    return {
      options: {
        gap: 10,
        size: {
          width: '80%',
          height: '80%',
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%'
        },
        position: {
          left: 'center',
          right: '80%',
          top: 60,
          bottom: 60,
          funnelAlign: 'center',
          orient: 'horizontal'
        },
        data: [
          { value: 100, name: 'Show' },
          { value: 75, name: 'Click' },
          { value: 50, name: 'Visit' },
          { value: 25, name: 'Order' }
        ]
      }
    }
  }
}
</script>
