import { Button, Alert, Switch, Badge } from '@opentiny/react'
import Base from './chart/base.jsx'
import AutonaviMapChart from './chart/autonaviMapChart.jsx'
import BaiduMap from './chart/baiduMap.jsx'
import BarChart from './chart/barChart.jsx'
import BoxplotChart from './chart/boxplotChart.jsx'
import CandlChart from './chart/candlChart.jsx'
import FunnelChart from './chart/funnelChart.jsx'
import GraphChart from './chart/graphChart.jsx'
import GuageChart from './chart/guageChart.jsx'
import HeatmapChart from './chart/heatmapChart.jsx'
import LineChart from './chart/lineChart.jsx'
import LiquidfillChart from './chart/liquidfillChart.jsx'
import MountChart from './chart/mountChart.jsx'
import PieChart from './chart/pieChart.jsx'
import Radar from './chart/radar.jsx'
import RrankChart from './chart/rankChart.jsx'
import RingChart from './chart/ringChart.jsx'
import SankeyChart from './chart/sankeyChart.jsx'
import ScatterChart from './chart/scatterChart.jsx'
import SunburstChart from './chart/sunburstChart.jsx'
import TreeChart from './chart/treeChart.jsx'
import WatwrfallChart from './chart/watwrfallChart.jsx'
import Wordcloud from './chart/wordcloud.jsx'
import Anchor from './anchor/base.js'

// 在这里导入组件，进行 api 调试
function App() {
  function close() {}

  function closeSlot() {
    return (
      <>
        <div onClick={close}>关闭</div>
        <div>111</div>
      </>
    )
  }

  return (
    <div className="root">
      <button>111</button>
      <Button>点击按钮</Button>
      <Alert description="默认提示组件" closable={false} close={closeSlot}>
        <template v-slot:close></template>
        <template v-slot:a>
          <div onClick={close}>关闭</div>
          <div>111</div>
        </template>
      </Alert>
      <Switch />
      <Badge value={10}>待办</Badge>
      <div className="chart">
        <Base></Base>
        <AutonaviMapChart></AutonaviMapChart>
        <BaiduMap></BaiduMap>
        <BarChart></BarChart>
        <BoxplotChart></BoxplotChart>
        <CandlChart></CandlChart>
        <FunnelChart></FunnelChart>
        <GraphChart></GraphChart>
        <GuageChart></GuageChart>
        <HeatmapChart></HeatmapChart>
        <LineChart></LineChart>
        <LiquidfillChart></LiquidfillChart>
        <MountChart></MountChart>
        <PieChart></PieChart>
        <Radar></Radar>
        <RrankChart></RrankChart>
        <RingChart></RingChart>
        <SankeyChart></SankeyChart>
        <ScatterChart></ScatterChart>
        <SunburstChart></SunburstChart>
        <TreeChart></TreeChart>
        <WatwrfallChart></WatwrfallChart>
        <Wordcloud></Wordcloud>
      </div>
      <Anchor></Anchor>
    </div>
  )
}

export default App
