<template>
  <div class="demo-input">
    <tiny-input v-model="input" mask disabled></tiny-input>
    <tiny-input v-model="input" mask display-only></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyInput } from '@opentiny/vue'

const input = ref('文字过长时会显示点点点，并且鼠标悬浮出现 tip')
</script>

<style scoped>
.demo-input {
  width: 150px;
}

.demo-input > * {
  margin-bottom: 10px;
}
</style>
