<template>
  <tiny-numeric v-model="value" @focus="onFocus"></tiny-numeric>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Numeric as TinyNumeric, Modal } from '@opentiny/vue'

const value = ref(1)

const onFocus = (event: FocusEvent) => {
  Modal.message({ message: `${event.type} 事件`, status: 'info' })
}
</script>
