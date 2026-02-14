<template>
  <div class="tiny-demo" ref="container">
    <tiny-flowchart
      ref="chart"
      :data="chartDataRaw"
      :config="chartConfigRaw"
      @click-node="onClickNode"
      @click-link="onClickLink"
      @click-blank="onClickBlank"
    >
    </tiny-flowchart>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { TinyModal, TinyFlowchart } from '@opentiny/vue'
import { hooks } from '@opentiny/vue-common'

const { createNode, createLink, createConfig } = TinyFlowchart

// template refs
const chart = ref(null)
const container = ref(null)
const nodeWrapperSize = 32

let ro = null

onMounted(() => {
  const parent = (container.value && container.value.parentNode) || container.value
  if (!parent) return

  const applySize = () => {
    const w = parent.offsetWidth || 0
    // ensure chart cols accommodate max col in data
    const maxCol = Math.max(...chartData.nodes.map((n) => Number(n.info.col) || 0))
    chartConfig.cols = Math.max(chartConfig.cols || 0, Math.ceil(maxCol) + 1)
    chartConfig.width = w

    // call refresh on component instance if available
    if (chart.value && typeof chart.value.refresh === 'function') {
      chart.value.refresh({ graphWidth: w, adjustX: -nodeWrapperSize / 2 })
    }
  }

  // initial
  applySize()

  ro = new ResizeObserver(() => {
    applySize()
  })

  ro.observe(parent)
})

onBeforeUnmount(() => {
  if (ro) {
    ro.disconnect()
    ro = null
  }
})

const chartData = {
  nodes: [
    createNode('1', 1, '设计立项', '', [], 1, 1),
    createNode('2', 4, '设计任务书', '', [], 1, 2),
    createNode('3', 4, '设计策划', '', [], 1, 3),
    createNode('4', 4, '设计交底', '', [], 1, 4),
    createNode('5', 0, '定制评审要素', '', [], 1, 5),
    createNode('6', 0, '概念成果上传', '', [], 1, 6),
    createNode('7', 0, '概念成果确认', '', [], 1, 7),
    createNode('8', 0, '方案成果上传', '', [], 1, 8),
    createNode('9', 0, '会签要点', '', [], 0, 8.5),
    createNode('10', 0, '方案成果确认', '', [], 1, 9),
    createNode('11', 0, '设计成果上传', '', [], 1, 10),
    createNode('12', 0, '会签要点', '', [], 0, 10.5),
    createNode('13', 0, '设计成果确认', '', [], 1, 11),
    createNode('14', 1, '施工图成果上传', '', [], 1, 12),
    createNode('15', 1, '会签要点', '', [], 0, 12.5),
    createNode('16', 1, '施工图成果确认', '', [], 1, 13),
    createNode('17', 0, '业务策略', '', [], 1, 14),
    createNode('18', 0, '招标图纸提供', '', [], 1, 15),
    createNode('19', 0, '施工图纸下发', '', [], 1, 16),
    createNode('20', 0, '深化图纸下发', '', [], 0, 16.5),
    createNode('21', 0, '专业线巡检', '', [], 1, 17),
    createNode('22', 0, '复盘总结', '', [], 1, 18),
    createNode('23', 0, '竣工图归档', '', [], 1, 19)
  ],
  links: [
    createLink('1', '2', '', 1),
    createLink('2', '3', '', 1),
    createLink('3', '4', '', 1),
    createLink('4', '5', '', 1),
    createLink('5', '6', '', 1),
    createLink('6', '7', '', 1),
    createLink('7', '8', '', 1),
    createLink('8', '9', '0 t1 c r0.5', 1, 'dash'),
    createLink('8', '10', '', 1),
    createLink('9', '10', '0.5 r0.5 c b1', 1, 'dash'),
    createLink('10', '11', '', 1),
    createLink('11', '12', '0 t1 c r0.5', 1, 'dash'),
    createLink('11', '13', '', 1),
    createLink('12', '13', '0.5 r0.5 c b1', 1, 'dash'),
    createLink('13', '14', '', 1),
    createLink('14', '15', '0 t1 c r0.5', 1, 'dash'),
    createLink('14', '16', '', 1),
    createLink('15', '16', '0.5 r0.5 c b1', 1, 'dash'),
    createLink('16', '17', '', 1),
    createLink('17', '18', '', 1),
    createLink('18', '19', '', 1),
    createLink('19', '20', '0 t1 c r0.5', 1, 'dash'),
    createLink('19', '21', '', 1),
    createLink('20', '21', '0.5 r0.5 c b1', 1, 'dash'),
    createLink('21', '22', '', 1),
    createLink('22', '23', '', 1)
  ]
}

const chartConfig = createConfig()

// content 插槽需更大展示空间，默认 listWidth 62px 过小会导致文字挤压重叠
chartConfig.listWidth = 120
// label 显示优化：更宽的 label 避免换行重叠，
chartConfig.labelWidth = 140
chartConfig.anchor = 'center'
chartConfig.labelHeight = 80

const chartDataRaw = hooks.markRaw(chartData)
const chartConfigRaw = hooks.markRaw(chartConfig)

function onClickNode(_afterNode, _e) {
  TinyModal.message('click-node')
}

function onClickLink(_afterLink, _e) {
  TinyModal.message('click-link')
}

function onClickBlank(_param, _e) {
  TinyModal.message('click-blank')
}
</script>

<style scoped>
:deep(.tiny-flow-chart__node-icon-wrapper .tiny-flow-chart__node-icon.complete) {
  background: #5cb300 !important;
}
:deep(.tiny-flow-chart__node-icon-wrapper .tiny-flow-chart__node-icon.complete svg) {
  fill: #fff !important;
}

:deep(.tiny-flow-chart__node-icon-wrapper .tiny-flow-chart__node-icon.fail) {
  background: #fd7d75 !important;
  border-color: #fd7d75 !important;
}
:deep(.tiny-flow-chart__node-icon-wrapper .tiny-flow-chart__node-icon.fail svg) {
  fill: #fd7d75 !important;
}
:deep(.tiny-flow-chart__node-label) {
  /* allow label container to expand vertically so long labels won't be clipped */
  height: auto !important;
  max-width: 60px !important; /* matches chartConfig.labelWidth */
  min-height: 80px !important; /* matches chartConfig.labelHeight */
}

:deep(.label-item.label-title) {
  display: block;
  white-space: normal !important;
  word-break: break-word !important;
  overflow-wrap: break-word !important;
  text-overflow: clip !important;
}
:deep(.tiny-flow-chart .tiny-flow-chart__node-icon-wrapper .tiny-flow-chart__node-label) {
  left: 50% !important;
  transform: translateX(-50%) !important;
}
</style>
