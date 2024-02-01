import { ChartWordcloud } from '@opentiny/react'
import { useState } from 'react'
import { chartDataWord } from './chartData'

// 在这里导入组件，进行 api 调试
function App() {
  const [newTheme, setNewTheme] = useState(null)

  const [chartSettings1, setChartSettings1] = useState({})
  const chartSettings2 = {
    color: ['#ff0', '#00f', '#f00', '#0ff']
  }
  const chartSettings3 = {
    shape: 'diamond'
  }
  const chartSettings4 = {
    sizeMin: 30,
    sizeMax: 60
  }
  return (
    <div className="app">
      <ChartWordcloud data={chartDataWord} settings={chartSettings1} theme={newTheme}></ChartWordcloud>,
      <ChartWordcloud data={chartDataWord} settings={chartSettings2} theme={newTheme}></ChartWordcloud>
      <ChartWordcloud data={chartDataWord} settings={chartSettings3} theme={newTheme}></ChartWordcloud>,
      <ChartWordcloud data={chartDataWord} settings={chartSettings4} theme={newTheme}></ChartWordcloud>
    </div>
  )
}

export default App
