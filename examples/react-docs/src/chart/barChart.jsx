import { ChartHistogram } from '@opentiny/react'
import { useState } from 'react'

// 在这里导入组件，进行 api 调试
function App() {
  const [newTheme, setNewTheme] = useState(null)
  const chartData = {
    columns: ['日期', '余额', '年龄'],
    rows: [
      { 日期: '1-1', 余额: 123, 年龄: 300 },
      { 日期: '2', 余额: 1223, 年龄: 6 },
      { 日期: '3', 余额: 2123, 年龄: 90 },
      { 日期: '4', 余额: 4123, 年龄: 1200 },
      { 日期: '5', 余额: 3123, 年龄: 1500 },
      { 日期: '6', 余额: 7123, 年龄: 2000 }
    ]
  }

  const [chartSettings1, setChartSettings1] = useState({
    xAxis: [
      {
        axisLabel: {
          rotate: 45
        }
      }
    ]
  })
  const extend = {
    series: {
      label: { show: true, position: 'top' }
    }
  }
  const charSettings2 = {
    stack: { 用户: ['余额', '年龄'] }
  }
  return (
    <div className="app">
      <ChartHistogram extend={extend} data={chartData} settings={chartSettings1} theme={newTheme}></ChartHistogram>
      <ChartHistogram data={chartData} settings={charSettings2} theme={newTheme}></ChartHistogram>
    </div>
  )
}

export default App
