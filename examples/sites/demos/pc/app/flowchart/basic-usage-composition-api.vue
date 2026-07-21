<template>
  <div class="tiny-demo">
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
import { TinyModal, TinyFlowchart } from '@opentiny/vue'
import { hooks } from '@opentiny/vue-common'

const { createNode, createLink, createConfig } = TinyFlowchart

const chartData = {
  nodes: [
    createNode('1', 1, '基础信息', '2018.08.02', [], 1, 0),
    createNode('2', 1, '调职补偿', '2018.08.02', [], 0, 2),
    createNode('3', 1, '汇总调职补偿', '', [], 1, 4),
    createNode('4', 3, '启动精算', '', [], 4, 5),
    createNode('5', 3, '复核精算', '', [], 4, 6),
    createNode('6', 3, '审核精算', '', [], 4, 7),
    createNode('7', 1, '调职补偿', '2018.08.02', [], 2, 1),
    createNode('8', 1, '复核', '2018.08.02', [], 2, 2),
    createNode('9', 2, '审批', '2018.08.02', [], 2, 3),
    createNode('10', 1, '复核', '2018.08.02', [], 4, 2),
    createNode('11', 2, '审批', '2018.08.02', [], 4, 3),
    createNode('12', 3, '运算调职兑现率', '', [], 4, 4),
    createNode('13', 1, '复核', '2018.08.02', [], 6, 2),
    createNode('14', 4, '审批审批审批审批审批 0123456789asdfghjkl', '2018.08.02', [], 6, 3)
  ],
  links: [
    createLink('1', '2', '0 r0.5 t1 c r1.5', 1),
    createLink('2', '3', '0 r1.5 c b1 r0.5', 3),
    createLink('3', '4', '0 r0.5 c b3 r0.5', 3),
    createLink('4', '5', '', 3),
    createLink('5', '6', '', 3),
    createLink('1', '7', 'r0.5 b1 c r0.5', 1),
    createLink('7', '8', '', 1),
    createLink('8', '9', '', 1),
    createLink('9', '3', '0 r0.5 c t1', 3),
    createLink('10', '11', '', 1),
    createLink('11', '12', '', 3),
    createLink('12', '4', '0 r0.5', 3),
    createLink('13', '14', '', 1),
    createLink('14', '4', '0 r1.5 c t2', 3, 'dash')
  ]
}

const chartConfig = createConfig()

chartConfig.headUrl = `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`

chartConfig.checkItemStatus = (item) => ~['已转审', '已同意'].indexOf(item.status)
chartConfig.adjustPos = (afterNode) => afterNode.raw.name === '2' && (afterNode.y += 1)

// 使用 markRaw 避免大数据对象被 Vue 深度响应式代理，提升性能
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
