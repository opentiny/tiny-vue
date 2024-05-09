<template>
  <div>
    <tiny-autonavi-map :options="options"></tiny-autonavi-map>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { AutonaviMap as TinyAutonaviMap } from '@opentiny/vue'

const options = ref({
  key: '4b5f2cf2cba25200cc6b68c398468899',
  url: 'https://webapi.amap.com/maps', // 谷歌地图接口的url地址
  v: '1.4.3',
  amap: {
    resizeEnable: true,
    center: [120.14322240845, 30.236064370321],
    zoom: 10
  },
  tooltip: {
    show: true
  },
  series: [
    {
      type: 'scatter',
      coordinateSystem: 'bmap',
      data: [
        [120, 30, 1] // 经度，纬度，value...
      ]
    }
  ]

})


</script>
