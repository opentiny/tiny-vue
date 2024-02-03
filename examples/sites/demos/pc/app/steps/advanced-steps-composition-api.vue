<template>
  <tiny-steps :data="data" :active="advancedActive" @click="advancedClick"></tiny-steps>
</template>

<script setup>
import { ref } from 'vue'
import { Steps as TinySteps, Modal } from '@opentiny/vue'

const advancedActive = ref(2)
const data = ref([
  { name: 'Basic Info', count: 3, status: 'doing' },
  { name: 'BOQ Info', count: 0, status: 'done' },
  { name: 'Involved Parties', count: 10, status: 'doing' },
  { name: 'Billing', count: 0, status: 'done' }
])

const advancedClick = (index, node) => {
  advancedActive.value = index

  Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
}
</script>
