<template>
  <div>
    <tiny-chart-funnel :options="options"></tiny-chart-funnel>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { HuichartsFunnel as TinyChartFunnel } from '@opentiny/vue'

const options = ref({
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
})
</script>
