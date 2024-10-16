<template>
  <div>
    <tiny-chart-gauge :options="options"></tiny-chart-gauge>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { HuichartsGauge as TinyChartGauge } from '@opentiny/vue'

const options = ref({
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
})
</script>
