import { Button, Chart, ChartLine } from '@opentiny/react'
import { useState } from 'react'
import './chart.css'
import { getRandomColor } from './methods'
import 'echarts/lib/component/dataZoom'

function App() {
  const [hasDataHandler, setHasDataHandler] = useState(false)
  // let newTheme = null
  const [newTheme, setNewTheme] = useState(null)
  const chartData = {
    columns: ['日期', '余额', '年龄'],
    rows: [
      { 日期: '1-1', 余额: 1230, 年龄: 300 },
      { 日期: '2', 余额: 1223, 年龄: 6 },
      { 日期: '3', 余额: 2123, 年龄: 90 },
      { 日期: '4', 余额: 4123, 年龄: 1200 },
      { 日期: '5', 余额: 3123, 年龄: 1500 },
      { 日期: '6', 余额: 7123, 年龄: 2000 }
    ]
  }
  const chartData1 = {
    columns: ['日期', '12', '13'],
    rows: [
      { 日期: 2, 12: 123, 13: 111 },
      { 日期: 3, 12: 1223, 13: 111 },
      { 日期: 4, 12: 2123, 13: 111 },
      { 日期: 5, 12: 5123, 13: 111 },
      { 日期: 6, 12: 7123, 13: 111 }
    ]
  }
  const [loading, setLoading] = useState(true)
  const [chartSettings1, setChartSettings1] = useState({
    type: 'line'
  })
  const chartSettings2 = {
    type: 'pie'
  }
  const chartSettings3 = {
    type: 'histogram'
  }

  const themeName = {
    backgroundColor: '#2bf666'
  }
  const [hasResize, setHasResize] = useState(false)
  const [colors, setColors] = useState(['red', 'green'])
  const listeners = {
    toggle: () => {
      setChartSettings1((data) => {
        return data.type === 'line' ? { type: 'bar' } : { type: 'line' }
      })
    },
    click: () => {
      setParentStyle((data) => (data === '100%' ? '90%' : '100%'))
      setHasResize(() => true)
      setNewTheme(() => {
        return {
          color: [
            '#C1232B',
            '#B5C334',
            '#FCCE10',
            '#E87C25',
            '#27727B',
            '#FE8463',
            '#9BCA63',
            '#FAD860',
            '#F3A43B',
            '#60C0DD',
            '#D7504B',
            '#C6E579',
            '#F4E001',
            '#F0805A',
            '#26C0C0'
          ],
          backgroundColor: getRandomColor()
        }
      })
      addDataZoomImg()
      listeners.toggle()
      setColors(() => [1, 2, 3, 4, 5, 6, 7].map(() => getRandomColor()))
      setChartExtend((data) => {
        data.series.barWidth = data.series.barWidth === 10 ? 30 : 10
        return data
      })
      setLoading(() => false)
      setTimeout(() => {
        setHasResize(() => false)
      })
    }
  }
  const initOptions = {
    width: '8000px',
    height: '1000px'
  }
  const [dataZoom, setDataZoom] = useState([
    {
      type: 'slider',
      start: 0,
      end: 20,
      handleIcon: ''
    }
  ])

  const [chartExtend, setChartExtend] = useState({
    series: {
      barWidth: 10
    },
    tooltip: {
      trigger: 'none'
    }
  })
  const chartDataEmpty = {
    columns: ['余额'],
    rows: []
  }
  function addDataZoomImg() {
    setDataZoom((data) => {
      data[0].handleIcon = `image://https://res.hc-cdn.com/tiny-vue-web-doc/2.2.0.20240127151659/static/images/data-zoom.png`
      return data
    })
    setHasDataHandler(() => true)
    setTimeout(() => {
      setHasDataHandler(() => false)
    })
  }
  const grid = {
    show: true,
    top: 180,
    left: 100,
    backgroundColor: '#ccc',
    borderColor: '#000'
  }
  const visualMap = [
    {
      type: 'piecewise',
      splitNumber: 8,
      min: 0,
      max: 7200,
      right: 0,
      top: '50%'
    }
  ]
  const toolbox = {
    feature: {
      magicType: { type: ['line', 'bar'] },
      saveAsImage: {}
    }
  }
  const markLine = {
    data: [
      {
        name: '平均线',
        type: 'average'
      }
    ]
  }
  const markPoint = {
    data: [
      {
        name: '最大值',
        type: 'max'
      }
    ]
  }
  const [parentStyle, setParentStyle] = useState('90%')
  function afterConfig(options) {
    options.tooltip.showDelay = 500

    return options
  }
  return (
    <div className="app">
      <Button listeners={listeners}>点击按钮</Button>
      <div style={{ 'width': parentStyle }}>
        <Chart
          hasResize={hasResize}
          data={chartData1}
          settings={chartSettings1}
          theme={newTheme}
          tooltipVisible={true}
          initOptions={initOptions}
          dataZoom={dataZoom}
          loading={loading}
          hasDataHandler={hasDataHandler}
          colors={colors}></Chart>
      </div>
      <ChartLine
        data={chartData}
        settings={chartSettings1}
        theme={newTheme}
        tooltipVisible={false}
        colors={colors}
        legendVisible={false}
        visualMap={visualMap}
        markLine={markLine}
        markPoint={markPoint}
        grid={{ right: 130 }}
        toolbox={toolbox}
      />
      <Chart
        data={chartData}
        settings={chartSettings2}
        theme={themeName}
        colors={colors}
        afterConfig={afterConfig}></Chart>
      <Chart
        data={chartData}
        settings={chartSettings3}
        theme={themeName}
        colors={colors}
        extend={chartExtend}
        grid={grid}></Chart>
      <Chart data={chartDataEmpty} settings={chartSettings3} theme={themeName}>
        <div className="data-empty">暂无数据😂</div>
      </Chart>
      <Chart data={chartDataEmpty} settings={chartSettings3} theme={themeName} dataEmpty={true}></Chart>
    </div>
  )
}

export default App
