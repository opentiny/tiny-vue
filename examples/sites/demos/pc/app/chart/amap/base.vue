<template>
  <div>
    <tiny-autonavi-map :settings="chartSettings" :series="chartSeries" :tooltip="chartTooltip"></tiny-autonavi-map>
  </div>
</template>

<script lang="jsx">
import { AutonaviMap } from '@opentiny/vue'

export default {
  components: {
    TinyAutonaviMap: AutonaviMap
  },
  data() {
    this.chartSettings = {
      key: '4b5f2cf2cba25200cc6b68c398468899',
      url: 'https://webapi.amap.com/maps', // 谷歌地图接口的url地址
      v: '1.4.3',
      amap: {
        resizeEnable: true,
        center: [120.14322240845, 30.236064370321],
        zoom: 10
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
