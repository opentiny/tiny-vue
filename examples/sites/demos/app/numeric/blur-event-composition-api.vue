<template>
  <tiny-numeric v-model="value" @blur="Eblur"></tiny-numeric>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Numeric as TinyNumeric, Modal } from '@opentiny/vue'

const value = ref(1)

function Eblur() {
  Modal.message({ message: 'blur 事件', status: 'info' })
}
</script>
