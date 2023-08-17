<template>
  <div class="demo-input">
    <tiny-input v-model="input" placeholder="先获取焦点后再失去焦点" @blur="blur"></tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput, Modal } from '@opentiny/vue'

const input = ref('')

function blur() {
  Modal.message('blur')
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
