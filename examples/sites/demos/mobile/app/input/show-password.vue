<template>
  <div class="demo-input">
    <tiny-input v-model="input" show-password></tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyInput } from '@opentiny/vue-mobile'

const input = ref('abcdefg')
</script>

<style scoped>
.demo-input {
  height: 100%;
  padding: 20px 16px;
  background: #f5f5f5;
}
</style>
