<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-huicharts-core'
import { radar } from './radar'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartRadar',
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
