<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ width, height }"></div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'
import { radar } from './radar'

export default {
  name: 'ChartRadar',
  mixins: [Core],
  props: {
    settings: {
      type: Object
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: '400px'
    }
  },
  data() {
    return {
      iChartName: 'RadarChart'
    }
  },
  methods: {
    updateChart(data) {
      let { columns = [], rows = [] } = data
      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        extend: this.extend
      }
      const option = radar(columns, rows, this.settings, extra)
      this.option = {
        ...option
      }
    }
  }
}
</script>
