<template>
  <div class="display-only">
    <p>
      <label>display-only & display-only-content：</label>
      <tiny-input v-model="input" display-only display-only-content="display-only-content 的内容"></tiny-input>
    </p>
    <p>
      <label>display-only：</label>
      <tiny-input v-model="input1" display-only></tiny-input>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'

const input = ref('value 的内容')
const input1 = ref('value 的内容')
</script>

<style scoped>
.display-only .tiny-input {
  display: inline-block;
  width: auto;
}
</style>
