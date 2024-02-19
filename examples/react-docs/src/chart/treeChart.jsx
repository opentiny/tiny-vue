import { ChartTree } from '@opentiny/react'
import { useState } from 'react'
import { treeCharData, treeCharData2 } from './chartData'

// 在这里导入组件，进行 api 调试
function App() {
  const [newTheme, setNewTheme] = useState(null)

  const [chartSettings1, setChartSettings1] = useState({})
  const chartSettings2 = {
    seriesMap: {
      tree1: {
        layout: 'radial'
      }
    }
  }
  const chartSettings3 = {
    seriesMap: {
      tree1: {
        orient: 'vertical'
      }
    }
  }
  const extend = {
    tooltip: {
      // alwaysShowContent: true
    }
  }
  const chartSettings4 = {
    seriesMap: {
      tree1: {
        top: '5%',
        left: '7%',
        bottom: '2%',
        right: '60%'
      },
      tree2: {
        top: '20%',
        left: '60%',
        bottom: '22%',
        right: '18%'
      }
    }
  }
  function tooltipFormatter(v) {
    return [`${v.seriesName}: ${v.data.value}`, `<a target="_blank" href="${v.data.link}">${v.data.link}</a>`].join(
      '<br>'
    )
  }
  return (
    <div className="app">
      <ChartTree data={treeCharData} settings={chartSettings1} theme={newTheme}></ChartTree>
      <ChartTree data={treeCharData2} settings={chartSettings4} theme={newTheme}></ChartTree>
      <ChartTree data={treeCharData} settings={chartSettings2} theme={newTheme}></ChartTree>
      <ChartTree data={treeCharData} settings={chartSettings3} theme={newTheme}></ChartTree>
      <ChartTree
        data={treeCharData}
        settings={chartSettings1}
        theme={newTheme}
        extend={extend}
        tooltipFormatter={tooltipFormatter}></ChartTree>
    </div>
  )
}

export default App
