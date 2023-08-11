<template>
  <div class="demo-input">
    <tiny-input autofocus v-model="value"></tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'

const value = ref('')
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
