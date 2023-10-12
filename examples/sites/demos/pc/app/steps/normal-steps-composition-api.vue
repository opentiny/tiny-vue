<template>
  <tiny-time-line :data="data" :active="normalActive" type="normal" @click="normalClick"></tiny-time-line>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimeLine as TinyTimeLine, Modal } from '@opentiny/vue'

const normalActive = ref(0)
const data = ref([{ name: 'Basic Info.' }, { name: 'BOQ Info' }, { name: 'Involved Parties' }, { name: 'Billing' }])

function normalClick(index, node) {
  normalActive.value = index

  Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
}
</script>
