<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-huicharts-core'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartProcess',
  mixins: [Core],

  data() {
    return {
      iChartName: 'ProcessChart'
    }
  },
  methods: {
    updateChart() {
      this.option = { ...this.options }
    }
  }
}
</script>
