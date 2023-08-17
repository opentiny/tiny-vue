<template>
  <div class="demo-input">
    <tiny-form id="tinyForm"></tiny-form>
    <tiny-input v-model="input" form="tinyForm"></tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput, Form as TinyForm } from '@opentiny/vue'

const input = ref('')
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
