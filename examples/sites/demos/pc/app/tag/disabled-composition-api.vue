<template>
  <div>
    <tiny-tag size="small" disabled closable>标签</tiny-tag>
    <tiny-tag disabled closable>标签</tiny-tag>
    <tiny-tag size="medium" disabled closable>标签</tiny-tag>
  </div>
</template>

<script setup lang="jsx">
import { Tag as TinyTag } from '@opentiny/vue'
</script>

<style scoped>
.tiny-tag {
  margin-right: 10px;
}
.medium {
  font-size: 20px;
}
</style>
