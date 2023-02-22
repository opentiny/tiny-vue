<template>
  <tiny-tabs v-model="activeName">
    <tiny-tab-item title="图表1" name="1">
      <tiny-line :data="chartData" ref="chart1" cancel-resize-check></tiny-line>
    </tiny-tab-item>
    <tiny-tab-item title="图表2" name="2">
      <tiny-line :data="chartData" ref="chart2" cancel-resize-check></tiny-line>
    </tiny-tab-item>
    <tiny-tab-item title="图表3" name="3">
      <tiny-line :data="chartData" ref="chart3"></tiny-line>
    </tiny-tab-item>
    <tiny-tab-item title="图表4" name="4">
      <tiny-line :data="chartData" ref="chart4"></tiny-line>
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script>
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
      chartData: {
        columns: ['日期', '销售额-1季度'],
        rows: [
          { 日期: '1月1日', '销售额-1季度': 1523 },
          { 日期: '1月2日', '销售额-1季度': 1223 },
          { 日期: '1月3日', '销售额-1季度': 2123 },
          { 日期: '1月4日', '销售额-1季度': 4123 },
          { 日期: '1月5日', '销售额-1季度': 3123 },
          { 日期: '1月6日', '销售额-1季度': 7123 }
        ]
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
