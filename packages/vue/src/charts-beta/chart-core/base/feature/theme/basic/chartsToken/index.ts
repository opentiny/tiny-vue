import BarChart from './BarChart'
import BubbleChart from './BubbleChart'
import FunnelChart from './FunnelChart'
import GraphTreeChart from './GraphTreeChart'
import HillChart from './HillChart'
import JadeJueChart from './JadeJueChart'
import TreeChart from './TreeChart'
import SunburstChart from './SunburstChart'
import SankeyChart from './SankeyChart'
import RadarChart from './RadarChart'
import ProcessChart from './ProcessChart'
import PolarBarChart from './PolarBarChart'
import PieChart from './PieChart'
import AreaChart from './AreaChart'
import LineChart from './LineChart'

function getChartsToken(basicToken, mapToken, modelToken) {
  return {
    BarChart: BarChart(modelToken),
    BubbleChart: BubbleChart(basicToken, mapToken),
    FunnelChart: FunnelChart(basicToken, mapToken),
    GraphTreeChart: GraphTreeChart(basicToken, mapToken),
    HillChart: HillChart(basicToken, mapToken),
    JadeJueChart: JadeJueChart(basicToken, mapToken),
    TreeChart: TreeChart(basicToken, mapToken),
    SunburstChart: SunburstChart(basicToken, mapToken),
    SankeyChart: SankeyChart(basicToken, mapToken),
    RadarChart: RadarChart(modelToken),
    ProcessChart: ProcessChart(basicToken, mapToken),
    PolarBarChart: PolarBarChart(basicToken, mapToken),
    PieChart: PieChart(modelToken),
    AreaChart: AreaChart(modelToken),
    LineChart: LineChart(modelToken)
  }
}

export default getChartsToken
