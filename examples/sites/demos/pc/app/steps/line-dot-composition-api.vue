<template>
  <tiny-steps dot vertical :data="data" :active="active" @click="advancedClick"></tiny-steps>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Steps as TinySteps, Modal } from '@opentiny/vue'

const active = ref(1)
const data = reactive([
  {
    name: '已完成',
    status: 'done',
    description: '已完成的描述'
  },
  { name: '当前', status: 'doing', description: '当前步骤的描述' },
  { name: '错误/失败', status: 'error', description: '错误或失败步骤的描述' },
  { name: '未进行', description: '未进行步骤的描述' },
  { name: '未进行' },
  {
    name: '禁用',
    status: 'disabled',
    description: '禁用的描述'
  }
])

const advancedClick = (index, node) => {
  active.value = index

  Modal.message({ message: `节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`, status: 'info' })
}
</script>
