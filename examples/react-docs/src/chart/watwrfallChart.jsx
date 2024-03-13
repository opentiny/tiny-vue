import { ChartWaterfall } from '@opentiny/react'
import { useState } from 'react'

// 在这里导入组件，进行 api 调试
function App() {
  const [chartSettings1, setChartSettings1] = useState({})
  const chartData7 = {
    columns: ['活动', '时间'],
    rows: [
      { 活动: '吃饭', 时间: 4 },
      { 活动: '睡觉', 时间: 10 },
      { 活动: '打豆豆', 时间: 5 }
    ]
  }
  const chartSettings2 = {
    totalNum: 24,
    totalName: '总时间',
    remainName: '剩余时间'
  }
  return (
    <div className="app">
      <ChartWaterfall data={chartData7} settings={chartSettings1}></ChartWaterfall>
      <ChartWaterfall data={chartData7} settings={chartSettings2}></ChartWaterfall>
    </div>
  )
}

export default App
