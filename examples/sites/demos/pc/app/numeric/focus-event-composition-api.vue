<template>
  <tiny-numeric v-model="value" @focus="onFocus"></tiny-numeric>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TinyNumeric, TinyModal } from '@opentiny/vue'

const value = ref(1)

const onFocus = (event: FocusEvent) => {
  TinyModal.message({ message: `${event.type} 事件`, status: 'info' })
}
</script>
