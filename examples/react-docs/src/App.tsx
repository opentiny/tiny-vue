import {
  Button,
  Alert,
  Switch,
  Badge,
  BaiduMap,
  ChartSunburst,
  ChartMount,
  AutonaviMap,
  ChartBoxplot
} from '@opentiny/react'
import { useState } from 'react'
import { extend } from './test.js'

// 在这里导入组件，进行 api 调试
function App() {
  // const loadingInstance = null
  // const closeLoading = () => {
  //   loadingInstance.close()
  // }

  function close() {}

  const newTheme = null
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
  const chartData2 = {
    columns: ['状态', '数值'],
    rows: [
      { 状态: '展示', 数值: 900 },
      { 状态: '访问', 数值: 600 },
      { 状态: '点击', 数值: 300 },
      { 状态: '订单', 数值: 100 }
    ]
  }
  // const chartData3 = {
  //   columns: ['type', 'a', 'b', 'value'],
  //   rows: [{ type: '速度', value: 80, a: 10, b: 2 }]
  // }
  const chartData4 = {
    columns: ['city', 'percent'],
    rows: [
      {
        city: '上海',
        percent: 0.6
      }
    ]
  }
  const chartData5 = {
    columns: ['日期', '访问用户', '下单用户', '下单率'],
    rows: [
      { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
      { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
      { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
      { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
      { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
      { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
    ]
  }
  const chartData6 = {
    columns: ['页面', '访问量'],
    rows: [
      { 页面: '首页', 访问量: 100000 },
      { 页面: '列表页a', 访问量: 20000 },
      { 页面: '列表页b', 访问量: 80000 },
      { 页面: '内容页a-1', 访问量: 10000 },
      { 页面: '内容页a-2', 访问量: 10000 },
      { 页面: '内容页b-1', 访问量: 60000 },
      { 页面: '内容页b-2', 访问量: 20000 }
    ]
  }
  const chartData7 = {
    columns: ['活动', '时间'],
    rows: [
      { 活动: '吃饭', 时间: 4 },
      { 活动: '睡觉', 时间: 10 },
      { 活动: '打豆豆', 时间: 5 }
    ]
  }
  const [chartData3, setChartData3] = useState({
    columns: ['type', 'a', 'b', 'value'],
    rows: [{ type: '速度', value: 80, a: 10, b: 2 }]
  })
  const [chartSettings1, setChartSettings1] = useState({
    type: 'line'
  })
  const chartSettings2 = {
    type: 'pie'
  }
  const chartSettings3 = {
    type: 'histogram'
  }
  const chartSettings4 = {
    links: [
      { source: '首页', target: '列表页a', value: 0.5 },
      { source: '首页', target: '列表页b', value: 0.5 },
      { source: '列表页a', target: '内容页a-1', value: 0.1 },
      { source: '列表页a', target: '内容页a-2', value: 0.4 },
      { source: '列表页b', target: '内容页b-1', value: 0.2 },
      { source: '列表页b', target: '内容页b-2', value: 0.3 }
    ]
  }
  const themeName = {
    backgroundColor: '#2bf666'
  }
  const listeners = {
    toggle: () => {
      setChartSettings1((data) => {
        return data.type === 'line' ? { type: 'bar' } : { type: 'line' }
      })
    },
    click: () => {
      console.log(122333)
    }
  }

  const chartSettings = {}
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
  const chartDataCandle = {
    columns: ['日期', 'open', 'close', 'lowest', 'highest', 'vol'],
    rows: [
      {
        日期: '2004-01-05',
        open: 10411.85,
        close: 10544.07,
        lowest: 10411.85,
        highest: 10575.92,
        vol: 221290000
      },
      {
        日期: '2004-01-06',
        open: 10543.85,
        close: 10538.66,
        lowest: 10454.37,
        highest: 10584.07,
        vol: 191460000
      },
      {
        日期: '2004-01-07',
        open: 10535.46,
        close: 10529.03,
        lowest: 10432.12,
        highest: 10587.55,
        vol: 225490000
      },
      {
        日期: '2004-01-08',
        open: 10530.07,
        close: 10592.44,
        lowest: 10480.59,
        highest: 10651.99,
        vol: 237770000
      },
      {
        日期: '2004-01-09',
        open: 10589.25,
        close: 10458.89,
        lowest: 10420.52,
        highest: 10603.48,
        vol: 223250000
      },
      {
        日期: '2004-01-12',
        open: 10461.55,
        close: 10485.18,
        lowest: 10389.85,
        highest: 10543.03,
        vol: 197960000
      },
      {
        日期: '2004-01-13',
        open: 10485.18,
        close: 10427.18,
        lowest: 10341.19,
        highest: 10539.25,
        vol: 197310000
      },
      {
        日期: '2004-01-14',
        open: 10428.67,
        close: 10538.37,
        lowest: 10426.89,
        highest: 10573.85,
        vol: 186280000
      },
      {
        日期: '2004-01-15',
        open: 10534.52,
        close: 10553.85,
        lowest: 10454.52,
        highest: 10639.03,
        vol: 260090000
      },
      {
        日期: '2004-01-16',
        open: 10556.37,
        close: 10600.51,
        lowest: 10503.71,
        highest: 10666.88,
        vol: 254170000
      },
      {
        日期: '2004-01-20',
        open: 10601.42,
        close: 10528.66,
        lowest: 10447.92,
        highest: 10676.96,
        vol: 224300000
      },
      {
        日期: '2004-01-21',
        open: 10522.77,
        close: 10623.62,
        lowest: 10453.11,
        highest: 10665.72,
        vol: 214920000
      },
      {
        日期: '2004-01-22',
        open: 10624.22,
        close: 10623.18,
        lowest: 10545.03,
        highest: 10717.41,
        vol: 219720000
      },
      {
        日期: '2004-01-23',
        open: 10625.25,
        close: 10568.29,
        lowest: 10490.14,
        highest: 10691.77,
        vol: 234260000
      },
      {
        日期: '2004-01-26',
        open: 10568.12,
        close: 10702.51,
        lowest: 10510.44,
        highest: 10725.18,
        vol: 186170000
      },
      {
        日期: '2004-01-27',
        open: 10701.11,
        close: 10609.92,
        lowest: 10579.33,
        highest: 10748.81,
        vol: 206560000
      },
      {
        日期: '2004-01-28',
        open: 10610.07,
        close: 10468.37,
        lowest: 10412.44,
        highest: 10703.25,
        vol: 247660000
      },
      {
        日期: '2004-01-29',
        open: 10467.41,
        close: 10510.29,
        lowest: 10369.92,
        highest: 10611.56,
        vol: 273970000
      },
      {
        日期: '2004-01-30',
        open: 10510.22,
        close: 10488.07,
        lowest: 10385.56,
        highest: 10551.03,
        vol: 208990000
      },
      {
        日期: '2004-02-02',
        open: 10487.78,
        close: 10499.18,
        lowest: 10395.55,
        highest: 10614.44,
        vol: 224800000
      },
      {
        日期: '2004-02-03',
        open: 10499.48,
        close: 10505.18,
        lowest: 10414.15,
        highest: 10571.48,
        vol: 183810000
      },
      {
        日期: '2004-02-04',
        open: 10503.11,
        close: 10470.74,
        lowest: 10394.81,
        highest: 10567.85,
        vol: 227760000
      },
      {
        日期: '2004-02-05',
        open: 10469.33,
        close: 10495.55,
        lowest: 10399.92,
        highest: 10566.37,
        vol: 187810000
      },
      {
        日期: '2004-02-06',
        open: 10494.89,
        close: 10593.03,
        lowest: 10433.74,
        highest: 10634.81,
        vol: 182880000
      },
      {
        日期: '2004-02-09',
        open: 10592.41,
        close: 10579.03,
        lowest: 10433.72,
        highest: 10634.81,
        vol: 160720000
      },
      {
        日期: '2004-02-10',
        open: 10578.74,
        close: 10613.85,
        lowest: 10511.18,
        highest: 10667.03,
        vol: 160590000
      },
      {
        日期: '2004-02-11',
        open: 10605.48,
        close: 10737.72,
        lowest: 10561.55,
        highest: 10779.41,
        vol: 277850000
      },
      {
        日期: '2004-02-12',
        open: 10735.18,
        close: 10694.07,
        lowest: 10636.44,
        highest: 10775.03,
        vol: 197560000
      },
      {
        日期: '2004-02-13',
        open: 10696.22,
        close: 10627.85,
        lowest: 10578.66,
        highest: 10755.47,
        vol: 208340000
      },
      {
        日期: '2004-02-17',
        open: 10628.88,
        close: 10714.88,
        lowest: 10628.88,
        highest: 10762.07,
        vol: 169730000
      },
      {
        日期: '2004-02-18',
        open: 10706.68,
        close: 10671.99,
        lowest: 10623.62,
        highest: 10764.36,
        vol: 164370000
      },
      {
        日期: '2004-02-19',
        open: 10674.59,
        close: 10664.73,
        lowest: 10626.44,
        highest: 10794.95,
        vol: 219890000
      },
      {
        日期: '2004-02-20',
        open: 10666.29,
        close: 10619.03,
        lowest: 10559.11,
        highest: 10722.77,
        vol: 220560000
      },
      {
        日期: '2004-02-23',
        open: 10619.55,
        close: 10609.62,
        lowest: 10508.89,
        highest: 10711.84,
        vol: 229950000
      },
      {
        日期: '2004-02-24',
        open: 10609.55,
        close: 10566.37,
        lowest: 10479.33,
        highest: 10681.41,
        vol: 225670000
      },
      {
        日期: '2004-02-25',
        open: 10566.59,
        close: 10601.62,
        lowest: 10509.42,
        highest: 10660.73,
        vol: 192420000
      },
      {
        日期: '2004-02-26',
        open: 10598.14,
        close: 10580.14,
        lowest: 10493.71,
        highest: 10652.96,
        vol: 223230000
      },
      {
        日期: '2004-02-27',
        open: 10581.55,
        close: 10583.92,
        lowest: 10519.03,
        highest: 10689.55,
        vol: 200050000
      }
    ]
  }
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
  const chartSettingsBox = {
    tooltipLabel: ['下限', '下四分位数', '中位数', '上四分位数', '上限']
  }
  const chartDataBox = [
    [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
    [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
    [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
    [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
    [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
  ]
  const extendBox = {
    title: [
      {
        text: 'Michelson-Morley Experiment',
        left: 'center'
      },
      {
        text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
        borderColor: '#aaa',
        borderWidth: 1,
        textStyle: {
          fontSize: 14
        },
        left: '10%',
        top: '90%'
      }
    ],
    xAxis: {
      axisLabel: {
        formatter: 'expr {value}'
      }
    }
  }
  function closeSlot() {
    return (
      <>
        <div onClick={close}>关闭</div>
        <div>111</div>
      </>
    )
  }
  const chartEvents = {
    click: (data) => {
      console.log(data, 'data')
    }
  }
  return (
    <div className="app">
      <button onClick={listeners.toggle}>111</button>
      <Button listeners={listeners}>点击按钮</Button>
      <Alert description="默认提示组件" closable={false} close={closeSlot}>
        <template v-slot:close></template>
        <template v-slot:a>
          <div onClick={close}>关闭</div>
          <div>111</div>
        </template>
      </Alert>
      <Switch />
      <Badge value={10}>待办</Badge>
      {/* <Chart data={chartData1} settings={chartSettings1} theme={newTheme} tooltipVisible={true}></Chart>
      <ChartLine data={chartData} settings={chartSettings1} theme={newTheme} tooltipVisible={true} />
      <Chart data={chartData} settings={chartSettings2} theme={themeName}></Chart>
      <Chart data={chartData} settings={chartSettings3} theme={themeName}></Chart> */}
      <AutonaviMap series={chartSeries} settings={chartSettingsMap1} tooltip={chartTooltip} data={{}}></AutonaviMap>
      {/* <ChartWordcloud data={chartDataWord} settings={chartSettings1}></ChartWordcloud><ChartCandle data={chartDataCandle} settings={chartSettings}></ChartCandle>
      <ChartFunnel data={chartData2} settings={chartSettings3} theme={themeName}></ChartFunnel>
      <ChartGauge data={chartData3} settings={chartSettings3}></ChartGauge>
      <ChartGraph extend={extendGraph} settings={chartSettings3} data={{}}></ChartGraph>
      <ChartHeatmap data={chartData} settings={chartSettings3}></ChartHeatmap>
      <ChartHistogram data={chartData} settings={chartSettings3}></ChartHistogram>
      <ChartLiquidfill data={chartData4} settings={chartSettings3}></ChartLiquidfill>
      <ChartRadar data={chartData5} settings={chartSettings3}></ChartRadar>
      <ChartRing data={chartData5} settings={chartSettings3}></ChartRing>
      <ChartSankey data={chartData6} settings={chartSettings4}></ChartSankey>
      <ChartScatter data={chartData} settings={chartSettings3}></ChartScatter>
      <ChartTree data={treeCharData} settings={chartSettings1}></ChartTree>
      <ChartWaterfall data={chartData7} settings={chartSettings3}></ChartWaterfall> */}
      <BaiduMap series={chartSeries} settings={chartSettingsMap2} tooltip={chartTooltip} data={{}}></BaiduMap>
      <ChartSunburst extend={extend} settings={chartSettings3} data={{}}></ChartSunburst>
      <ChartMount data={chartData} settings={chartSettings2} tooltipVisible={true}></ChartMount>
      <ChartBoxplot
        data={chartDataBox}
        settings={chartSettingsBox}
        extend={extendBox}
        events={chartEvents}
        judge-width></ChartBoxplot>
    </div>
  )
}

export default App
