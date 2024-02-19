<template>
  <div class="demo-steps">
    <tiny-steps advanced :data="data" :duration="duration" :active="advancedActive"></tiny-steps>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Steps as TinySteps } from '@opentiny/vue'

const duration = ref(1000)
const advancedActive = ref(2)
const data = reactive([
  {
    name: '默认 Basic Info',
    status: ''
  },
  { name: '已完成 BOQ Info', status: 'done' },
  { name: '错误 BBQ Info', status: 'error' },
  {
    name: '已禁用 Involved Parties Involved Parties Involved Parties',
    status: 'disabled'
  },
  { name: '默认 Billing1', status: '' }
])
</script>

<style scoped>
.demo-steps {
  width: 650px;
}
</style>
