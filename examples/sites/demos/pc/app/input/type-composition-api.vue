<template>
  <div class="demo-input">
    <tiny-input v-model="text" placeholder="text"></tiny-input>
    <tiny-input type="password" v-model="password" placeholder="password"></tiny-input>
    <tiny-input type="number" v-model="number" placeholder="number"></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyInput } from '@opentiny/vue'

const text = ref('')
const password = ref('')
const number = ref('')
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
  margin: 5px;
}
</style>
