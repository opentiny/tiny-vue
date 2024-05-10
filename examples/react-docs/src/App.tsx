// import { Button, Alert, Switch, Badge } from '@opentiny/react'
// import Base from './chart/base.jsx'
// import AutonaviMapChart from './chart/autonaviMapChart.jsx'
// import BaiduMap from './chart/baiduMap.jsx'
// import BarChart from './chart/barChart.jsx'
// import BoxplotChart from './chart/boxplotChart.jsx'
// import CandlChart from './chart/candlChart.jsx'
// import FunnelChart from './chart/funnelChart.jsx'
// import GraphChart from './chart/graphChart.jsx'
// import GuageChart from './chart/guageChart.jsx'
// import HeatmapChart from './chart/heatmapChart.jsx'
// import LineChart from './chart/lineChart.jsx'
// import LiquidfillChart from './chart/liquidfillChart.jsx'
// import MountChart from './chart/mountChart.jsx'
// import PieChart from './chart/pieChart.jsx'
// import Radar from './chart/radar.jsx'
// import RrankChart from './chart/rankChart.jsx'
// import RingChart from './chart/ringChart.jsx'
// import SankeyChart from './chart/sankeyChart.jsx'
// import ScatterChart from './chart/scatterChart.jsx'
// import SunburstChart from './chart/sunburstChart.jsx'
// import TreeChart from './chart/treeChart.jsx'
// import WatwrfallChart from './chart/watwrfallChart.jsx'
// import Wordcloud from './chart/wordcloud.jsx'
// import Anchor from './anchor/base.tsx'
// import Guide from './guide/base.jsx'
// import Breadcrumb from './breadcrumb/base.jsx'
// import Tag from './tag/base.jsx'
// import Tooltip from './tooltip/base.tsx'

// // 在这里导入组件，进行 api 调试
// function App() {
//   function close() {
//     console.log(1112)
//   }

//   function closeSlot() {
//     return (
//       <>
//         <div onClick={close}>关闭</div>
//       </>
//     )
//   }

//   return (
//     <div className="root">
//       <button>111</button>
//       <Button>点击按钮</Button>
//       <Alert description="默认提示组件" closable={false} slots={{ close: closeSlot }}></Alert>
//       <Alert description="默认提示组件"></Alert>

//       <Switch />
//       <Badge value={10}>待办</Badge>
//       <div className="chart">
//         <Base></Base>
//         <AutonaviMapChart></AutonaviMapChart>
//         <BaiduMap></BaiduMap>
//         <BarChart></BarChart>
//         <BoxplotChart></BoxplotChart>
//         <CandlChart></CandlChart>
//         <FunnelChart></FunnelChart>
//         <GraphChart></GraphChart>
//         <GuageChart></GuageChart>
//         <HeatmapChart></HeatmapChart>
//         <LineChart></LineChart>
//         <LiquidfillChart></LiquidfillChart>
//         <MountChart></MountChart>
//         <PieChart></PieChart>
//         <Radar></Radar>
//         <RrankChart></RrankChart>
//         <RingChart></RingChart>
//         <SankeyChart></SankeyChart>
//         <ScatterChart></ScatterChart>
//         <SunburstChart></SunburstChart>
//         <TreeChart></TreeChart>
//         <WatwrfallChart></WatwrfallChart>
//         <Wordcloud></Wordcloud>
//       </div>
//       <Anchor></Anchor>
//       <Guide></Guide>
//       <Breadcrumb></Breadcrumb>
//       <Tag></Tag>
//       <Tooltip></Tooltip>
//     </div>
//   )
// }

// export default App

import { Routes, Route, Navigate } from 'react-router-dom'

import { useEffect } from 'react'
import { genMenus } from './menus.jsx'
import Layout from './views/layout/layout.jsx'

function App() {
  let routes = genMenus()
  useEffect(() => {
    const common = new window.TDCommon(['#header'], {
      searchConfig: {
        show: true
      },
      menuCollapse: {
        useCollapse: true, // 启用1024以下隐藏菜单
        menuId: '#layoutSider'
      }
    })
    common.renderHeader()
  }, [])

  return (
    <Routes>
      {routes.map((route, i: number) => (
        <Route
          key={i}
          path={route.id || route.key}
          exact={route.exact}
          element={<Layout></Layout>}
          render={() => route.redirect && <Navigate to={route.redirect} replace />}>
          {route.children &&
            route.children.map((routeChild, i2) => (
              <Route
                key={i2}
                path={routeChild.id || routeChild.key}
                exact={routeChild.exact}
                element={<Layout></Layout>}></Route>
            ))}
        </Route>
      ))}
    </Routes>
  )
}
export default App
