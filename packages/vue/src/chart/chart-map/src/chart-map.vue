<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-huicharts-core'

import { map } from './map'
import * as echarts from 'echarts'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartMap',
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
