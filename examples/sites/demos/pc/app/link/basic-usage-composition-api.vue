<template>
  <div>
    <tiny-link>默认链接</tiny-link>
    <tiny-link value="默认链接2"></tiny-link>
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
