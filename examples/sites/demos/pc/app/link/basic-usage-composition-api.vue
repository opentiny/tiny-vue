<template>
  <div>
    <tiny-link @click="handleClick">默认链接</tiny-link>
    <tiny-link value="默认链接2"></tiny-link>
  </div>
</template>

<script setup>
import { Link as TinyLink } from '@opentiny/vue'

function handleClick() {
  console.log('clicked')
}
</script>

<style scoped>
.tiny-link {
  margin-right: 8px;
}
</style>
