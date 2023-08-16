<template>
  <div class="demo-input">
    <tiny-input type="number" v-model="input" :max="2"></tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'

const input = ref('')
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
