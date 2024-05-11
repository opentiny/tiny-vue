<template>
  <div>
    <p><button @click="addData">添加一条数据</button></p>
    <tiny-line :options="options" :width-change-delay="300"></tiny-line>
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
      options: {
        padding: [50, 30, 50, 20],
        legend: {
          show: true,
          icon: 'line'
        },
        data: [
          { 'Day': '1月4日', 'Domestics': 33, 'Abroad': 37 },
          { 'Day': '1月5日', 'Domestics': 27, 'Abroad': 39 },
          { 'Day': '1月6日', 'Domestics': 31, 'Abroad': 20 },
          { 'Day': '1月7日', 'Domestics': 30, 'Abroad': 15 },
          { 'Day': '1月8日', 'Domestics': 37, 'Abroad': 13 },
          { 'Day': '1月9日', 'Domestics': 36, 'Abroad': 17 },
          { 'Day': '1月10日', 'Domestics': 42, 'Abroad': 22 },
          { 'Day': '1月11日', 'Domestics': 22, 'Abroad': 12 },
          { 'Day': '1月12日', 'Domestics': 17, 'Abroad': 30 },
          { 'Day': '1月13日', 'Domestics': 40, 'Abroad': 33 },
          { 'Day': '1月14日', 'Domestics': 42, 'Abroad': 22 },
          { 'Day': '1月15日', 'Domestics': 32, 'Abroad': 11 }
        ],
        xAxis: {
          data: 'Day'
        },
        yAxis: {
          name: 'Percentage(%)'
        }
      }
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
