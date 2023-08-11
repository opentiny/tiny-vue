<template>
  <div class="demo-input">
    <tiny-input ref="inputRef" v-model="input" placeholder="使输入框先失去焦点"></tiny-input>
    <br />
    <br />
    <tiny-button @click="click">输入框获取焦点</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput, Button as TinyButton } from '@opentiny/vue'

const input = ref('')
const inputRef = ref()

function click() {
  inputRef.value.focus()
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
