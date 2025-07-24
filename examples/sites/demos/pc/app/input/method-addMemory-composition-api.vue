<template>
  <div class="demo-input">
    <tiny-input
      ref="textMemoryRef"
      v-model="input"
      name="textMemory"
      placeholder="Please input"
      :memory-space="3"
      @change="addMemory"
    ></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyInput, TinyModal } from '@opentiny/vue'

const input = ref('')
const textMemoryRef = ref()

function addMemory(val) {
  TinyModal.message({ message: val, status: 'success' })
  textMemoryRef.value.addMemory(val)
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
  margin: 5px 0;
}
</style>
