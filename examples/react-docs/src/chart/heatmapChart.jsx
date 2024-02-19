import { ChartHeatmap } from '@opentiny/react'
import { useState } from 'react'

// 在这里导入组件，进行 api 调试
function App() {
  const chartData = {
    columns: ['时间', '地点', '人数'],
    rows: [
      { 时间: '星期二', 地点: '上海', 人数: 400 },
      { 时间: '星期三', 地点: '杭州', 人数: 801 },
      { 时间: '星期二', 地点: '深圳', 人数: 200 },
      { 时间: '星期三', 地点: '长春', 人数: 100 },
      { 时间: '星期五', 地点: '南京', 人数: 300 },
      { 时间: '星期四', 地点: '江苏', 人数: 800 },
      { 时间: '星期一', 地点: '北京', 人数: 700 },
      { 时间: '星期三', 地点: '上海', 人数: 300 },
      { 时间: '星期二', 地点: '杭州', 人数: 500 }
    ]
  }
  const [chartSettings1, setChartSettings1] = useState({})
  const chartSettings2 = {
    xAxisList: ['星期一', '星期二', '星期三', '星期四', '星期五'],
    yAxisList: ['北京', '上海', '杭州', '深圳', '长春', '南京', '江苏']
  }
  const visualMap = { min: 0, max: 1000, type: 'piecewise', right: 0, top: '50%' }
  const grid = { right: 100 }
  const chartSettings3 = {
    key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
    url: 'https://api.map.baidu.com/api',
    bmap: {
      center: [120.14322240845, 30.236064370321],
      zoom: 14,
      roam: true
    },
    type: 'bmap'
  }
  const chartData2 = {
    columns: ['lat', 'lng', '人数'],
    rows: [
      { lat: 115.892151, lng: 28.676493, 人数: 1000 },
      { lat: 117.000923, lng: 36.675807, 人数: 400 },
      { lat: 113.665412, lng: 34.757975, 人数: 800 },
      { lat: 114.298572, lng: 30.584355, 人数: 200 },
      { lat: 112.982279, lng: 28.19409, 人数: 100 },
      { lat: 113.280637, lng: 23.125178, 人数: 300 },
      { lat: 110.33119, lng: 20.031971, 人数: 8000 },
      { lat: 104.065735, lng: 30.659462, 人数: 700 },
      { lat: 108.948024, lng: 34.263161, 人数: 300 },
      { lat: 103.823557, lng: 36.058039, 人数: 500 }
    ]
  }
  return (
    <div className="app">
      <ChartHeatmap data={chartData} settings={chartSettings1} />
      <ChartHeatmap data={chartData} settings={chartSettings2} />
      <ChartHeatmap data={chartData} grid={grid} settings={chartSettings2} visualMap={visualMap} />
      <ChartHeatmap data={chartData2} settings={chartSettings3} />
    </div>
  )
}

export default App
