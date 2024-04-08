<template>
  <div
    class="hui-chart chart-box"
    ref="chartRef"
    :style="{
      position: 'relative',
      height
    }"
  ></div>
</template>

<script>
import 'echarts/extension/bmap/bmap'
import Core from '@opentiny/vue-chart-core'

export default {
  name: 'ChartBaiduMap',
  mixins: [Core],
  data() {
    return {
      iChartName: 'BaiduMapChart',
      option: {}
    }
  },
  methods: {
    updateChart() {
      if (this.options && Object.keys(this.options).length) {
        this.option = { ...this.options, ...this.settings }
        if (!this.tooltipVisible) {
          this.option.tooltip = { show: false }
        }

        if (!this.legendVisible) {
          this.option.legend = { show: false }
        }

        return
      }

      const echartsSettings = [
        'grid',
        'dataZoom',
        'visualMap',
        'toolbox',
        'title',
        'legend',
        'xAxis',
        'yAxis',
        'radar',
        'axisPointer',
        'brush',
        'geo',
        'timeline',
        'graphic',
        'backgroundColor',
        'textStyle'
      ]
      this.option = {
        ...this.settings,
        tooltip: this.tooltipVisible ? this.tooltip : { show: false },
        series: this.series
      }

      echartsSettings.forEach((prop) => {
        if (this[prop]) {
          this.option[prop] = this[prop]
        }
      })

      if (!this.legendVisible) {
        this.option.legend = { show: false }
      }
    }
  }
}
</script>
