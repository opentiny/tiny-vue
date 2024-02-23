import cloneDeep from '../../util/cloneDeep'
import BaseOption from './BaseOption'
import {
  isMove,
  setTooltip,
  padSize,
  sumBfb,
  setWidthSpace,
  setDirection,
  setAlign,
  setLabel,
  handleItemStyle,
  handleLineStyle
} from './handleOption'
import { setColor, setTextColor } from './handleColor'
import { handleEmptyData } from './handleData'
import init from '../../option/init'

class SankeyChart {
  constructor(iChartOption) {
    this.baseOption = {}
    this.iChartOption = {}
    this.baseOption = cloneDeep(BaseOption)
    // 记录下用户传入的初始的padding值
    this.userPadding = iChartOption.padding || iChartOption.chartPadding
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption)
    // 根据 iChartOption 组装 baseOption
    this.updateOption()
  }

  updateOption() {
    const iChartOption = this.iChartOption
    const padding = iChartOption.padding || iChartOption.chartPadding
    // 配置数据
    const { nodes, links } = iChartOption.data
    this.baseOption.series[0].data = nodes
    this.baseOption.series[0].links = links
    // 是否设置移动
    isMove(iChartOption.draggable, this.baseOption)
    // 配置颜色组
    setColor(iChartOption.color, this.baseOption)
    setTextColor(this.baseOption)
    // 配置提示悬浮框样式
    this.baseOption.tooltip = setTooltip(iChartOption, iChartOption.tipHtml)
    // 配置桑基图label属性
    setLabel(iChartOption, this.baseOption)
    // 处理数据，获取节点所占的百分之比值
    sumBfb(links, nodes)
    // 配置桑基图的方向
    setDirection(iChartOption.orient, this.baseOption)
    // 配置chartPadding
    padSize(padding, this.baseOption, this.userPadding)
    // 配置节点矩形的宽度及每列间距
    setWidthSpace(iChartOption.widthSpace, this.baseOption)
    // 处理数据：如果存在value为0或未定义的情况
    handleEmptyData(nodes, links)
    // 配置桑基图的布局对齐方式
    setAlign(iChartOption.nodeAlign, this.baseOption)
    // 配置桑基图itemStyle属性
    handleItemStyle(iChartOption, this.baseOption)
    // 配置桑基图lineStyle属性
    handleLineStyle(iChartOption, this.baseOption)
  }

  // 根据渲染出的结果，二次计算option
  // secondaryUpdateOption(YAxiMax, YAxiMin) {
  // }

  getOption() {
    return this.baseOption
  }

  setOption() {}
}

export default SankeyChart
