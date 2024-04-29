<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'
import { scatter } from './scatter'

export default {
  name: 'ChartScatter',
  mixins: [Core],

  data() {
    return {
      iChartName: 'BubbleChart'
    }
  },
  methods: {
    updateChart() {
      let { columns = [], rows = [] } = this.data

      const extra = {
        legendVisible: this.legendVisible,
        tooltipVisible: this.tooltipVisible
      }
      const option = scatter(columns, rows, this.settings, extra)
      this.option = { ...option }
    }
  }
}
</script>
