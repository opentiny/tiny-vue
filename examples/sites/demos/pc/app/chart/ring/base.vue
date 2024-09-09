<template>
  <div>
    <tiny-ring :options="options"></tiny-ring>
  </div>
</template>

<script lang="jsx">
import { HuichartsRing } from '@opentiny/vue'

export default {
  components: {
    TinyRing: ChartRing
  },
  data() {
    return {
      options: {
        type: 'circle',
        data: [
          { value: 100, name: 'VPC' },
          { value: 98, name: 'IM' },
          { value: 49, name: 'EIP' },
          { value: 14, name: 'SG' }
        ]
      }
    }
  }
}
</script>
