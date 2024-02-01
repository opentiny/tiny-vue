import { ChartSunburst } from '@opentiny/react'
import { useState } from 'react'
import { extend, extend2 } from './chartData'

// 在这里导入组件，进行 api 调试
function App() {
  const [chartSettings1, setChartSettings1] = useState({})

  return (
    <div className="app">
      <ChartSunburst extend={extend} settings={chartSettings1} data={{}}></ChartSunburst>
      <ChartSunburst extend={extend2} settings={chartSettings1} data={{}}></ChartSunburst>
    </div>
  )
}

export default App
