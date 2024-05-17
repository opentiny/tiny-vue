<template>
  <div>
    <tiny-button style="margin-bottom: 20px" @click="switchTheme">切换主题</tiny-button>
    <h3 class="title">折线图</h3>
    <div class="content">
      <tiny-chart type="line" :options="options1"></tiny-chart>
    </div>

    <h3 class="title">柱状图</h3>
    <div class="content">
      <tiny-chart type="histogram" :options="options2"></tiny-chart>
    </div>

    <h3 class="title">饼图</h3>
    <tiny-button style="margin-bottom: 20px" @click="switchColorMode">color-mode切换</tiny-button>
    <div class="content">
      <tiny-chart @handle-color="handleColor" :data="chartData" :settings="chartSettings3" :color-mode="colorMode"
        :key="key"></tiny-chart>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Chart as TinyChart, Button as TinyButton } from '@opentiny/vue'

const colorMode = ref('default')
const key = ref(0)
const themeName = ref({
  backgroundColor: '#2bf666'
})
const newTheme = ref(null)
const options1 = ref({
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
    name: 'Percentage(%)'
  }
})

const options2 = ref({
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
    name: 'Percentage(%)'
  }
})

const options3 = ref({
  type: 'pie',
  data: [
    { value: 100, name: 'VPC' },
    { value: 90, name: 'IM' },
    { value: 49, name: 'EIP' },
    { value: 14, name: 'SG' }
  ]
})

const themes = ref(['light', 'cloud-light', 'hdesign-light', 'bpit-light'])
const themesKey = ref(1)

function switchTheme() {
  if (themesKey.value < themes.value.length - 1) {
    themesKey.value++
  } else {
    themesKey.value = 0
  }
  options1.value.theme = themes.value[themesKey.value]
  options2.value.theme = themes.value[themesKey.value]
}

function switchColorMode() {
  const colorModes = ['default', 'blue', 'green']
  colorMode.value = colorModes[(key.value + 1) % 3]
  key.value++
}

function handleColor(color) {
  console.log('handle-color', color)
}
</script>
