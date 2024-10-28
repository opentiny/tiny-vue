<template>
  <tiny-numeric v-model="value" @blur="onBlur"></tiny-numeric>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TinyNumeric, TinyModal } from '@opentiny/vue'

const value = ref(1)

const onBlur = (event: FocusEvent) => {
  TinyModal.message({ message: `${event.type} 事件`, status: 'info' })
}
</script>
