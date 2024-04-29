<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'
import { t } from '@opentiny/vue-locale'
import { pie } from './pie'

export default {
  name: 'ChartPie',
  mixins: [Core],

  data() {
    return {
      iChartName: 'PieChart'
    }
  },
  methods: {
    updateChart() {
      let { columns = [], rows = [] } = this.data

      const extra = {
        legendVisible: this.legendVisible,
        tooltipVisible: this.tooltipVisible,
        t
      }
      this.option = pie(columns, rows, this.settings, extra)
    }
  }
}
</script>
