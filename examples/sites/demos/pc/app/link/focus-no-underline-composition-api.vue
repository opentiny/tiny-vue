<template>
  <div>
    <tiny-link :underline="false">无下划线</tiny-link>
    <tiny-link>有下划线</tiny-link>
  </div>
</template>

<script setup>
import { Link as TinyLink } from '@opentiny/vue'
</script>

<style scoped>
.tiny-link {
  margin-right: 8px;
}
</style>
