<template>
  <div class="demo-input">
    <tiny-input v-model="input1" counter :maxlength="10"></tiny-input>

    <tiny-input v-model="input2" type="textarea" show-word-limit :maxlength="20"></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyInput } from '@opentiny/vue-mobile'

const input1 = ref('counter 示例')
const input2 = ref('show-word-limit 示例')
</script>

<style scoped>
.demo-input {
  padding: 20px 16px;
  height: 100%;
  background: #f5f5f5;
}

.demo-input [class^='tiny'] {
  margin-bottom: 8px;
}
</style>
