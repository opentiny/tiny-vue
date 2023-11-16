<template>
  <tiny-steps vertical line size="small" :data="data" :visible-num="4" :active="advancedActive"></tiny-steps>
</template>

<script setup>
import { ref } from 'vue'
import { TimeLine as TinyTimeLine, Modal } from '@opentiny/vue'

const normalActive = ref(0)
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
const normalActive1 = ref(0)
</script>
