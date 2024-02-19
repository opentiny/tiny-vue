import { ChartLine } from '@opentiny/react'

// 在这里导入组件，进行 api 调试
function App() {
  const newTheme = null
  const chartData = {
    columns: ['日期', '余额', '年龄'],
    rows: [
      { 日期: '1-1', 余额: 123, 年龄: 30 },
      { 日期: '2', 余额: 1223, 年龄: 6 },
      { 日期: '3', 余额: 2123, 年龄: 90 },
      { 日期: '4', 余额: 4123, 年龄: 20 },
      { 日期: '5', 余额: 3123, 年龄: 50 },
      { 日期: '6', 余额: 7123, 年龄: 20 }
    ]
  }
  const chartData2 = {
    columns: ['日期', '访问用户', '下单用户', '下单率'],
    rows: [
      { 日期: '2018-01-01', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
      { 日期: '2018-01-02', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
      { 日期: '2018-01-03', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
      { 日期: '2018-01-05', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
      { 日期: '2018-01-10', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
      { 日期: '2018-01-20', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
    ]
  }
  const chartSettings1 = {
    stack: { xiao: ['余额'] },
    area: true
  }
  const chartSettings2 = {
    axisSite: { right: ['年龄'] },
    yAxisType: ['KMB', 'percent'],
    yAxisName: ['余额', '年龄'],
    xAxis: [
      {
        axisLabel: {
          rotate: 45
        }
      }
    ]
  }
  const chartSettings3 = {
    xAxisType: 'time'
  }
  const extend = {
    series: {
      label: {
        normal: {
          show: true
        }
      }
    }
  }
  return (
    <div className="app">
      <ChartLine data={chartData} extend={extend} settings={chartSettings1} theme={newTheme} tooltipVisible={true} />
      <ChartLine data={chartData} settings={chartSettings2} theme={newTheme} tooltipVisible={true} />
      <ChartLine data={chartData2} settings={chartSettings3} theme={newTheme} />
    </div>
  )
}

export default App
