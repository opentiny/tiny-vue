const data = []
const textColor = ''
const right = 0
const top = 0
const bottom = 0
const left = 0
const nodeGap = 0
const nodeWidth = 0
const orient = ''
const BaseOption = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  animation: true,
  series: [
    {
      nodeAlign: 'left',
      orient,
      // 控制图表的位置
      right,
      top,
      bottom,
      left,
      // 控制每列矩形的距离
      nodeGap,
      // 控制矩形的宽度
      nodeWidth,
      type: 'sankey',
      data: data.nodes,
      links: data.links,
      emphasis: {
        focus: 'adjacency'
      },
      layout: 'none',
      focusNodeAdjaceny: true,
      // 将节点按照data中的顺序排列，将值改为0
      layoutIterations: 32,
      // 设置第一层的文本在左侧
      levels: [
        {
          depth: 0,
          label: {
            position: 'left'
          }
        }
      ],
      lineStyle: {
        // 线条颜色过渡
        color: 'gradient',
        // 线条透明度
        opacity: 0.6,
        // 线条弯曲度
        curveness: 0.5
      },
      label: {
        color: textColor,
        fontSize: 12,
        // 文字距离节点矩形块的距离
        distance: 5,
        position: 'right',
        // 展示文本内容及百分比
        formatter: (params) => {
          if (params.name !== 'empty' && params.name !== 'virtical') {
            return `${params.name}\n${params.data.valueBfb}`
          } else {
            // 若为empty或者virtical，则不展示此虚拟节点
            return ''
          }
        }
      }
    }
  ]
}
export default BaseOption
