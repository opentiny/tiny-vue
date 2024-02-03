<template>
  <div>
    <tiny-baidu-map :settings="chartSettings" :series="chartSeries" :tooltip="chartTooltip"></tiny-baidu-map>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { BaiduMap as TinyBaiduMap } from '@opentiny/vue'

const chartSettings = {
  key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
  url: 'https://api.map.baidu.com/api', // 百度地图的接口地址
  bmap: {
    center: [120, 30],
    zoom: 14,
    roam: true,
    mapStyle: {}
  }
}
const chartTooltip = { show: true }

const chartSeries = ref([
  {
    type: 'scatter',
    coordinateSystem: 'bmap',
    data: [
      [120, 30, 1] // 经度，维度，value，...
    ]
  }
])
</script>
