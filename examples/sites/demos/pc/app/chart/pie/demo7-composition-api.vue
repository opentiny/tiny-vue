<template>
  <div>
    <tiny-chart-pie :options="options"></tiny-chart-pie>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { HuichartsPie as TinyChartPie } from '@opentiny/vue'

const options = ref({
  type: 'pie',
  legend: {
    show: true,
    position: {
      left: 'center',
      bottom: '10%'
    },
    orient: 'horizontal',

    // 同意对图例图标设置类型，默认circle, 可选值: rect, roundRect, triangle, diamond; 若定义了legend.data, 则此属性失效。
    icon: 'circle',

    // 控制图例图标的高度
    itemHeight: 20,

    // 控制图例图标的宽度
    itemWidth: 20
  },
  label: {
    show: true,
    type: 'percent',
    line: true
  },
  data: [
    { value: 100, name: 'VPC' },
    { value: 90, name: 'IM' },
    { value: 49, name: 'EIP' },
    { value: 14, name: 'SG' }
  ]
})
</script>
