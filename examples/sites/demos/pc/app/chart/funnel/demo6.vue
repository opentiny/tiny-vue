<template>
  <div>
    <tiny-funnel :options="options"></tiny-funnel>
  </div>
</template>

<script lang="jsx">
import { HuichartsFunnel } from '@opentiny/vue'

export default {
  components: {
    TinyFunnel: HuichartsFunnel
  },
  data() {
    return {
      options: {
        legend: {
          show: true,
          icon: 'circle',
          top: 'center',
          left: '85%',
          orient: 'vertical'
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
