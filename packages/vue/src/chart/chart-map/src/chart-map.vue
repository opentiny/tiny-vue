<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ width, height }"></div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'

import { map } from './map'
import * as echarts from 'echarts'

export default {
  name: 'ChartMap',
  mixins: [Core],

  data() {
    return {
      iChartName: 'RegionChart'
    }
  },
  methods: {
    updateChart() {
      let { columns = [], rows = [] } = this.data

      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        extend: this.extend,
        echarts,
        color: ['#2070F3', '#55CCD9', '#715AF8', '#8AC8F3'],
        _once: {
          onresize: true
        }
      }

      const option = map(columns, rows, this.settings, extra)

      this.option = {
        ...option
      }
    }
  }
}
</script>
