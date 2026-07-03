<template>
  <div>
    <tiny-flowchart
      ref="chart"
      class="text-xs"
      :data="chartData"
      :config="chartConfig"
      @click-node="onClickNode"
      @click-link="onClickLink"
      @click-blank="onClickBlank"
    />
  </div>
</template>

<script>
import { TinyFlowchart, TinyModal } from '@opentiny/vue'
import { hooks } from '@opentiny/vue-common'

const { createConfig, resizeMixin } = TinyFlowchart
const nodeWrapperSize = 130

export default {
  mixins: [resizeMixin({ refName: 'chart', nodeWrapperSize })],
  components: { TinyFlowchart },
  data() {
    const chartConfig = createConfig()
    Object.assign(chartConfig, {
      width: 0,
      extraWidth: 100,
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
      layout({ afterNodes, graphHeight, graphWidth }) {
        const colSize = graphWidth / 5
        const rowSize = graphHeight / 3
        return afterNodes.map(function (afterNode) {
          return {
            x: ~~((afterNode.col + 0.5) * colSize) - 70,
            y: ~~((afterNode.row + 0.5) * rowSize) - 28
          }
        })
      },
      linkPath: [
        {
          filter: { from: '2', to: '0' },
          method({ afterLink, afterNodes }) {
            const afterNodeCouple = [afterLink.raw.from, afterLink.raw.to].map(function (name) {
              return afterNodes.find(function (afterNode) {
                return afterNode.raw.name === name
              })
            })
            const f = {
              x: afterNodeCouple[0].x + afterNodeCouple[0].width,
              y: afterNodeCouple[0].y + afterNodeCouple[0].height / 2 - 10
            }
            const t = { x: afterNodeCouple[1].x, y: afterNodeCouple[1].y + afterNodeCouple[1].height / 2 }
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
          method({ afterLink, afterNodes }) {
            const afterNodeCouple = [afterLink.raw.from, afterLink.raw.to].map(function (name) {
              return afterNodes.find(function (afterNode) {
                return afterNode.raw.name === name
              })
            })
            const f = {
              x: afterNodeCouple[0].x + afterNodeCouple[0].width,
              y: afterNodeCouple[0].y + afterNodeCouple[0].height / 2 + 10
            }
            const t = { x: afterNodeCouple[1].x, y: afterNodeCouple[1].y + afterNodeCouple[1].height / 2 }
            const c0 = { x: f.x + 30, y: f.y }
            const c1 = { x: c0.x, y: t.y }
            return {
              path: [f, c0, c1, t],
              mid: { x: (c1.x + t.x) / 2, y: (c1.y + t.y) / 2 },
              linear: { stops: [0, 1], colors: ['#4facfe', '#00f2fe'] }
            }
          }
        }
      ],
      renderOuter(h, node) {
        return h(
          'div',
          {
            style: {
              width: '100%',
              height: '100%',
              background: 'white',
              border: '1px solid #4facfe',
              borderRadius: '4px'
            }
          },
          '自定义区域-' + node.name
        )
      }
    })

    const chartData = {
      nodes: [
        {
          name: '0',
          info: { row: 0, col: 1, width: 130, height: 56, shape: 'rectangle', status: 1, other: { main: '', auxi: '' } }
        },
        {
          name: '1',
          info: { row: 0, col: 2, width: 130, height: 56, shape: 'rectangle', status: 1, other: { main: '', auxi: '' } }
        },
        {
          name: '2',
          info: { row: 1, col: 0, width: 130, height: 56, shape: 'rectangle', status: 1, other: { main: '', auxi: '' } }
        },
        {
          name: '3',
          info: { row: 1, col: 3, width: 130, height: 56, shape: 'rectangle', status: 1, other: { main: '', auxi: '' } }
        },
        {
          name: '4',
          info: { row: 1, col: 4, width: 130, height: 56, shape: 'rectangle', status: 1, other: { main: '', auxi: '' } }
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

    return {
      chartData: hooks.markRaw(chartData),
      chartConfig: hooks.markRaw(chartConfig)
    }
  },
  methods: {
    onClickNode(afterNode, e) {
      TinyModal.message('click-node')
    },
    onClickLink(afterLink, e) {
      TinyModal.message('click-link')
    },
    onClickBlank(param, e) {
      TinyModal.message('click-blank')
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
