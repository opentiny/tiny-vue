<template>
  <div class="demo-input">
    <tiny-input type="password" v-model="input" show-password></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'

const input = ref('123456')
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
