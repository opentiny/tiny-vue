<template>
  <div class="demo-input">
    <tiny-input v-model="input" placeholder="请输入内容" @change="change"></tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput, Modal } from '@opentiny/vue'

const input = ref('')

function change() {
  Modal.message('change')
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
