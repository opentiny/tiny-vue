import ChartBaiduMap from '@opentiny/react/src/chart/baidu-map/src'

// 在这里导入组件，进行 api 调试
function App() {
  const chartTooltip = { show: true }

  const chartSeries = [
    {
      type: 'scatter',
      coordinateSystem: 'bmap',
      data: [
        [120, 30, 1] // 经度，维度，value，...
      ]
    }
  ]

  const chartSettingsMap2 = {
    key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
    url: 'https://api.map.baidu.com/api', // 百度地图的接口地址
    bmap: {
      center: [120, 30],
      zoom: 14,
      roam: true,
      mapStyle: {}
    }
  }
  return (
    <div className="app">
      <ChartBaiduMap settings={chartSettingsMap2} series={chartSeries} tooltip={chartTooltip} data={{}}></ChartBaiduMap>
    </div>
  )
}

export default App
