<template>
  <div class="demo10">
    <tiny-button @click="addDataZoomImg">点击添加dataZoom自定义图片</tiny-button>
    <tiny-line ref="chartRef" :options="options" :data-zoom="dataZoom" :init-options="initOptions" :resize-delay="1000"
      :extend="extend"></tiny-line>
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
  height: '400px'
})
const options = ref({
  padding: [50, 30, 50, 20],
  legend: {
    show: true,
    icon: 'line'
  },
  data: [
    { 'Month': 'Jan', 'Domestics': 33, 'Abroad': 37 },
    { 'Month': 'Feb', 'Domestics': 27, 'Abroad': 39 },
    { 'Month': 'Mar', 'Domestics': 31, 'Abroad': 20 },
    { 'Month': 'Apr', 'Domestics': 30, 'Abroad': 15 },
    { 'Month': 'May', 'Domestics': 37, 'Abroad': 13 },
    { 'Month': 'Jun', 'Domestics': 36, 'Abroad': 17 },
    { 'Month': 'Jul', 'Domestics': 42, 'Abroad': 22 },
    { 'Month': 'Aug', 'Domestics': 22, 'Abroad': 12 },
    { 'Month': 'Sep', 'Domestics': 17, 'Abroad': 30 },
    { 'Month': 'Oct', 'Domestics': 40, 'Abroad': 33 },
    { 'Month': 'Nov', 'Domestics': 42, 'Abroad': 22 },
    { 'Month': 'Dec', 'Domestics': 32, 'Abroad': 11 }
  ],
  xAxis: {
    data: 'Month'
  },
  yAxis: {
    name: 'precentage(%)'
  }
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
