<template>
  <div class="demo-input">
    <tiny-input type="textarea" v-model="input" placeholder="default"></tiny-input>
    <tiny-input type="textarea" v-model="input" :rows="1" placeholder="rows = 1"></tiny-input>
    <tiny-input type="textarea" v-model="input" :cols="100" placeholder="cols = 100"></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'

const input = ref('')
</script>

<style scoped>
.demo-input .tiny-textarea {
  width: auto;
  max-width: 100%;
  margin: 5px;
}
</style>
