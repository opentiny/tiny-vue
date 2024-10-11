<template>
  <div>
    <tiny-baidu-map :options="options"></tiny-baidu-map>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { HuichartsBmap as TinyBaiduMap } from '@opentiny/vue'

const options = ref({
  key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
  url: 'https://api.map.baidu.com/api', // 百度地图接口的url地址
  bmap: {
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
