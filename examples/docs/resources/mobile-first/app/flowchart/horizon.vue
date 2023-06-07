<template>
  <tiny-flowchart ref="chart" :data="chartData" :config="chartConfig" @click-node="onClickNode" @click-link="onClickLink" @click-blank="onClickBlank">
  </tiny-flowchart>
</template>

<script>
import Flowchart from '@opentiny/vue-flowchart'
import { hooks } from '@opentiny/vue-common'
import { Modal } from '@opentiny/vue'

const { createConfig } = Flowchart

const chartData = {
  nodes: [
    {
      name: '0',
      info: { col: 0, row: 0, width: 40, shape: 'circle', status: 2, other: { main: '开始' } }
    },
    {
      name: '1',
      info: {
        col: 1,
        row: 0,
        width: 130,
        height: 56,
        shape: 'rectangle',
        status: 3,
        other: { main: '申请人', auxi: '张三' }
      }
    },
    {
      name: '2',
      info: {
        col: 2,
        row: 0,
        width: 130,
        height: 56,
        shape: 'rectangle',
        status: 3,
        other: { main: '制单会计', auxi: '协同：张三、张四、张五、张六、张七' }
      }
    },
    {
      name: '3',
      info: {
        col: 3,
        row: 0,
        width: 130,
        height: 56,
        shape: 'rectangle',
        status: 3,
        other: { main: '应付会计', auxi: '张四 0035837' }
      }
    },
    {
      name: '4',
      info: { col: 4, row: 0, width: 40, shape: 'circle', status: 3, other: { main: '结束' } }
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
  height: 0,
  gap: 24,
  padding: 12,
  prior: 'vertical',
  align: 'center',
  status: { 1: 'completed', 2: 'ongoing', 3: 'not-started', 4: 'ongoing-fail' },
  colors: { 1: '#00a874', 2: '#0067d1', 3: '#999', 4: '#eb171f' },
  ongoingBackgroundColor: '#f3f8fe',
  popoverPlacement: 'bottom'
})

export default {
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
