<template>
  <div>
    <tiny-chart-sunburst :extend="extend"></tiny-chart-sunburst>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartSunburst as TinyChartSunburst } from '@opentiny/vue'

let canvasColor = ['#FF6161', '#FF8C75', '#FFB499']
let svgColor = ['#53C299', '#83E0A8', '#B7F6C0']
let evenColor = '#eee'

let data = [
  {
    name: '展示平台',
    children: [
      {
        name: '手机端',
        children: [
          {
            name: '安卓',
            children: [
              {
                name: 'SVG ↑↑↑',
                value: 1,
                itemStyle: {
                  color: svgColor[0]
                }
              }
            ]
          },
          {
            name: 'iOS',
            children: [
              {
                name: 'SVG ↑',
                value: 1,
                itemStyle: {
                  color: svgColor[2]
                }
              }
            ]
          }
        ]
      },
      {
        name: '电脑端',
        children: [
          {
            name: 'Mac',
            children: [
              {
                name: 'Chrome',
                children: [
                  {
                    name: 'SVG ↑',
                    value: 1,
                    itemStyle: {
                      color: svgColor[2]
                    }
                  }
                ]
              },
              {
                name: 'Safari',
                children: [
                  {
                    name: '-',
                    value: 1,
                    itemStyle: {
                      color: evenColor
                    }
                  }
                ]
              },
              {
                name: 'Firefox',
                children: [
                  {
                    name: '-',
                    value: 1,
                    itemStyle: {
                      color: evenColor
                    }
                  }
                ]
              }
            ]
          },
          {
            name: 'Windows',
            children: [
              {
                name: 'IE',
                children: [
                  {
                    name: 'Canvas ↑↑',
                    value: 1,
                    itemStyle: {
                      color: canvasColor[1]
                    }
                  }
                ]
              },
              {
                name: 'Chrome',
                children: [
                  {
                    name: '-',
                    value: 1,
                    itemStyle: {
                      color: evenColor
                    }
                  }
                ]
              },
              {
                name: 'Firefox',
                children: [
                  {
                    name: 'SVG ↑',
                    value: 1,
                    itemStyle: {
                      color: svgColor[2]
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '图表类型',
    children: [
      {
        name: '折线图',
        children: [
          {
            name: 'SVG ↑↑',
            value: 1,
            itemStyle: {
              color: svgColor[1]
            }
          }
        ]
      },
      {
        name: '柱状图',
        children: [
          {
            name: 'Canvas ↑↑',
            value: 1,
            itemStyle: {
              color: canvasColor[1]
            }
          }
        ]
      },
      {
        name: '饼图',
        children: [
          {
            name: '-',
            value: 1,
            itemStyle: {
              color: evenColor
            }
          }
        ]
      }
    ]
  },
  {
    name: '数据量',
    children: [
      {
        name: '< 1000',
        children: [
          {
            name: '-',
            value: 1,
            itemStyle: {
              color: evenColor
            }
          }
        ]
      },
      {
        name: '>= 1000',
        children: [
          {
            name: 'Canvas ↑',
            value: 1,
            itemStyle: {
              color: canvasColor[2]
            }
          }
        ]
      }
    ]
  },
  {
    name: '图表个数',
    children: [
      {
        name: '< 10',
        children: [
          {
            name: '-',
            value: 1,
            itemStyle: {
              color: evenColor
            }
          }
        ]
      },
      {
        name: '>= 10',
        children: [
          {
            name: 'SVG ↑↑↑',
            value: 1,
            itemStyle: {
              color: svgColor[0]
            }
          }
        ]
      }
    ]
  },
  {
    name: '特殊\n渲染\n需求',
    children: [
      {
        name: '仅 Canvas\n支持',
        value: 1,
        itemStyle: {
          color: canvasColor[0]
        }
      }
    ]
  }
]

const extend = ref({
  series: {
    radius: ['10%', '100%'],
    center: ['50%', '50%'],
    startAngle: 0,
    sort: null,
    highlightPolicy: 'ancestor',
    data,
    label: {
      rotate: 0,
      textBorderColor: '#444',
      textBorderWidth: 2,
      fontSize: 14
    },
    levels: [
      {},
      {
        itemStyle: {
          color: '#999'
        }
      },
      {
        itemStyle: {
          color: '#bbb'
        }
      },
      {
        itemStyle: {
          color: '#ccc'
        }
      }
    ],
    itemStyle: {
      color: '#ddd',
      borderWidth: 2
    }
  }
})
</script>
