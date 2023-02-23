<template>
  <div>
    <tiny-graph :extend="extend"></tiny-graph>
  </div>
</template>

<script>
import { ChartGraph } from '@opentiny/vue'

export default {
  components: {
    TinyGraph: ChartGraph
  },
  data() {
    return {
      extend: {
        title: {
          text: 'Graph 示例'
        },
        tooltip: {},
        animationDurationUpdate: 1600,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            color: '#4eA5F5',
            label: {
              normal: {
                show: true
              }
            },
            edgeSymbolSize: [5, 11],
            edgeSymbol: ['circle', 'arrow'],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 22
                }
              }
            },
            data: [
              {
                name: '节点位置1',
                x: 200,
                y: 500
              },
              {
                name: '节点位置2',
                x: 700,
                y: 400
              },
              {
                name: '节点位置3',
                x: 560,
                y: 200
              },
              {
                name: '节点位置4',
                x: 650,
                y: 400
              }
            ],
            links: [
              {
                source: 0,
                target: 1,
                label: {
                  normal: {
                    show: true
                  }
                },
                symbolSize: [4, 18],
                lineStyle: {
                  normal: {
                    width: 5,
                    curveness: 0.5
                  }
                }
              },
              {
                source: '节点位置2',
                target: '节点位置1',
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
                source: '节点位置1',
                target: '节点位置3'
              },
              {
                source: '节点位置2',
                target: '节点位置3'
              },
              {
                source: '节点位置2',
                target: '节点位置4'
              },
              {
                source: '节点位置1',
                target: '节点位置4'
              }
            ],
            lineStyle: {
              normal: {
                opacity: 0.8,
                width: 3,
                curveness: 0.5
              }
            }
          }
        ]
      }
    }
  }
}
</script>
