<template>
  <div>
    <tiny-button @click="Switchover" style="margin-bottom: 10px">启用/禁用</tiny-button>
    <tiny-amount v-model="value" :disabled="disabled"></tiny-amount>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Amount as TinyAmount, Button as TinyButton } from '@opentiny/vue'

const value = ref(88.88)
const disabled = ref(false)

function Switchover() {
  disabled.value = !disabled.value
}
</script>
