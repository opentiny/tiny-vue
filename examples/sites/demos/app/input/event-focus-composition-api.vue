<template>
  <div class="demo-input">
    <tiny-input v-model="input" placeholder="获取焦点" @focus="focus" @mouseenter="focus"></tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput, Modal } from '@opentiny/vue'

const input = ref('')

function focus() {
  Modal.message('focus')
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
