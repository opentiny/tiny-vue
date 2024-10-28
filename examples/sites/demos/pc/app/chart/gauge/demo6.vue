<template>
  <div>
    <tiny-gauge :options="options"></tiny-gauge>
  </div>
</template>

<script lang="jsx">
import { HuichartsGauge } from '@opentiny/vue'

export default {
  components: {
    TinyGauge: HuichartsGauge
  },
  data() {
    return {
      options: {
        min: 0,
        max: 1000,
        splitNumber: 4,

        // 阈值线，超出阈值线时，进度条会变红色
        markLine: 888,
        pointer: true,
        data: [
          {
            value: 900,
            name: 'Rgistered Persons'
          }
        ]
      }
    }
  }
}
</script>
