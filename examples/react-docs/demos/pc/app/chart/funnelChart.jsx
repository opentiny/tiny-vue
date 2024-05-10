import CharFunnel from '@opentiny/react/src/chart/chart-funnel/src'

// 在这里导入组件，进行 api 调试
function App() {
  const newTheme = null
  const chartData2 = {
    columns: ['状态', '数值'],
    rows: [
      { 状态: '展示', 数值: 900 },
      { 状态: '访问', 数值: 1000 },
      { 状态: '点击', 数值: 300 },
      { 状态: '订单', 数值: 0 }
    ]
  }

  const chartSettings1 = {}
  const chartSettings2 = {
    useDefaultOrder: true,
    filterZero: true
  }
  const chartSettings3 = { ascending: true }

  return (
    <div className="app">
      <CharFunnel data={chartData2} settings={chartSettings1} />
      <CharFunnel data={chartData2} settings={chartSettings2} />
      <CharFunnel data={chartData2} settings={chartSettings3} />
    </div>
  )
}

export default App
