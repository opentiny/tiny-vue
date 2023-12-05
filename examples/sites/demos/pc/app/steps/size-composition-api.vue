<template>
  <tiny-steps vertical line size="small" :data="data" :active="active" @click="normalClick"></tiny-steps>
</template>

<script setup>
import { ref } from 'vue'
import { Steps as TinySteps, Modal } from '@opentiny/vue'

const active = ref(0)
const data = ref([
  {
    name: 'Basic Info'
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
  active.value = index
}
</script>
