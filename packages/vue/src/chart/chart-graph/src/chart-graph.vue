<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-huicharts-core'
import { graph } from './graph'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartGraph',
  mixins: [Core],
  data() {
    return {
      iChartName: 'GraphChart'
    }
  },
  methods: {
    updateChart(data) {
      const { columns = [], rows = [] } = data
      const extra = {
        tooltipVisible: this.tooltipVisible,
        extend: this.extend
      }
      const option = graph(columns, rows, this.settings, extra)

      this.option = {
        ...option
      }
    }
  }
}
</script>
