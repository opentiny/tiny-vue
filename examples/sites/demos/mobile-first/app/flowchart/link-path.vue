<template>
  <tiny-async-flowchart
    ref="chart"
    :fetch="fetchFunc"
    @click-node="onClickNode"
    @click-link="onClickLink"
    @click-blank="onClickBlank"
  >
  </tiny-async-flowchart>
</template>

<script>
import { Flowchart, AsyncFlowchart, Modal } from '@opentiny/vue'

const { createConfig, Node } = Flowchart
const nodeWrapperSize = 32

const chartData = {
  nodes: [
    { name: '0', info: { col: 0, row: 1, status: 1, other: { title: '开始' } } },
    { name: '1', info: { col: 1, row: 0, status: 1, other: { title: '申请人' } } },
    { name: '2', info: { col: 1, row: 1, status: 1, other: { title: '制单会计' } } },
    { name: '3', info: { col: 1, row: 2, status: 1, other: { title: '应付会计' } } }
  ],
  links: [
    { from: '0', to: '1', info: { status: 1, style: 'solid', other: { title: '条件1' } } },
    { from: '0', to: '2', info: { status: 1, style: 'solid', other: { title: '条件2' } } },
    { from: '0', to: '3', info: { status: 1, style: 'solid', other: { title: '条件3' } } }
  ]
}

/**
 * 因为三条自定义连线的逻辑类似：都是从起点矩形的右侧中点，连线至终点矩形的左侧中点。
 * 就抽取了帮助函数，规范地拿到起点、中点和终点
 *
 * @param from 起点矩形
 * @param to 终点矩形
 * @param api 工具集
 */
const linkPathHelper = ({ from, to, api }) => {
  const f = api.getRight(from) // 获取起点矩形的右侧中点
  const t = api.getLeft(to) // 获取终点矩形的左侧中点
  const m = { x: (f.x + t.x) / 2, y: (f.y + t.y) / 2 } // 中点

  return { f, m, t }
}

const chartConfig = createConfig()

Object.assign(chartConfig, {
  extraWidth: 100, // 图形预留宽度，用于图形最小宽度计算，适当修改保证图形宽度不被过分挤压
  height: 240,
  radius: 12, // 连线在拐点处的圆角半径
  gap: 60,
  padding: 12,
  status: { 1: 'completed', 2: 'ongoing', 3: 'not-started', 4: 'fail' },
  colors: { 1: '#00a874', 2: '#0067d1', 3: '#999', 4: '#eb171f' },
  renderOuter: (h, node) => {
    return h(Node, { props: { node, config: chartConfig } })
  },
  type: 'dot',
  nodeWrapperSize,
  autoAdjust: false, // 图形内部不优化col/row配置
  lineWidth: 1, // 连线宽度
  arrowEdge: 3, // 箭头大小（等边三角形的边长）
  linkPath: [
    {
      filter: { from: '0', to: '1' },
      method: ({ from, to, api }) => {
        const { f, m, t } = linkPathHelper({ from, to, api })

        // 起点的y坐标向上偏移0像素
        f.y -= 0
        // 获取两个拐点，也可以设置更多拐点，只要满足连线是竖线和横线的交替组合即可
        const c0 = { x: m.x, y: f.y }
        const c1 = { x: m.x, y: t.y }
        // 获取连线标题位置，也可以设置为任意位置
        const mid = { x: (c1.x + t.x) / 2, y: (c1.y + t.y) / 2 }
        // 连线的线性渐变，设置插值点和具体颜色，插值点范围0~1
        const linear = { stops: [0, 1], colors: ['#0067d1', '#0067d1'] }

        // 返回连线路径、中点和线性渐变（中点和渐变是可选的）
        return { path: [f, c0, c1, t], mid, linear }
      }
    },
    {
      filter: { from: '0', to: '2' },
      method: ({ from, to, api }) => {
        const { f, m, t } = linkPathHelper({ from, to, api })

        // 获取连线标题位置，设置为中点向右偏移30像素
        const mid = { x: m.x + 30, y: m.y }
        // 连线的线性渐变，3个stop、3个颜色值。和第3条线重合时gold到burlywood的颜色值会被覆盖而不显示
        const linear = { stops: [0.1, 0.3, 0.9], colors: ['gold', 'burlywood', 'blue'] }

        // 返回连线信息
        return { path: [f, t], mid, linear }
      }
    },
    {
      filter: { from: '0', to: '3' },
      method: ({ from, to, api }) => {
        const { f, m, t } = linkPathHelper({ from, to, api })

        // 起点的y坐标向下偏移0像素
        f.y += 0
        // 获取两个拐点
        const c0 = { x: m.x, y: f.y }
        const c1 = { x: m.x, y: t.y }
        // 获取连线标题位置
        const mid = { x: (c1.x + t.x) / 2, y: (c1.y + t.y) / 2 }
        // 连线的线性渐变
        const linear = { stops: [0, 1], colors: ['#0067d1', '#0067d1'] }

        // 返回连线信息
        return { path: [f, c0, c1, t], mid, linear }
      }
    }
  ]
})

export default {
  components: {
    TinyAsyncFlowchart: AsyncFlowchart
  },
  methods: {
    onClickNode(afterNode, e) {
      // console.log(afterNode, e)
      Modal.message('click-node')
    },
    onClickLink(afterLink, e) {
      // console.log(afterLink, e)
      Modal.message('click-link')
    },
    onClickBlank(param, e) {
      // console.log(param, e)
      Modal.message('click-blank')
    },
    fetchFunc() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: chartData, config: chartConfig })
        }, 300)
      })
    }
  }
}
</script>
