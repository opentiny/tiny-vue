<template>
  <div class="demo-steps">
    <tiny-steps :data="data" :active="advancedActive" @click="advancedClick"></tiny-steps>
    <br /><br />

    <p>通过 <code>advanced</code> 属性启用高级向导功能:</p>
    <br />
    <tiny-steps advanced :data="data" :active="advancedActive" @click="advancedClick"></tiny-steps>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Steps as TinySteps, Modal } from '@opentiny/vue'

const advancedActive = ref(1)
const data = ref([
  { name: 'Basic Info', count: 3, status: 'doing' },
  { name: 'BOQ Info', count: 0, status: 'done' },
  { name: 'Involved Parties', count: 10, status: 'doing' },
  { name: 'Billing', count: 0, status: 'done' },
  { name: 'Appraise', count: 0 }
])

const advancedClick = (index, node) => {
  advancedActive.value = index

  Modal.message({ message: `节点 index: ${index}; 节点信息: ${JSON.stringify(node)}`, status: 'info' })
}
</script>
