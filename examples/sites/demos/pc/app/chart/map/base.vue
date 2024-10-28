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
import { HuichartsMap } from '@opentiny/vue'
import chinaData from './china.js'

export default {
  components: {
    TinyMap: HuichartsMap
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
    } else if (this.$service?.network) {
      this.$service.network.get('services/mapChina').then(({ data }) => {
        this.chartSettings.mapOrigin = data
      })
    } else if (chinaData) {
      this.chartSettings.mapOrigin = chinaData
    }
  }
}
</script>
