<template>
  <tiny-flowchart
    ref="chart"
    :data="chartData"
    :config="chartConfig"
    @click-node="onClickNode"
    @click-link="onClickLink"
    @click-blank="onClickBlank"
  >
  </tiny-flowchart>
</template>

<script>
import Flowchart from '@opentiny/vue-flowchart'
import { hooks } from '@opentiny/vue-common'
import { Modal } from '@opentiny/vue'

const { createConfig, resizeMixin } = Flowchart
const nodeWrapperSize = 130

const chartData = {
  nodes: [
    {
      name: '0',
      info: {
        row: 0,
        col: 1,
        width: 130,
        height: 56,
        shape: 'rectangle',
        status: 1,
        other: { main: '', auxi: '' }
      }
    },
    {
      name: '1',
      info: {
        row: 0,
        col: 2,
        width: 130,
        height: 56,
        shape: 'rectangle',
        status: 1,
        other: { main: '', auxi: '' }
      }
    },
    {
      name: '2',
      info: {
        row: 1,
        col: 0,
        width: 130,
        height: 56,
        shape: 'rectangle',
        status: 1,
        other: { main: '', auxi: '' }
      }
    },
    {
      name: '3',
      info: {
        row: 1,
        col: 3,
        width: 130,
        height: 56,
        shape: 'rectangle',
        status: 1,
        other: { main: '', auxi: '' }
      }
    },
    {
      name: '4',
      info: {
        row: 1,
        col: 4,
        width: 130,
        height: 56,
        shape: 'rectangle',
        status: 1,
        other: { main: '', auxi: '' }
      }
    },
    {
      name: '5',
      info: {
        row: 2,
        col: 1.5,
        width: 130,
        height: 56,
        shape: 'rectangle',
        status: 1,
        other: { main: '', auxi: '' }
      }
    }
  ],
  links: [
    {
      from: '2',
      to: '0',
      fromJoint: 'right',
      toJoint: 'left',
      showArrow: false,
      info: { status: 3, style: 'solid', other: { title: '条件1' } }
    },
    {
      from: '0',
      to: '1',
      fromJoint: 'right',
      toJoint: 'left',
      showArrow: false,
      info: { status: 3, style: 'solid', other: { title: '条件2' } }
    },
    {
      from: '1',
      to: '3',
      fromJoint: 'right',
      toJoint: 'left',
      showArrow: false,
      info: { status: 3, style: 'solid', other: { title: '条件3' } }
    },
    {
      from: '3',
      to: '4',
      fromJoint: 'right',
      toJoint: 'left',
      showArrow: false,
      info: { status: 3, style: 'solid', other: { title: '条件4' } }
    },
    {
      from: '2',
      to: '5',
      fromJoint: 'right',
      toJoint: 'left',
      showArrow: false,
      info: { status: 3, style: 'solid', other: { title: '条件5' } }
    },
    {
      from: '5',
      to: '3',
      fromJoint: 'right',
      toJoint: 'left',
      showArrow: false,
      info: { status: 3, style: 'solid', other: { title: '条件6' } }
    }
  ]
}

const chartConfig = createConfig()

Object.assign(chartConfig, {
  width: 0,
  height: 240,
  gap: 24,
  padding: 12,
  prior: 'vertical',
  align: 'center',
  status: { 1: 'completed', 2: 'ongoing', 3: 'not-started', 4: 'fail' },
  colors: { 1: '#00a874', 2: '#0067d1', 3: '#999', 4: '#eb171f' },
  ongoingBackgroundColor: '#f3f8fe',
  popoverPlacement: 'bottom',
  nodeWrapperSize,
  type: 'dot',
  lineWidth: 20,
  hoverHit: 10,
  autoAdjust: false,
  layout: ({ afterNodes, graphHeight, graphWidth }) => {
    const colSize = graphWidth / 5
    const rowSize = graphHeight / 3

    return afterNodes.map((afterNode) => ({
      x: ~~((afterNode.col + 0.5) * colSize) - 70,
      y: ~~((afterNode.row + 0.5) * rowSize) - 28
    }))
  },
  linkPath: [
    {
      filter: { from: '2', to: '0' },
      method: ({ afterLink, afterNodes }) => {
        const afterNodeCouple = [afterLink.raw.from, afterLink.raw.to].map((name) =>
          afterNodes.find((afterNode) => afterNode.raw.name === name)
        )
        const { x: x0, y: y0, width: w0, height: h0 } = afterNodeCouple[0]
        const { x: x1, y: y1, width: w1, height: h1 } = afterNodeCouple[1]
        // 起点
        const f = { x: x0 + w0, y: y0 + h0 / 2 - 10 }
        // 终点
        const t = { x: x1, y: y1 + h1 / 2 }
        const c0 = { x: f.x + 30, y: f.y }
        const c1 = { x: c0.x, y: t.y }

        return {
          path: [f, c0, c1, t],
          mid: { x: (c1.x + t.x) / 2, y: (c1.y + t.y) / 2 },
          linear: { stops: [0, 1], colors: ['#4facfe', '#00f2fe'] }
        }
      }
    },
    {
      filter: { from: '2', to: '5' },
      method: ({ afterLink, afterNodes }) => {
        const afterNodeCouple = [afterLink.raw.from, afterLink.raw.to].map((name) =>
          afterNodes.find((afterNode) => afterNode.raw.name === name)
        )
        const { x: x0, y: y0, width: w0, height: h0 } = afterNodeCouple[0]
        const { x: x1, y: y1, width: w1, height: h1 } = afterNodeCouple[1]
        // 起点
        const f = { x: x0 + w0, y: y0 + h0 / 2 + 10 }
        // 终点
        const t = { x: x1, y: y1 + h1 / 2 }
        const c0 = { x: f.x + 30, y: f.y }
        const c1 = { x: c0.x, y: t.y }

        return {
          path: [f, c0, c1, t],
          mid: { x: (c1.x + t.x) / 2, y: (c1.y + t.y) / 2 },
          linear: { stops: [0, 1], colors: ['#4facfe', '#00f2fe'] }
        }
      }
    },
    {
      filter: { from: '0', to: '1' },
      method: ({ afterLink, afterNodes }) => {
        const afterNodeCouple = [afterLink.raw.from, afterLink.raw.to].map((name) =>
          afterNodes.find((afterNode) => afterNode.raw.name === name)
        )
        const { x: x0, y: y0, width: w0, height: h0 } = afterNodeCouple[0]
        const { x: x1, y: y1, width: w1, height: h1 } = afterNodeCouple[1]
        // 起点
        const f = { x: x0 + w0, y: y0 + h0 / 2 }
        // 终点
        const t = { x: x1, y: y1 + h1 / 2 }

        return {
          path: [f, t],
          mid: { x: (f.x + t.x) / 2, y: (f.y + t.y) / 2 },
          linear: { stops: [0, 1], colors: ['#4facfe', '#00f2fe'] }
        }
      }
    },
    {
      filter: { from: '1', to: '3' },
      method: ({ afterLink, afterNodes }) => {
        const afterNodeCouple = [afterLink.raw.from, afterLink.raw.to].map((name) =>
          afterNodes.find((afterNode) => afterNode.raw.name === name)
        )
        const { x: x0, y: y0, width: w0, height: h0 } = afterNodeCouple[0]
        const { x: x1, y: y1, width: w1, height: h1 } = afterNodeCouple[1]
        // 起点
        const f = { x: x0 + w0, y: y0 + h0 / 2 }
        // 终点
        const t = { x: x1, y: y1 + h1 / 2 - 10 }
        const c1 = { x: t.x - 30, y: t.y }
        const c0 = { x: c1.x, y: f.y }

        return {
          path: [f, c0, c1, t],
          mid: { x: (c1.x + t.x) / 2, y: (c1.y + t.y) / 2 },
          linear: { stops: [0, 1], colors: ['#4facfe', '#00f2fe'] }
        }
      }
    },
    {
      filter: { from: '5', to: '3' },
      method: ({ afterLink, afterNodes }) => {
        const afterNodeCouple = [afterLink.raw.from, afterLink.raw.to].map((name) =>
          afterNodes.find((afterNode) => afterNode.raw.name === name)
        )
        const { x: x0, y: y0, width: w0, height: h0 } = afterNodeCouple[0]
        const { x: x1, y: y1, width: w1, height: h1 } = afterNodeCouple[1]
        // 起点
        const f = { x: x0 + w0, y: y0 + h0 / 2 }
        // 终点
        const t = { x: x1, y: y1 + h1 / 2 + 10 }
        const c1 = { x: t.x - 30, y: t.y }
        const c0 = { x: c1.x, y: f.y }

        return {
          path: [f, c0, c1, t],
          mid: { x: (c1.x + t.x) / 2, y: (c1.y + t.y) / 2 },
          linear: { stops: [0, 1], colors: ['#4facfe', '#00f2fe'] }
        }
      }
    },
    {
      filter: { from: '3', to: '4' },
      method: ({ afterLink, afterNodes }) => {
        const afterNodeCouple = [afterLink.raw.from, afterLink.raw.to].map((name) =>
          afterNodes.find((afterNode) => afterNode.raw.name === name)
        )
        const { x: x0, y: y0, width: w0, height: h0 } = afterNodeCouple[0]
        const { x: x1, y: y1, width: w1, height: h1 } = afterNodeCouple[1]
        // 起点
        const f = { x: x0 + w0, y: y0 + h0 / 2 }
        // 终点
        const t = { x: x1, y: y1 + h1 / 2 }

        return {
          path: [f, t],
          mid: { x: (f.x + t.x) / 2, y: (f.y + t.y) / 2 },
          linear: { stops: [0, 1], colors: ['#4facfe', '#00f2fe'] }
        }
      }
    }
  ],
  renderOuter: (h, node) => {
    return h(
      'div',
      {
        style: { width: '100%', height: '100%', background: 'white', border: '1px solid #4facfe', borderRadius: '4px' }
      },
      `自定义区域-${node.name}`
    )
  },
  renderCond: (h, afterLink, cfg) => {
    const { raw: link } = afterLink
    // link.info.other.title
    return h('div', `${link.from}-${link.to}`)
  }
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
    }
  }
}
</script>

<style>
[data-tag='tiny-flow-chart__node'] {
  background-color: white;
}
[data-tag='tiny-flow-chart__node'] > div {
  width: 100%;
  height: 100%;
}
</style>
