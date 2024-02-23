<template>
  <div class="demo10">
    <tiny-button @click="addDataZoomImg">点击添加dataZoom自定义图片</tiny-button>
    <tiny-line
      ref="chartRef"
      :data="chartData"
      :data-zoom="dataZoom"
      :init-options="initOptions"
      :resize-delay="1000"
      :extend="extend"
    ></tiny-line>
  </div>
</template>

<script setup>
// 使用前需先引入对应模块
import { ref } from 'vue'
import 'echarts/lib/component/dataZoom'
import { ChartLine as TinyLine, Button as TinyButton } from '@opentiny/vue'

const extend = ref({
  legend: {
    top: 0
  }
})
const initOptions = ref({
  width: '800px',
  height: '400px'
})
const chartData = ref({
  columns: ['日期', '成本', '利润'],
  rows: [
    { 日期: '1月1日', 成本: 15, 利润: 12 },
    { 日期: '1月2日', 成本: 12, 利润: 25 },
    { 日期: '1月3日', 成本: 21, 利润: 10 },
    { 日期: '1月4日', 成本: 41, 利润: 32 },
    { 日期: '1月5日', 成本: 31, 利润: 30 },
    { 日期: '1月6日', 成本: 71, 利润: 55 }
  ]
})
const dataZoom = ref([
  {
    type: 'slider',
    start: 0,
    end: 20
  }
])
const chartRef = ref()

function addDataZoomImg() {
  dataZoom.value[0].handleIcon = `image://${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/data-zoom.png`
  chartRef.value.dataHandler()
}
</script>
