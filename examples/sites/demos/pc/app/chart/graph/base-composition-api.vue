<template>
  <div>
    <tiny-chart-graph :options="options"></tiny-chart-graph>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { HuichartsGraph as TinyChartGraph } from '@opentiny/vue'

const options = ref({
  animationDurationUpdate: 1600,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'none',
      symbolSize: 48,
      color: '#42A5F5',
      roam: true,
      label: {
        normal: {
          show: true
        }
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [3, 10],
      edgeLabel: {
        normal: {
          textStyle: {
            fontSize: 18
          }
        }
      },
      data: [
        {
          name: '节点1',
          x: 300,
          y: 300
        },
        {
          name: '节点2',
          x: 800,
          y: 300
        },
        {
          name: '节点3',
          x: 550,
          y: 100
        },
        {
          name: '节点4',
          x: 550,
          y: 500
        }
      ],
      links: [
        {
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            normal: {
              width: 5,
              curveness: 0.2
            }
          }
        },
        {
          source: '节点2',
          target: '节点1',
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            normal: {
              curveness: 0.2
            }
          }
        },
        {
          source: '节点1',
          target: '节点3'
        },
        {
          source: '节点2',
          target: '节点3'
        },
        {
          source: '节点2',
          target: '节点4'
        },
        {
          source: '节点1',
          target: '节点4'
        }
      ],
      lineStyle: {
        normal: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        }
      }
    }
  ]
})
</script>
