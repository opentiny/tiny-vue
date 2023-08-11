<template>
  <div>
    <h3 class="title">折线图</h3>
    <button @click="switchTheme">切换主题</button>
    <div class="content">
      <tiny-chart :data="chartData" :settings="chartSettings1" :theme="newTheme"></tiny-chart>
    </div>

    <h3 class="title">柱状图</h3>
    <div class="content">
      <tiny-chart :data="chartData" :theme-name="themeName" :settings="chartSettings2"></tiny-chart>
    </div>

    <h3 class="title">饼图</h3>
    <div class="content">
      <tiny-chart :data="chartData" :settings="chartSettings3"></tiny-chart>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Chart as TinyChart } from '@opentiny/vue'

const themeName = ref({
  backgroundColor: '#2bf666'
})
const newTheme = ref(null)
const chartData = ref({
  columns: ['日期', '余额', '年龄'],
  rows: [
    { 日期: 1, 余额: 123, 年龄: 3 },
    { 日期: 2, 余额: 1223, 年龄: 6 },
    { 日期: 3, 余额: 2123, 年龄: 9 },
    { 日期: 4, 余额: 4123, 年龄: 12 },
    { 日期: 5, 余额: 3123, 年龄: 15 },
    { 日期: 6, 余额: 7123, 年龄: 20 }
  ]
})
const chartSettings1 = ref({
  type: 'line'
})
const chartSettings2 = ref({
  type: 'histogram'
})
const chartSettings3 = ref({
  type: 'pie'
})

function switchTheme() {
  newTheme.value = {
    color: [
      '#C1232B',
      '#B5C334',
      '#FCCE10',
      '#E87C25',
      '#27727B',
      '#FE8463',
      '#9BCA63',
      '#FAD860',
      '#F3A43B',
      '#60C0DD',
      '#D7504B',
      '#C6E579',
      '#F4E001',
      '#F0805A',
      '#26C0C0'
    ],
    backgroundColor: '#f00'
  }
}
</script>
