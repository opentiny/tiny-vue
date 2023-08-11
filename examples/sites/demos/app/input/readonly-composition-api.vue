<template>
  <div class="demo-input">
    <tiny-input readonly></tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { Input as TinyInput } from '@opentiny/vue'
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
