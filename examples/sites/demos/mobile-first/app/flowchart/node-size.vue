<template>
  <div>
    <div class="mb-4">
      <tiny-button-group :data="sizeList" v-model="activeSize"></tiny-button-group>
    </div>
    <tiny-async-flowchart
      ref="chart"
      :fetch="fetchFunc"
      @click-node="onClickNode"
      @click-link="onClickLink"
      @click-blank="onClickBlank"
    />
  </div>
</template>

<script>
import { TinyFlowchart, TinyAsyncFlowchart, TinyButtonGroup, TinyModal } from '@opentiny/vue'
import { hooks } from '@opentiny/vue-common'

const { createConfig, Node } = TinyFlowchart
const nodeWrapperSize = 32

export default {
  components: { TinyAsyncFlowchart, TinyButtonGroup },
  data() {
    const self = this

    const chartConfig = createConfig()
    Object.assign(chartConfig, {
      width: 0,
      extraWidth: 100,
      height: 90,
      gap: 60,
      padding: 12,
      prior: 'vertical',
      align: 'left',
      status: { 1: 'completed', 2: 'ongoing', 3: 'not-started', 4: 'fail' },
      colors: { 1: '#00a874', 2: '#0067d1', 3: '#999', 4: '#eb171f' },
      ongoingBackgroundColor: '#f3f8fe',
      popoverPlacement: 'bottom',
      renderOuter(h, node) {
        return h(Node, { props: { node, config: chartConfig } })
      },
      type: 'dot',
      nodeWrapperSize,
      showArrow: false,
      nodeSize: 'medium'
    })

    const chartData = {
      nodes: [
        {
          name: '0',
          info: { col: 0, row: 0, status: 1, other: { title: '开始', subtitle: '张三', auxi: '2023-01-01' } },
          hidden: false
        },
        {
          name: '1',
          info: { col: 1, row: 0, status: 1, other: { title: '申请人', subtitle: '张三', auxi: '2023-01-02' } }
        },
        {
          name: '2',
          info: {
            col: 2,
            row: 0,
            status: 1,
            other: { title: '制单会计', subtitle: '协同：张三、张四', auxi: '2023-01-03' }
          }
        },
        {
          name: '3',
          info: { col: 3, row: 0, status: 2, other: { title: '应付会计', subtitle: '张四 0035837', auxi: '' } }
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
        { from: '0', to: '1', fromJoint: 'right', toJoint: 'left', info: { status: 2, style: 'solid' } },
        { from: '1', to: '2', fromJoint: 'right', toJoint: 'left', info: { status: 2, style: 'solid' } },
        { from: '2', to: '3', fromJoint: 'right', toJoint: 'left', info: { status: 3, style: 'solid' } },
        { from: '3', to: '4', fromJoint: 'right', toJoint: 'left', info: { status: 3, style: 'solid' } }
      ]
    }

    return {
      activeSize: 'medium',
      sizeList: [
        { text: 'mini', value: 'mini' },
        { text: 'small', value: 'small' },
        { text: 'medium', value: 'medium' }
      ],
      chartData: hooks.markRaw(chartData),
      chartConfig: hooks.markRaw(chartConfig)
    }
  },
  watch: {
    activeSize(newVal) {
      this.chartConfig.nodeSize = newVal
      this.$refs.chart && this.$refs.chart.refresh()
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
    },
    fetchFunc() {
      const self = this
      return new Promise(function (resolve) {
        setTimeout(function () {
          self.chartConfig.nodeSize = self.activeSize
          resolve({ data: self.chartData, config: self.chartConfig })
        }, 300)
      })
    }
  }
}
</script>
