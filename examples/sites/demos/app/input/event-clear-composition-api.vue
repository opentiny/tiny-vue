<template>
  <div class="demo-input">
    <tiny-input v-model="text" placeholder="请输入内容" clearable @clear="clear"></tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput, Modal } from '@opentiny/vue'

const text = ref('')

function clear() {
  Modal.message('clear')
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
