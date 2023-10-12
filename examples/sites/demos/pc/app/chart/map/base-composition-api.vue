<template>
  <div>
    <tiny-chart-map
      v-if="chartSettings.mapOrigin"
      style="width: 500px"
      :data="chartData"
      :settings="chartSettings"
    ></tiny-chart-map>
  </div>
</template>

<script setup lang="jsx">
import { ref, getCurrentInstance } from 'vue'
import { ChartMap as TinyChartMap } from '@opentiny/vue'

const chartData = ref({
  columns: ['位置', 'GDP'],
  rows: [
    { 位置: '吉林', GDP: 123 },
    { 位置: '北京', GDP: 1223 },
    { 位置: '上海', GDP: 2123 },
    { 位置: '浙江', GDP: 4123 }
  ]
})
const chartSettings = ref({
  position: 'china',
  mapOrigin: null, // 用户自己的地图数据
  dataType: {
    GDP: 'KMB'
  }
})

if (window._map_china) {
  chartSettings.value.mapOrigin = window._map_china
} else {
  getCurrentInstance().appContext.config.globalProperties.$service.network.get('services/mapChina').then(({ data }) => {
    chartSettings.value.mapOrigin = data
  })
}
</script>
