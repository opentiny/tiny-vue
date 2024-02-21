import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
import RadarChart from './components/RadarChart'
import FunnelChart from './components/FunnelChart'
import GaugeChart from './components/GaugeChart'
import BubbleChart from './components/BubbleChart'
import TreeChart from './components/TreeChart'
import SankeyChart from './components/SankeyChart'
import CandlestickChart from './components/CandlestickChart'
import HeatMapChart from './components/HeatMapChart'
import RegionChart from './components/RegionChart'
import LiquidfillChart from './components/LiquidfillChart'
import WordCloudChart from './components/WordCloudChart'
import BoxplotChart from './components/BoxplotChart'
import GraphChart from './components/GraphChart'
import SunburstChart from './components/SunburstChart'

function Register() {
  this.registeredComp = {}
}

function registerComp(options) {
  this.registeredComp[options.name] = options.component
}

function getRegisteredComp(name) {
  if (name in this.registeredComp) {
    return this.registeredComp[name]
  }
  return null
}

Register.prototype.registerComp = registerComp
Register.prototype.getRegisteredComp = getRegisteredComp

const register = new Register()

const components = [
  {
    name: 'AreaChart',
    component: LineChart
  },
  {
    name: 'LineChart',
    component: LineChart
  },
  {
    name: 'BarChart',
    component: BarChart
  },
  {
    name: 'PieChart',
    component: PieChart
  },
  {
    name: 'RadarChart',
    component: RadarChart
  },
  {
    name: 'FunnelChart',
    component: FunnelChart
  },
  {
    name: 'GaugeChart',
    component: GaugeChart
  },
  {
    name: 'BubbleChart',
    component: BubbleChart
  },
  {
    name: 'TreeChart',
    component: TreeChart
  },
  {
    name: 'SankeyChart',
    component: SankeyChart
  },
  {
    name: 'CandlestickChart',
    component: CandlestickChart
  },
  {
    name: 'HeatMapChart',
    component: HeatMapChart
  },
  {
    name: 'RegionChart',
    component: RegionChart
  },
  {
    name: 'LiquidfillChart',
    component: LiquidfillChart
  },
  {
    name: 'WordCloudChart',
    component: WordCloudChart
  },
  {
    name: 'BoxplotChart',
    component: BoxplotChart
  },
  {
    name: 'GraphChart',
    component: GraphChart
  },
  {
    name: 'SunburstChart',
    component: SunburstChart
  }
]

components.forEach((comp) => {
  register.registerComp(comp)
})
export default register
