<template>
  <div class="demo-input">
    <tiny-input v-model="input" size="medium" placeholder="size = medium"></tiny-input>
    <tiny-input v-model="input" placeholder="default size"></tiny-input>
    <tiny-input v-model="input" size="small" placeholder="size = small"></tiny-input>
    <tiny-input v-model="input" size="mini" placeholder="size = mini"></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'

const input = ref('')
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
  margin: 5px;
}
</style>
