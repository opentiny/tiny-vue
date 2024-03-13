import { ChartRing } from '@opentiny/react'
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

  const [chartSettings1, setChartSettings1] = useState({})
  const chartSettings2 = {
    radius: [30, 60]
  }
  const extend = {
    title: {
      subtext: '999911111111111\n6666\n333',
      top: '42%', // 4.7.0 echarts的top:middle失效，可设置百分比控制居中
      left: 'center',
      show: true,
      text: '6666'
    }
  }
  return (
    <div className="app">
      <h3>圆环图</h3>
      <ChartRing data={chartData} settings={chartSettings1} theme={newTheme}></ChartRing>
      <ChartRing data={chartData} settings={chartSettings2} theme={newTheme}></ChartRing>
      <ChartRing data={chartData} settings={chartSettings1} theme={newTheme} extend={extend}></ChartRing>
    </div>
  )
}

export default App
