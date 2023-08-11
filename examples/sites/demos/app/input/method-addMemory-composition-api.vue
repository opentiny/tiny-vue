<template>
  <div class="demo-input">
    <h3>input:{{ input }}</h3>
    <tiny-input
      ref="textMemoryRef"
      v-model="input"
      name="textMemory"
      placeholder="请输入内容"
      @change="addMemory"
    ></tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput, Modal } from '@opentiny/vue'

const input = ref('')
const textMemoryRef = ref()

function addMemory(val) {
  Modal.message({ message: val, status: 'success' })
  textMemoryRef.value.addMemory(val)
}
</script>

<style scoped>
.demo-input {
  height: 300px;
}
.demo-input .tiny-input {
  width: 250px;
}
</style>
