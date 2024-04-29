<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }" @mousewheel="handleMousewheel"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'
import { heatmap } from './heatmap'

export default {
  name: 'ChartHeatmap',
  mixins: [Core],
  data() {
    return {
      option: {}
    }
  },
  computed: {
    iChartName() {
      const { type } = this.settings
      const mapChartList = {
        bmap: 'BaiduMapChart',
        amap: 'AutonaviMapChart',
        map: 'RegionChart'
      }
      return (type || '').includes('map') ? mapChartList[type] : 'HeatMapChart'
    }
  },
  methods: {
    updateChart(data) {
      const { columns = [], rows = [] } = data

      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        extend: this.extend,
        echartsLib: this.integrateChart.echartIns
      }
      const option = heatmap(columns, rows, this.settings, extra, true)
      this.option = {
        ...option
      }
    },
    handleMousewheel(e) {
      e = e || window.event
      if (e.stopPropagation) {
        // 这是取消冒泡
        e.stopPropagation()
      } else {
        e.cancelBubble = true
      }

      if (e.preventDefault) {
        // 这是取消默认行为，要弄清楚取消默认行为和冒泡不是一回事
        e.preventDefault()
      } else {
        e.returnValue = false
      }

      // 放大 getZoom返回地图当前缩放级别
      if (e.wheelDelta > 0) {
        this.zoom += 1
        if (this.zoom > 19) {
          this.zoom = 19
        }
      }

      // 缩小
      if (e.wheelDelta < 0) {
        e.cancelBubble = true
        this.zoom -= 1
        if (this.zoom < 4) {
          this.zoom = 4
        }
      }
    }
  }
}
</script>
