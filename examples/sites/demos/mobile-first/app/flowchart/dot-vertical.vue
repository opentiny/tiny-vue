<template>
  <tiny-flowchart
    ref="chart"
    :data="chartData"
    :config="chartConfig"
    @click-node="onClickNode"
    @click-link="onClickLink"
    @click-blank="onClickBlank"
    @click-group="onClickGroup"
  >
  </tiny-flowchart>
</template>

<script>
import { Flowchart, Modal } from '@opentiny/vue'
import { hooks } from '@opentiny/vue-common'

const { createConfig, Node, resizeMixin } = Flowchart
const nodeWrapperSize = 32

const chartData = {
  nodes: [
    {
      name: '0',
      info: {
        col: 0,
        row: 0,
        status: 1,
        other: { title: '开始', subtitle: '张三', auxi: '2023-01-01' }
      },
      hidden: false
    },
    {
      name: '1',
      info: {
        col: 0,
        row: 1,
        status: 1,
        other: { title: '申请人', subtitle: '张三', auxi: '2023-01-02' }
      }
    },
    {
      name: '2',
      info: {
        col: 0,
        row: 2,
        status: 1,
        other: { title: '制单会计', subtitle: '协同：张三、张四、张五、张六、张七', auxi: '2023-01-03' }
      }
    },
    {
      name: '3',
      info: {
        col: 0,
        row: 3,
        status: 2,
        other: { title: '应付会计', subtitle: '张四 0035837', auxi: '' }
      }
    },
    {
      name: '4',
      info: {
        col: 1,
        row: 3,
        status: 4,
        other: { title: '应付会计', subtitle: '张四 0035837', auxi: '', error: '人员变更，未同步' }
      }
    },
    {
      name: '5',
      info: {
        col: 0,
        row: 4,
        status: 3,
        other: { title: '复核会计', subtitle: '协同：张三、张四', auxi: '' }
      }
    },
    {
      name: '6',
      info: { col: 0, row: 5, status: 3, other: { title: '结束' } },
      hidden: false
    }
  ],
  links: [
    { from: '0', to: '1', fromJoint: 'bottom', toJoint: 'top', info: { status: 1, style: 'solid' } },
    { from: '1', to: '2', fromJoint: 'bottom', toJoint: 'top', info: { status: 1, style: 'solid' } },
    { from: '2', to: '3', fromJoint: 'bottom', toJoint: 'top', info: { status: 1, style: 'solid' } },
    {
      from: '2',
      to: '4',
      fromJoint: 'bottom',
      toJoint: 'top',
      linkOffset: 96,
      showArrow: false,
      info: { status: 1, style: 'solid', other: { title: '条件1' } }
    },
    { from: '3', to: '5', fromJoint: 'bottom', toJoint: 'top', info: { status: 3, style: 'solid' } },
    {
      from: '4',
      to: '5',
      fromJoint: 'bottom',
      toJoint: 'top',
      arrowEndMinus: 96,
      // showArrow: false,
      info: { status: 3, style: 'solid', other: { title: '条件2' } }
    },
    { from: '5', to: '6', fromJoint: 'bottom', toJoint: 'top', info: { status: 3, style: 'dashed' } }
  ],
  groups: [
    {
      nodes: ['2', '3'],
      padding: [20, 100],
      // fillStyle: '#f5f6f8',
      lineDash: [6, 6],
      strokeStyle: '#8d959e',
      title: '主账',
      titlePosition: 'top-left' /* top/top-left */,
      titleClass: 'bg-color-bg-1'
    }
  ]
}

const chartConfig = createConfig()

Object.assign(chartConfig, {
  width: 0,
  extraWidth: 200, // 图形预留宽度，用于图形最小宽度计算，适当修改保证图形宽度不被过分挤压
  height: 0,
  gap: 60,
  padding: 12,
  prior: 'vertical',
  align: 'left',
  status: { 1: 'completed', 2: 'ongoing', 3: 'not-started', 4: 'fail' },
  colors: { 1: '#0067D1', 2: '#0067d1', 3: 'rgba(22,30,38,0.2)', 4: '#eb171f' },
  ongoingBackgroundColor: '#f3f8fe',
  popoverPlacement: 'right',
  type: 'dot',
  renderOuter: (h, node) => {
    return h(Node, { props: { node, config: chartConfig, titleClass: 'bg-color-bg-1' } })
  },
  nodeLayout: 'left-right' /* up-down/left-right */,
  nodeSize: 'medium' /* mini/small/medium */,
  nodeWrapperSize,
  titleMaxWidth: 90,
  linkEndMinus: 6,
  showOnly: '' /* icon/title */,
  linkPath: [
    {
      filter: { from: '4', to: '5' },
      method: ({ afterLink, afterNodes }) => {
        const afterNodeCouple = [afterLink.raw.from, afterLink.raw.to].map((name) =>
          afterNodes.find((afterNode) => afterNode.raw.name === name)
        )
        const { x: x0, y: y0, width: w0, height: h0 } = afterNodeCouple[0]
        const { x: x1, y: y1, width: w1, height: h1 } = afterNodeCouple[1]
        // 起点
        const f = { x: x0 + w0 / 2, y: y0 + h0 }
        // 终点
        const t = { x: x1 + w1, y: y1 + h1 / 2 }
        // 拐点
        const c = { x: f.x, y: t.y }
        // // a. 返回连线路径
        // return [f, c, t]
        // b. 返回连线路径、中点、线性渐变
        return {
          path: [f, c, t],
          mid: { x: (f.x + c.x) / 2, y: (f.y + c.y) / 2 },
          linear: { stops: [0, 1], colors: ['gold', 'blue'] }
        }
      }
    },
    {
      filter: { from: '2', to: '4' },
      method: ({ afterLink, afterNodes }) => {
        const afterNodeCouple = [afterLink.raw.from, afterLink.raw.to].map((name) =>
          afterNodes.find((afterNode) => afterNode.raw.name === name)
        )
        const { x: x0, y: y0, width: w0, height: h0 } = afterNodeCouple[0]
        const { x: x1, y: y1, width: w1, height: h1 } = afterNodeCouple[1]
        // 起点
        const f = { x: x0 + w0, y: y0 + h0 / 2 }
        // 终点
        const t = { x: x1 + w1 / 2, y: y1 }
        // 拐点
        const c = { x: t.x, y: f.y }
        // a. 返回连线路径
        return [f, c, t]
        // // b. 返回连线路径、中点
        // return { path: [f, c, t], mid: c }
      }
    }
  ],
  condClass: 'bg-color-bg-1'
})

export default {
  mixins: [resizeMixin({ refName: 'chart', nodeWrapperSize })],
  components: {
    TinyFlowchart: Flowchart
  },
  data() {
    return {
      chartData: hooks.markRaw(chartData),
      chartConfig: hooks.markRaw(chartConfig)
    }
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
    onClickGroup(afterGroup, e) {
      // console.log(afterGroup, e)
      Modal.message('click-group')
    }
  }
}
</script>
