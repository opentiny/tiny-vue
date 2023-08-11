<template>
  <div>
    <tiny-baidu-map :settings="chartSettings" :series="chartSeries" :tooltip="chartTooltip"></tiny-baidu-map>
  </div>
</template>

<script lang="jsx">
import { BaiduMap } from '@opentiny/vue'

export default {
  components: {
    TinyBaiduMap: BaiduMap
  },
  data() {
    this.chartSettings = {
      key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
      url: 'https://api.map.baidu.com/api', // 百度地图的接口地址
      bmap: {
        center: [120, 30],
        zoom: 14,
        roam: true,
        mapStyle: {}
      }
    }
    this.chartTooltip = { show: true }

    return {
      chartSeries: [
        {
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: [
            [120, 30, 1] // 经度，维度，value，...
          ]
        }
      ]
    }
  }
}
</script>
