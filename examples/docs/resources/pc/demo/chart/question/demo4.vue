<template>
  <div>
    <p><button @click="addData">添加一条数据</button></p>
    <tiny-line :data="chartData" :settings="chartSettings" :width-change-delay="300"></tiny-line>
  </div>
</template>

<script lang="jsx">
import { ChartLine } from '@opentiny/vue'

export default {
  components: {
    TinyLine: ChartLine
  },
  data() {
    return {
      chartData: {
        columns: ['日期', 'value'],
        rows: [
          { 日期: '1月1日', value: 1523 },
          { 日期: '1月2日', value: 1223 },
          { 日期: '1月3日', value: 2123 },
          { 日期: '1月4日', value: 4123 },
          { 日期: '1月5日', value: 3123 },
          { 日期: '1月6日', value: 7123 }
        ]
      },
      chartSettings: {}
    }
  },
  methods: {
    addData() {
      this.chartData.rows.push({
        日期: `1月${this.chartData.rows.length + 1}日`,
        value: Math.ceil(10000 * Math.random())
      })
    }
  }
}
</script>
