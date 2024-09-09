<template>
  <div>
    <p>
      <tiny-button @click="changeWidth">点击改变父元素宽度</tiny-button>
      <tiny-button @click="resize">点击执行resize()</tiny-button>
    </p>
    <br />
    <p>当前父元素宽度: {{ parentElementWidth }}，chart 组件{{ isAction ? '已' : '未' }}执行 resize()。</p>
    <div :style="{ width: parentElementWidth }">
      <tiny-line ref="chartRef" :options="options" :change-delay="1000" resizeable></tiny-line>
    </div>
  </div>
</template>

<script>
import { HuichartsLine, Button } from '@opentiny/vue'

export default {
  components: {
    TinyLine: ChartLine,
    TinyButton: Button
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
      },
      parentElementWidth: '100%',
      isAction: true
    }
  },
  methods: {
    changeWidth() {
      const random = Math.ceil(800 * Math.random())

      this.parentElementWidth = (random < 200 ? random + 200 : random) + 'px'
      this.isAction = false
    },
    resize() {
      this.$refs.chartRef.resize()
      this.isAction = true
    }
  }
}
</script>
