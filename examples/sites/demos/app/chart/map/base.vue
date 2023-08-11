<template>
  <div>
    <tiny-map
      v-if="chartSettings.mapOrigin"
      style="width: 500px"
      :data="chartData"
      :settings="chartSettings"
    ></tiny-map>
  </div>
</template>

<script lang="jsx">
import { ChartMap } from '@opentiny/vue'

export default {
  components: {
    TinyMap: ChartMap
  },
  data() {
    return {
      chartData: {
        columns: ['位置', 'GDP'],
        rows: [
          { 位置: '吉林', GDP: 123 },
          { 位置: '北京', GDP: 1223 },
          { 位置: '上海', GDP: 2123 },
          { 位置: '浙江', GDP: 4123 }
        ]
      },
      chartSettings: {
        position: 'china',
        mapOrigin: null, // 用户自己的地图数据
        dataType: {
          GDP: 'KMB'
        }
      }
    }
  },
  created() {
    if (window._map_china) {
      this.chartSettings.mapOrigin = window._map_china
    } else {
      this.$service.network.get('services/mapChina').then(({ data }) => {
        this.chartSettings.mapOrigin = data
      })
    }
  }
}
</script>
