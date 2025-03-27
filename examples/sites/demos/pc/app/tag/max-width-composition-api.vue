<template>
  <div class="tiny-tag-demo">
    <tiny-tag size="medium" type="success" maxWidth="80px"> 文本超长超长的标签 </tiny-tag>
  </div>
</template>

<script setup lang="jsx">
import { TinyTag } from '@opentiny/vue'
</script>

<style scoped>
.tiny-tag-demo .tiny-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
