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
export const extend = {
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
}
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
export const treeCharData = {
  columns: ['name', 'value'],
  rows: [
    {
      name: 'tree1',
      value: [treeData]
    }
  ]
}
const rowsList = [
  {
    word: 'visualMap',
    count: 22199
  },
  {
    word: 'continuous',
    count: 10288
  },
  {
    word: 'contoller',
    count: 620
  },
  {
    word: 'series',
    count: 274470
  },
  {
    word: 'gauge',
    count: 12311
  },
  {
    word: 'detail',
    count: 1206
  },
  {
    word: 'piecewise',
    count: 4885
  },
  {
    word: 'textStyle',
    count: 32294
  },
  {
    word: 'markPoint',
    count: 18574
  },
  {
    word: 'pie',
    count: 38929
  },
  {
    word: 'roseType',
    count: 969
  },
  {
    word: 'label',
    count: 37517
  },
  {
    word: 'emphasis',
    count: 12053
  },
  {
    word: 'yAxis',
    count: 57299
  },
  {
    word: 'name',
    count: 15418
  },
  {
    word: 'type',
    count: 22905
  },
  {
    word: 'gridIndex',
    count: 5146
  },
  {
    word: 'normal',
    count: 49487
  },
  {
    word: 'itemStyle',
    count: 33837
  },
  {
    word: 'min',
    count: 4500
  },
  {
    word: 'silent',
    count: 5744
  },
  {
    word: 'animation',
    count: 4840
  },
  {
    word: 'offsetCenter',
    count: 232
  },
  {
    word: 'inverse',
    count: 3706
  },
  {
    word: 'borderColor',
    count: 4812
  },
  {
    word: 'markLine',
    count: 16578
  },
  {
    word: 'line',
    count: 76970
  },
  {
    word: 'radiusAxis',
    count: 6704
  },
  {
    word: 'radar',
    count: 15964
  },
  {
    word: 'data',
    count: 60679
  },
  {
    word: 'dataZoom',
    count: 24347
  },
  {
    word: 'tooltip',
    count: 43420
  },
  {
    word: 'toolbox',
    count: 25222
  },
  {
    word: 'geo',
    count: 16904
  },
  {
    word: 'parallelAxis',
    count: 4029
  }
]

export const chartDataWord = {
  columns: ['word', 'count'],
  rows: rowsList
}
export const extendGraph = {
  title: {
    text: 'Graph 简单示例'
  },
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'none',
      symbolSize: 50,
      color: '#42A5F5',
      roam: true,
      label: {
        normal: {
          show: true
        }
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        normal: {
          textStyle: {
            fontSize: 20
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
}
