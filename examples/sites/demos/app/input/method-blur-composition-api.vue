<template>
  <div class="demo-input">
    <tiny-input
      ref="inputRef"
      v-model="input"
      placeholder="通过 input 事件调用 blur()，请输入"
      @input="enableBlur"
    ></tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'

const input = ref('')
const inputRef = ref()

function enableBlur() {
  inputRef.value.blur()
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
