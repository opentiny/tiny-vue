import { ChartLiquidfill } from '@opentiny/react'
import { useState } from 'react'

// 在这里导入组件，进行 api 调试
function App() {
  const [newTheme, setNewTheme] = useState(null)

  const [chartSettings1, setChartSettings1] = useState({})
  const chartData4 = {
    columns: ['city', 'percent'],
    rows: [
      {
        city: '上海',
        percent: 0.6
      }
    ]
  }
  const chartSettings2 = {
    wave: [0.5, 0.3, 0.2],
    seriesMap: {
      上海: {
        color: ['red', 'green', 'yellow']
      }
    }
  }
  const chartData = {
    columns: ['city', 'percent'],
    rows: [
      {
        city: '上海',
        percent: 0.6
      },
      {
        city: '广州',
        percent: 0.4
      },
      {
        city: '成都',
        percent: 0.9
      }
    ]
  }
  const chartSettings3 = {
    seriesMap: [
      {
        center: ['24%', '20%'],
        radius: '40%'
      },
      {
        center: ['25%', '70%'],
        radius: '40%'
      },
      { center: ['70%', '50%'], radius: '40%' }
    ]
  }
  const chartSettings4 = {
    seriesMap: {
      上海: {
        shape: 'rect'
      }
    }
  }
  const chartSettings5 = {
    seriesMap: {
      上海: {
        color: ['red'],
        itemStyle: {
          opacity: 0.2
        },
        emphasis: {
          itemStyle: {
            opacity: 0.8
          }
        },
        backgroundStyle: {
          color: 'yellow'
        },
        label: {
          formatter(options) {
            const { seriesName, value } = options
            return `${seriesName}\n${value * 100}%`
          },
          fontSize: 40,
          color: 'green',
          insideColor: 'red'
        }
      }
    }
  }
  return (
    <div className="app">
      <ChartLiquidfill data={chartData4} settings={chartSettings1} theme={newTheme}></ChartLiquidfill>
      <ChartLiquidfill data={chartData4} settings={chartSettings2} theme={newTheme}></ChartLiquidfill>
      <ChartLiquidfill data={chartData} settings={chartSettings3} theme={newTheme}></ChartLiquidfill>,
      <ChartLiquidfill data={chartData4} settings={chartSettings4} theme={newTheme}></ChartLiquidfill>,
      <ChartLiquidfill data={chartData4} settings={chartSettings5} theme={newTheme}></ChartLiquidfill>
    </div>
  )
}

export default App
