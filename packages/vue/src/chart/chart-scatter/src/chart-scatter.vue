<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '../../chart-core'
import { scatter } from './scatter'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartScatter',
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
