<template>
  <tiny-steps vertical line size="small" :data="data" :active="active" @click="normalClick"></tiny-steps>
</template>

<script setup>
import { ref } from 'vue'
import { Steps as TinySteps, Modal } from '@opentiny/vue'

const active = ref(0)
const data = ref([
  {
    name: 'Basic Info',
    status: 'done'
  },
  { name: 'BOQ Info', status: 'done', description: 'done 已完成' },
  { name: 'BBQ Info', status: 'error', description: 'error 错误' },
  {
    name: 'Involved Parties',
    status: 'disabled'
  },
  { name: 'Billing', status: '', description: '默认无状态' }
])

const normalClick = (index, node) => {
  active.value = index
}
</script>
