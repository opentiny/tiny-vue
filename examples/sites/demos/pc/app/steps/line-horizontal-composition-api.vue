<template>
  <tiny-steps line :data="data" :active="active" @click="handleClick"></tiny-steps>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Steps as TinySteps, Modal } from '@opentiny/vue'

const active = ref(1)
const data = reactive([
  {
    name: 'Basic Info',
    status: 'done',
    description: 'done 已完成'
  },
  { name: 'BOQ Info', status: 'doing', description: 'doing 处理中' },
  { name: '进行中 BOQ Info', status: 'disabled', description: 'disabled 禁用' },
  { name: 'BBQ Info', status: 'error', description: 'error 错误' },
  { name: 'BBQ Info', description: '默认无状态' }
])

const handleClick = (index, node) => {
  active.value = index
  Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
}
</script>
