<template>
  <div class="tiny-tag-demo">
    <tiny-tag size="medium" type="success"> 中等标签 </tiny-tag>
    <tiny-tag type="success"> 默认标签 </tiny-tag>
    <tiny-tag size="small" type="success"> 小型标签 </tiny-tag>
    <tiny-tag size="mini" type="success"> 超小标签 </tiny-tag>
  </div>
</template>

<script setup lang="jsx">
import { Tag as TinyTag } from '@opentiny/vue'
</script>

<style>
.tiny-tag-demo .tiny-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
