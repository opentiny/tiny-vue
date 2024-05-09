<template>
  <tiny-tabs v-model="activeName">
    <tiny-tab-item title="图表1" name="1">
      <tiny-line :options="options" ref="chart1" cancel-resize-check></tiny-line>
    </tiny-tab-item>
    <tiny-tab-item title="图表2" name="2">
      <tiny-line :options="options" ref="chart2" cancel-resize-check></tiny-line>
    </tiny-tab-item>
    <tiny-tab-item title="图表3" name="3">
      <tiny-line :options="options" ref="chart3"></tiny-line>
    </tiny-tab-item>
    <tiny-tab-item title="图表4" name="4">
      <tiny-line :options="options" ref="chart4"></tiny-line>
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script lang="jsx">
import { Tabs, TabItem, ChartLine } from '@opentiny/vue'

export default {
  components: {
    TinyTabs: Tabs,
    TinyTabItem: TabItem,
    TinyLine: ChartLine
  },
  data() {
    return {
      activeName: '1',
      options: {
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
      }
    }
  },
  watch: {
    activeName(v) {
      this.$nextTick(() => {
        this.$refs[`chart${v}`].resize()
        // 或者通过 echarts 实例调用 echarts 的 resize() 方法
        // this.$refs[`chart${v}`].state.echarts.resize()
      })
    }
  }
}
</script>
