<template>
  <div>
    <p>
      <button @click="changeWidth">点击改变父元素宽度</button>
      <button @click="resize">点击执行resize()</button>
    </p>
    <br />
    <p>当前父元素宽度: {{ parentElementWidth }}，chart 组件{{ isAction ? '已' : '未' }}执行 resize()。</p>
    <div :style="`width: ${parentElementWidth}`">
      <tiny-chart-line
        ref="chartRef"
        :data="chartData"
        :change-delay="1000"
        :settings="chartSettings"
        resizeable
      ></tiny-chart-line>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartLine as TinyChartLine } from '@opentiny/vue'

const chartData = ref({
  columns: ['日期', 'value'],
  rows: [
    { 日期: '1月1日', value: 1523 },
    { 日期: '1月2日', value: 1223 },
    { 日期: '1月3日', value: 2123 },
    { 日期: '1月4日', value: 4123 },
    { 日期: '1月5日', value: 3123 },
    { 日期: '1月6日', value: 7123 }
  ]
})
const chartSettings = ref({})
const parentElementWidth = ref('100%')
const isAction = ref(true)
const chartRef = ref()

function changeWidth() {
  let random = Math.ceil(800 * Math.random())

  parentElementWidth.value = (random < 200 ? random + 200 : random) + 'px'
  isAction.value = false
}

function resize() {
  chartRef.value.resize()
  isAction.value = true
}
</script>
