<template>
  <div>
    <tiny-chart-tree :data="chartData" :settings="chartSettings"></tiny-chart-tree>
    <tiny-chart-tree
      :data="chartData"
      :extend="chartExtend"
      :tooltip-formatter="tooltipFormatter"
      :settings="chartSettings"
    ></tiny-chart-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartTree as TinyChartTree } from '@opentiny/vue'

const treeData = {
  name: 'f',
  value: 1,
  link: '',
  children: [
    {
      name: 'a',
      value: 1,
      link: '',
      children: [
        {
          name: 'a-a',
          link: '',
          value: 2
        },
        {
          name: 'a-b',
          link: '',
          value: 2
        }
      ]
    },
    {
      name: 'b',
      value: 1,
      link: '',
      children: [
        {
          name: 'b-a',
          link: '',
          value: 2
        },
        {
          name: 'b-b',
          link: '',
          value: 2
        }
      ]
    },
    {
      name: 'c',
      value: 3,
      link: '',
      children: [
        {
          name: 'c-a',
          link: '',
          value: 4
        },
        {
          name: 'c-b',
          link: '',
          value: 2
        }
      ]
    },
    {
      name: 'd',
      value: 3,
      link: '',
      children: [
        {
          name: 'd-a',
          link: '',
          value: 4
        },
        {
          name: 'd-b',
          link: '',
          value: 2
        }
      ]
    }
  ]
}

// 自定义提示框内容
const chartData = ref({
  columns: ['name', 'value'],
  rows: [
    {
      name: 'tree1',
      value: [treeData]
    }
  ]
})
const chartSettings = ref({})
const chartExtend = ref({
  tooltip: {
    alwaysShowContent: true
  }
})

function tooltipFormatter(v) {
  return [`${v.seriesName}: ${v.data.value}`, `<a target="_blank" href="${v.data.link}">${v.data.link}</a>`].join(
    '<br>'
  )
}
</script>
