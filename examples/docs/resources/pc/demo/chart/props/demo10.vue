<template>
  <div class="demo10">
    <button @click="addDataZoomImg">点击添加dataZoom自定义图片</button>
    <tiny-line ref="chart" :data="chartData" :data-zoom="dataZoom" :init-options="initOptions" :resize-delay="1000"></tiny-line>
  </div>
</template>

<script lang="jsx">
// 使用前需先引入对应模块
import 'echarts/lib/component/dataZoom'
import { ChartLine } from '@opentiny/vue'

export default {
  components: {
    TinyLine: ChartLine
  },
  data() {
    return {
      initOptions: {
        width: '800px',
        height: '400px'
      },
      chartData: {
        columns: ['日期', '成本', '利润'],
        rows: [
          { 日期: '1月1日', 成本: 15, 利润: 12 },
          { 日期: '1月2日', 成本: 12, 利润: 25 },
          { 日期: '1月3日', 成本: 21, 利润: 10 },
          { 日期: '1月4日', 成本: 41, 利润: 32 },
          { 日期: '1月5日', 成本: 31, 利润: 30 },
          { 日期: '1月6日', 成本: 71, 利润: 55 }
        ]
      },
      dataZoom: [
        {
          type: 'slider',
          start: 0,
          end: 20
        }
      ]
    }
  },
  methods: {
    addDataZoomImg() {
      this.dataZoom[0].handleIcon = 'image://localhost:3000/static/favicon.ico'
      this.$refs.chart.dataHandler()
    }
  }
}
</script>

<style>
.demo10 button {
  line-height: 1.7em;
  font-size: 16px;
  font-family: 'yahei';
  color: #5e6d82;
}
</style>
