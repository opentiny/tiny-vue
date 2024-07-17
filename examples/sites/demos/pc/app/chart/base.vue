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
    <br />
    <tiny-button style="margin-bottom: 20px" @click="switchColorMode">color-mode切换</tiny-button>
    <div class="content">
      <tiny-chart
        type="ring"
        @handle-color="handleColor"
        :options="options3"
        :color-mode="colorMode"
        :key="key"
      ></tiny-chart>
    </div>
  </div>
</template>

<script lang="jsx">
import { Chart, Button } from '@opentiny/vue'

export default {
  components: {
    TinyChart: Chart,
    TinyButton: Button
  },
  methods: {
    switchTheme() {
      if (this.themesKey < this.themes.length - 1) {
        this.themesKey++
      } else {
        this.themesKey = 0
      }
      this.options1.theme = this.themes[this.themesKey]
      this.options2.theme = this.themes[this.themesKey]
    },
    switchColorMode() {
      const colorModes = ['default', 'blue', 'green']
      this.colorMode = colorModes[(this.key + 1) % 3]
      this.key++
    },
    handleColor(color) {
      console.log('handle-color', color)
    }
  },
  data() {
    return {
      options1: {
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
      },
      options2: {
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
      },
      options3: {
        type: 'pie',
        data: [
          { value: 100, name: 'VPC' },
          { value: 90, name: 'IM' },
          { value: 49, name: 'EIP' },
          { value: 14, name: 'SG' }
        ]
      },
      colorMode: 'default',
      key: 0,
      themeName: {
        backgroundColor: '#2bf666'
      },
      newTheme: null,
      themes: ['light', 'cloud-light', 'hdesign-light', 'bpit-light'],
      themesKey: 1
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 16px;
  font-weight: 500;
}
</style>
