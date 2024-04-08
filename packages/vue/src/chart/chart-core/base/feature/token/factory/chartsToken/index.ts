import BarChart from './BarChart'
import BubbleChart from './BubbleChart'
import FunnelChart from './FunnelChart'
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
import AssembleBubbleChart from './AssembleBubbleChart'
import BoxplotChart from './BoxplotChart'
import CandlestickChart from './CandlestickChart'
import CircleProcessChart from './CircleProcessChart'
import GaugeChart from './GaugeChart'
import HeatMapChart from './HeatMapChart'
import ScatterChart from './ScatterChart'
import LiquidfillChart from './LiquidfillChart'
import RegionChart from './RegionChart'
import WaveChart from './WaveChart'
import WordCloudChart from './WordCloudChart'

// 本文件getChartsToken的图表键名的增删请同步更改constants中的TOKENCHARTNAMES
/**
 * 根据aliasToken获取chartsToken
 * @param {object} aliasToken
 */
function getChartsToken(aliasToken) {
  return {
    AssembleBubbleChart: AssembleBubbleChart(aliasToken),
    BarChart: BarChart(aliasToken),
    BoxplotChart: BoxplotChart(aliasToken),
    BubbleChart: BubbleChart(aliasToken),
    CandlestickChart: CandlestickChart(aliasToken),
    CircleProcessChart: CircleProcessChart(aliasToken),
    FunnelChart: FunnelChart(aliasToken),
    GaugeChart: GaugeChart(aliasToken),
    HeatMapChart: HeatMapChart(aliasToken),
    ScatterChart: ScatterChart(aliasToken),
    HillChart: HillChart(aliasToken),
    JadeJueChart: JadeJueChart(aliasToken),
    LineChart: LineChart(aliasToken),
    AreaChart: AreaChart(aliasToken),
    LiquidfillChart: LiquidfillChart(aliasToken),
    PieChart: PieChart(aliasToken),
    PolarBarChart: PolarBarChart(aliasToken),
    ProcessChart: ProcessChart(aliasToken),
    RadarChart: RadarChart(aliasToken),
    RegionChart: RegionChart(aliasToken),
    SankeyChart: SankeyChart(aliasToken),
    SunburstChart: SunburstChart(aliasToken),
    TreeChart: TreeChart(aliasToken),
    WaveChart: WaveChart(aliasToken),
    WordCloudChart: WordCloudChart(aliasToken)
  }
}

export default getChartsToken
