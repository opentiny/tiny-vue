<template>
  <div>
    <tiny-gauge :options="options"></tiny-gauge>
  </div>
</template>

<script lang="jsx">
import { TinyHuichartsGauge } from '@opentiny/vue'

export default {
  components: {
    TinyGauge: TinyHuichartsGauge
  },
  data() {
    return {
      options: {
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
