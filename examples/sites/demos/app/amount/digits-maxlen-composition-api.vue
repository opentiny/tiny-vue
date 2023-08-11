<template>
  <tiny-amount v-model="value" :digits="1" :max-len="12" @change="handleChange" :rounding="false"></tiny-amount>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Amount as TinyAmount, Modal } from '@opentiny/vue'

const value = ref(888888888888.88)

function handleChange(value) {
  Modal.message({ message: `当前值为 ${value.amount}`, status: 'info' })
}
</script>
