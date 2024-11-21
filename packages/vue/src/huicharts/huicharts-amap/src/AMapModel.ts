import * as echarts from 'echarts'

const equal = (x, y) => x && y && x[0] === y[0] && x[1] === y[1]

export default function extendComponentModel() {
  echarts.extendComponentModel({
    type: 'amap',

    getAMap() {
      return this.__amap
    },

    getLayer() {
      return this.__layer
    },

    getMapOptions() {
      return this.__options
    },

    setCenterAndZoom(center, zoom) {
      this.huiChartOption.center = center
      this.huiChartOption.zoom = zoom
    },

    centerOrZoomChanged(center, zoom) {
      let option = this.huiChartOption
      return !(equal(center, option.center) && zoom === option.zoom)
    },

    defaultOption: {
      center: [116.397475, 39.908695],
      zoom: 4
    }
  }) as any
}
