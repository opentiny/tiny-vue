<template>
  <div class="demo-input">
    <tiny-input v-model="input" disabled placeholder="input"></tiny-input>
    <tiny-input type="textarea" disabled v-model="input" placeholder="textarea"></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'

const input = ref('')
</script>

<style scoped>
.demo-input {
  width: 300px;
}

.demo-input > div {
  margin-top: 10px;
}
</style>
