<template>
  <div class="demo-input">
    <tiny-input v-model="text" :maxlength="10" show-word-limit></tiny-input>
    <br />
    <tiny-input type="textarea" v-model="textarea" :maxlength="20" show-word-limit></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'

const text = ref('')
const textarea = ref('')
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
  display: block;
  margin: 5px 0;
}

.demo-input .tiny-textarea {
  width: 400px;
}
</style>
