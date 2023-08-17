<template>
  <div class="demo-input">
    <tiny-input ref="inputRef" v-model="input" placeholder="请输入内容"></tiny-input>
    <br />
    <br />
    <tiny-button @click="click">选中输入框内容</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput, Button as TinyButton } from '@opentiny/vue'

const input = ref('')
const inputRef = ref()

function click() {
  inputRef.value.select()
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
