<template>
  <div>
    <tiny-baidu-map :settings="chartSettings" :series="chartSeries" :tooltip="chartTooltip"></tiny-baidu-map>
  </div>
</template>

<script>
import { BaiduMap } from '@opentiny/vue'

export default {
  components: {
    TinyBaiduMap: BaiduMap
  },
  data() {
    this.chartSettings = {
      key: 'oBvDtR6nzfeVchkY4cLHtnah1VVZQKRK',
      bmap: {
        center: [130, 40],
        roam: true,
        zoom: 14,
        mapStyle: {}
      }
    }
    this.chartTooltip = { show: true }

    return {
      chartSeries: [
        {
          coordinateSystem: 'bmap',
          type: 'scatter',
          data: [[122, 52, 1]]
        }
      ]
    }
  }
}
</script>
