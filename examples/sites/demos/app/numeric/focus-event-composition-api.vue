<template>
  <tiny-numeric v-model="value" @focus="Efocus"></tiny-numeric>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Numeric as TinyNumeric, Modal } from '@opentiny/vue'

const value = ref(1)

function Efocus() {
  Modal.message({ message: 'focus 事件', status: 'info' })
}
</script>
