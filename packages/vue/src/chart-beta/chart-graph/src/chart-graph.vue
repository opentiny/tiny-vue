<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ width, height }"></div>
</template>

<script>
import Core from '@opentiny/vue-chart-core-beta'
import { graph } from './graph'

export default {
  name: 'ChartGraph',
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
