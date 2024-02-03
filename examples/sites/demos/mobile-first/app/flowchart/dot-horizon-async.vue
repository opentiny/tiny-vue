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
import Flowchart from '@opentiny/vue-flowchart'
import AsyncFlowchart from '@opentiny/vue-async-flowchart'

const { createConfig, Node } = Flowchart
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
        col: 1,
        row: 0,
        status: 1,
        other: { title: '申请人', subtitle: '张三', auxi: '2023-01-02' }
      }
    },
    {
      name: '2',
      info: {
        col: 2,
        row: 0,
        status: 1,
        other: { title: '制单会计', subtitle: '协同：张三、张四、张五、张六、张七', auxi: '2023-01-03' }
      }
    },
    {
      name: '3',
      info: {
        col: 3,
        row: 0,
        status: 2,
        other: { title: '应付会计', subtitle: '张四 0035837', auxi: '' }
      }
    },
    {
      name: '4',
      info: {
        col: 4,
        row: 0,
        status: 4,
        other: { title: '应付会计', subtitle: '张四 0035837', auxi: '', error: '人员变更，未同步' }
      }
    }
  ],
  links: [
    { from: '0', to: '1', fromJoint: 'right', toJoint: 'left', info: { status: 3, style: 'solid' } },
    { from: '1', to: '2', fromJoint: 'right', toJoint: 'left', info: { status: 3, style: 'solid' } },
    { from: '2', to: '3', fromJoint: 'right', toJoint: 'left', info: { status: 3, style: 'solid' } },
    { from: '3', to: '4', fromJoint: 'right', toJoint: 'left', info: { status: 3, style: 'solid' } }
  ]
}

const chartConfig = createConfig()

Object.assign(chartConfig, {
  width: 0,
  extraWidth: 100, // 图形预留宽度，用于图形最小宽度计算，适当修改保证图形宽度不被过分挤压
  height: 0,
  gap: 60,
  padding: 12,
  prior: 'vertical',
  align: 'left',
  status: { 1: 'completed', 2: 'ongoing', 3: 'not-started', 4: 'fail' },
  colors: { 1: '#00a874', 2: '#0067d1', 3: '#999', 4: '#eb171f' },
  ongoingBackgroundColor: '#f3f8fe',
  popoverPlacement: 'bottom',
  renderOuter: (h, node) => {
    return h(Node, { props: { node, config: chartConfig } })
  },
  type: 'dot',
  nodeWrapperSize
})

export default {
  components: {
    TinyAsyncFlowchart: AsyncFlowchart
  },
  methods: {
    onClickNode(afterNode, e) {
      console.log(afterNode, e)
    },
    onClickLink(afterLink, e) {
      console.log(afterLink, e)
    },
    onClickBlank(param, e) {
      console.log(param, e)
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
