<template>
  <tiny-graph :extend="extend" height="600px"></tiny-graph>
</template>

<script lang="jsx">
import { ChartGraph } from '@opentiny/vue'

let axisData = ['周一', '周二', '周三', '很长很长的周四', '周五', '周六', '周日']
let data = axisData.map((item, i) => {
  return Math.round(Math.random() * 1000 * (i + 1))
})

let links = data.map((item, i) => {
  return {
    source: i,
    target: i + 1
  }
})
links.pop()

let option = {
  title: {
    text: '笛卡尔坐标系上的 Graph'
  },
  tooltip: {},
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: axisData
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      type: 'graph',
      layout: 'none',
      color: '#42A5F5',
      coordinateSystem: 'cartesian2d',
      symbolSize: 40,
      label: {
        normal: {
          show: true
        }
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      data,
      links,
      lineStyle: {
        normal: {
          color: '#2f4554'
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
