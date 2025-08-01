<template>
  <div>
    <tiny-numeric v-model="value" @input="onInput"></tiny-numeric>
    <div>
      input事件触发了:<span class="count">{{ inputCount }}</span> 次
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { TinyModal, TinyNumeric } from '@opentiny/vue'

const value = ref(1)
const inputCount = ref(0)

const onInput = (event: InputEvent) => {
  const currentValue = (event.target as HTMLInputElement).value
  TinyModal.message({
    message: `新值： ${currentValue}`,
    status: 'info'
  })
  inputCount.value++
}
</script>
