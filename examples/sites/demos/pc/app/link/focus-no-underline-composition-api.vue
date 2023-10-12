<template>
  <div>
    <tiny-link :underline="false"> 无下划线 </tiny-link>
    <tiny-link>有下划线</tiny-link>
  </div>
</template>

<script setup lang="jsx">
import { Link as TinyLink } from '@opentiny/vue'
</script>

<style>
.tiny-link {
  margin-right: 8px;
}
</style>
