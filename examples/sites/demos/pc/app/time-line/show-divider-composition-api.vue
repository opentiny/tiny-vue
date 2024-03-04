<template>
  <tiny-time-line :data="data" :active="normalActive" :show-divider="true" text-position="right" @click="normalClick">
  </tiny-time-line>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { TimeLine as TinyTimeLine, Modal } from '@opentiny/vue'

const normalActive = ref(0)
const data = reactive([{ name: 'Basic Info' }, { name: 'BOQ Info' }, { name: 'Involved Parties' }, { name: 'Billing' }])

const normalClick = (index, node) => {
  normalActive.value = index

  Modal.message({ message: `节点 index: ${index}; 节点信息: ${JSON.stringify(node)}`, status: 'info' })
}
</script>
