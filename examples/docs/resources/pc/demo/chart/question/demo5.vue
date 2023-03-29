<template>
  <div>
    <p>
      <button @click="changeWidth">点击改变父元素宽度</button>
      <button @click="resize">点击执行resize()</button>
    </p>
    <br />
    <p>当前父元素宽度: {{ parentElementWidth }}，chart 组件{{ isAction ? '已' : '未' }}执行 resize()。</p>
    <dir :style="`width: ${parentElementWidth}`">
      <tiny-line ref="chart" :data="chartData" :change-delay="1000" :settings="chartSettings" resizeable></tiny-line>
    </dir>
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
      chartSettings: {},
      parentElementWidth: '100%',
      isAction: true
    }
  },
  methods: {
    changeWidth() {
      let random = Math.ceil(800 * Math.random())

      this.parentElementWidth = (random < 200 ? random + 200 : random) + 'px'
      this.isAction = false
    },
    resize() {
      this.$refs.chart.resize()
      this.isAction = true
    }
  }
}
</script>
