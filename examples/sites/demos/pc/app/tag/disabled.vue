<template>
  <div>
    <tiny-tag size="small" disabled closable>标签</tiny-tag>
    <tiny-tag disabled closable>标签</tiny-tag>
    <tiny-tag size="medium" disabled closable>标签</tiny-tag>
  </div>
</template>

<script lang="jsx">
import { Tag } from '@opentiny/vue'

export default {
  components: {
    TinyTag: Tag
  }
}
</script>

<style scoped>
.tiny-tag {
  margin-right: 10px;
}
.medium {
  font-size: 20px;
}
</style>
