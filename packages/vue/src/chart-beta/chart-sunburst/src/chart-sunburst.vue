<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ height }"></div>
</template>

<script>
import { sunburst } from './sunburst'
import Core from '@opentiny/vue-chart-core-beta'

export default {
  name: 'ChartSunburst',
  mixins: [Core],
  data() {
    return {
      iChartName: 'SunburstChart',
      option: {}
    }
  },
  methods: {
    updateChart(data) {
      const { columns = [], rows = [] } = data
      const extra = {
        tooltipVisible: this.tooltipVisible,
        extend: this.extend
      }
      const option = sunburst(columns, rows, this.settings, extra)

      this.option = {
        ...option
      }
    }
  }
}
</script>
