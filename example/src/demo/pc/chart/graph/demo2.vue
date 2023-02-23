<template>
  <tiny-graph :extend="extend" height="600px"></tiny-graph>
</template>

<script>
import { ChartGraph } from '@opentiny/vue'

let axisData = ['周一', '周二', '周三', '很长很长的周四', '周五', '周六', '周日']
let data = axisData.map((item, i) => Math.round(Math.random() * 1000 * (i + 1)))

let links = data.map((item, i) => ({
  source: i,
  target: i + 1
}))
links.pop()

let option = {
  title: {
    text: '坐标系上的 Graph'
  },
  yAxis: {
    type: 'value'
  },
  xAxis: {
    boundaryGap: false,
    type: 'category',
    data: axisData
  },
  series: [
    {
      layout: 'none',
      type: 'graph',
      color: '#42B5F5',
      coordinateSystem: 'cartesian2d',
      label: {
        normal: {
          show: true
        }
      },
      symbolSize: 40,
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [6, 10],
      links,
      data,
      lineStyle: {
        normal: {
          color: '#2e4554'
        }
      }
    }
  ]
}

export default {
  components: {
    TinyGraph: ChartGraph
  },
  data() {
    return {
      // 笛卡尔坐标系上的Graph
      extend: option
    }
  }
}
</script>
