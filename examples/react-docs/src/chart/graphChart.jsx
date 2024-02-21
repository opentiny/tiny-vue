import { ChartGraph } from '@opentiny/react'
import { useState } from 'react'
import { extendGraph } from './chartData'

// 在这里导入组件，进行 api 调试
function App() {
  const [newTheme, setNewTheme] = useState(null)

  const [chartSettings1, setChartSettings1] = useState({
    type: 'line'
  })
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
  const dataGraph = [
    {
      x: -739.36383,
      y: -404.26147,
      id: 'jquery',
      name: 'jquery',
      symbolSize: 40,
      itemStyle: {
        normal: {
          color: '#4f19c7'
        }
      },
      force: {
        repulsion: 600
      }
    },
    {
      x: -799.74493,
      y: -263.90924,
      id: 'jsdom',
      name: 'jsdom',
      symbolSize: 20,
      itemStyle: {
        normal: {
          color: '#4f19c7'
        }
      },
      force: {
        repulsion: 200
      }
    },
    {
      x: -831.295,
      y: -388.15134,
      id: 'xmlhttprequest',
      name: 'xmlhttprequest',
      symbolSize: 25,
      itemStyle: {
        normal: {
          color: '#4f19c7'
        }
      },
      force: {
        repulsion: 300
      }
    },
    {
      x: -881.295,
      y: -308.15134,
      id: 'xmlhttprequest.io',
      name: 'xmlhttprequest.io',
      symbolSize: 15,
      itemStyle: {
        normal: {
          color: '#4f003d'
        }
      },
      force: {
        repulsion: 550
      }
    },
    {
      x: -981.295,
      y: -428.15134,
      id: 'xmlhttprequest.io1',
      name: 'xmlhttprequest.io1',
      symbolSize: 10,
      itemStyle: {
        normal: {
          color: '#4f003d'
        }
      },
      force: {
        repulsion: 300
      }
    },
    {
      x: -546.95193,
      y: -405.9647,
      id: 'htmlparser',
      name: 'htmlparser',
      symbolSize: 62,
      label: {
        normal: {
          show: true
        },
        emphasis: {
          position: ['0%', '41%']
        }
      },
      itemStyle: {
        normal: {
          color: 'rgb(253, 156, 53)'
        }
      }
    },
    {
      x: -646.95193,
      y: -305.9647,
      id: 'htmlpar',
      name: 'htmlpar',
      symbolSize: 22,
      itemStyle: {
        normal: {
          color: '#4f19c7'
        }
      }
    },
    {
      x: -967.41296,
      y: -187.65944,
      id: 'contextify',
      name: 'contextify',
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: '#4f19c7'
        }
      }
    }
  ]
  const edges1 = [
    {
      source: 'htmlparser',
      target: 'htmlpar',
      label: {
        normal: {
          show: true
        }
      },
      lineStyle: {
        normal: {
          color: 'rgb(255, 171, 58)'
        }
      }
    },
    {
      source: 'htmlparser',
      target: 'jquery',
      label: {
        normal: {
          show: true
        }
      },
      lineStyle: {
        normal: {
          color: 'rgb(255, 171, 58)'
        }
      }
    },
    {
      source: 'jquery',
      target: 'jsdom',
      lineStyle: {
        normal: {
          color: 'rgb(97, 160, 168)'
        }
      }
    },
    {
      source: 'jquery',
      target: 'xmlhttprequest',
      lineStyle: {
        normal: {
          color: 'rgb(97, 160, 168)'
        }
      }
    },
    {
      source: 'jquery',
      target: 'contextify',
      lineStyle: {
        normal: {
          color: 'rgb(97, 160, 168)'
        }
      }
    },
    {
      source: 'xmlhttprequest',
      target: 'xmlhttprequest.io'
    },
    {
      source: 'xmlhttprequest',
      target: 'xmlhttprequest.io1'
    },
    {
      source: 'jquery',
      target: 'xmlhttprequest1',
      lineStyle: {
        normal: {
          color: 'rgb(97, 160, 168)'
        }
      }
    }
  ]
  const extendGraph2 = {
    title: {
      text: 'NPM Dependencies'
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        force: {
          repulsion: 500,
          gravity: 0.1
        },
        type: 'graph',
        layout: 'none',
        data: dataGraph,
        edges: edges1,
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [2, 10],
        label: {
          emphasis: {
            position: 'right',
            show: true
          }
        },
        roam: true,
        focusNodeAdjacency: true,
        lineStyle: {
          normal: {
            width: 2
          }
        }
      }
    ]
  }

  return (
    <div className="app">
      <ChartGraph extend={extendGraph} data={{}} settings={chartSettings1} theme={newTheme}></ChartGraph>
      <ChartGraph extend={option} data={{}} settings={chartSettings1} theme={newTheme}></ChartGraph>
      <ChartGraph extend={extendGraph2} data={{}} settings={chartSettings1} theme={newTheme}></ChartGraph>
    </div>
  )
}

export default App
