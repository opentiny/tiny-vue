import { AutonaviMap } from '@opentiny/react'

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

  const chartSettingsMap1 = {
    key: '4b5f2cf2cba25200cc6b68c398468899',
    url: 'https://webapi.amap.com/maps', // 谷歌地图接口的url地址
    v: '1.4.3',
    amap: {
      resizeEnable: true,
      center: [120.14322240845, 30.236064370321],
      zoom: 10
    }
  }
  return (
    <div className="app">
      <AutonaviMap series={chartSeries} settings={chartSettingsMap1} tooltip={chartTooltip} data={{}}></AutonaviMap>
    </div>
  )
}

export default App
