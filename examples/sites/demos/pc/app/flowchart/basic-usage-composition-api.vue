<template>
  <div>
    <tiny-flowchart :data="data" :config="config" />
  </div>
</template>

<script setup>
import { TinyFlowchart } from '@opentiny/vue'
import { reactive } from 'vue'

const { createNode, createLink, createConfig } = TinyFlowchart

const config = createConfig()
config.width = 960
config.height = 260

const data = reactive({
  nodes: [
    createNode('1', 1, '提交申请', '2024-01-01', null, 1, 1),
    createNode('2', 2, '主管审批', '2024-01-02', null, 1, 3),
    createNode('3', 3, '流程结束', '', null, 1, 5)
  ],
  links: [createLink('1', '2', '0 r2', 2, 'solid'), createLink('2', '3', '0 r2', 3, 'solid')]
})
</script>
