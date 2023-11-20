<template>
  <tiny-time-line :data="data" :active="normalActive" text-position="right" @click="normalClick"> </tiny-time-line>
</template>

<script setup>
import { ref } from 'vue'
import { TimeLine as TinyTimeLine, Modal } from '@opentiny/vue'

const normalActive = ref(0)
const data = ref([
  {
    name: 'Basic Info.'
  },
  {
    name: 'AAAAA'
  },
  {
    name: 'Involved Parties',
    error: true
  },
  {
    name: 'Billing',
    disabled: true
  }
])

const normalClick = (index, node) => {
  normalActive.value = index

  Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
}
</script>
