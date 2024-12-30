<template>
  <div>
    <tiny-chart-pie :options="options"></tiny-chart-pie>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyHuichartsPie as TinyChartPie } from '@opentiny/vue'

const options = ref({
  type: 'pie',
  legend: {
    show: true,

    // 可滚动的图例，生成切换按钮
    type: 'scroll',

    // 切换按钮在图例的位置
    pageButtonPosition: 'end',

    // 图例的宽度
    width: '80%',
    position: {
      left: 'center',
      bottom: 40
    }
  },
  label: {
    show: true
  },
  data: [
    { value: 20, name: '系列 1' },
    { value: 9, name: '系列 2' },
    { value: 14, name: '系列 3' },
    { value: 8, name: '系列 4' },
    { value: 16, name: '系列 5' },
    { value: 10, name: '系列 6' },
    { value: 16, name: '系列 7' },
    { value: 4, name: '系列 8' },
    { value: 6, name: '系列 9' },
    { value: 13, name: '系列 10' }
  ]
})
</script>
