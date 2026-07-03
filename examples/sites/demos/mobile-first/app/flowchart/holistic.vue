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
      height: 0,
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
      linkPath: [
        {
          filter: { from: '0', to: '1' },
          method({ afterLink, afterNodes }) {
            const afterNodeCouple = [afterLink.raw.from, afterLink.raw.to].map(function (name) {
              return afterNodes.find(function (afterNode) {
                return afterNode.raw.name === name
              })
            })
            const f = {
              x: afterNodeCouple[0].x + afterNodeCouple[0].width,
              y: afterNodeCouple[0].y + afterNodeCouple[0].height / 2
            }
            const t = { x: afterNodeCouple[1].x, y: afterNodeCouple[1].y + afterNodeCouple[1].height / 2 }
            return {
              path: [f, t],
              mid: { x: (f.x + t.x) / 2, y: (f.y + t.y) / 2 },
              linear: { stops: [0, 1], colors: ['#4facfe', '#00f2fe'] }
            }
          }
        },
        {
          filter: { from: '1', to: '2' },
          method({ afterLink, afterNodes }) {
            const afterNodeCouple = [afterLink.raw.from, afterLink.raw.to].map(function (name) {
              return afterNodes.find(function (afterNode) {
                return afterNode.raw.name === name
              })
            })
            const f = {
              x: afterNodeCouple[0].x + afterNodeCouple[0].width,
              y: afterNodeCouple[0].y + afterNodeCouple[0].height / 2
            }
            const t = { x: afterNodeCouple[1].x, y: afterNodeCouple[1].y + afterNodeCouple[1].height / 2 }
            return {
              path: [f, t],
              mid: { x: (f.x + t.x) / 2, y: (f.y + t.y) / 2 },
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
          info: { row: 0, col: 0, width: 130, height: 56, shape: 'rectangle', status: 1, other: { main: '', auxi: '' } }
        },
        {
          name: '1',
          info: { row: 0, col: 1, width: 130, height: 56, shape: 'rectangle', status: 1, other: { main: '', auxi: '' } }
        },
        {
          name: '2',
          info: { row: 0, col: 2, width: 130, height: 56, shape: 'rectangle', status: 1, other: { main: '', auxi: '' } }
        }
      ],
      links: [
        {
          from: '0',
          to: '1',
          fromJoint: 'right',
          toJoint: 'left',
          showArrow: false,
          info: { status: 3, style: 'solid', other: { title: '条件1' } }
        },
        {
          from: '1',
          to: '2',
          fromJoint: 'right',
          toJoint: 'left',
          showArrow: false,
          info: { status: 3, style: 'solid', other: { title: '条件2' } }
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
