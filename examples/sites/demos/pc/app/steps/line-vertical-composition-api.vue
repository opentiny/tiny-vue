<template>
  <tiny-steps line vertical :data="data" :active="active" @click="advancedClick"></tiny-steps>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Steps as TinySteps, Modal } from '@opentiny/vue'

const active = ref(1)
const data = reactive([
  {
    name: '默认 Basic Info',
    status: '',
    description: '默认无状态'
  },
  { name: '已完成 BOQ Info', status: 'done', description: 'done 已完成' },
  { name: '进行中 BOQ Info', status: 'doing', description: 'doing 进行中' },
  { name: '错误 BBQ Info', status: 'error', description: 'error 错误' },
  {
    name: '已禁用 Involved Parties',
    status: 'disabled',
    description: 'disabled 已禁用'
  }
])

const advancedClick = (index, node) => {
  active.value = index

  Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
}
</script>
