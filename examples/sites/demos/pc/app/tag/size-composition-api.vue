<template>
  <div class="tiny-tag-demo">
    <tiny-tag size="medium"> 中等标签 </tiny-tag>
    <tiny-tag> 默认标签 </tiny-tag>
    <tiny-tag size="small"> 小型标签 </tiny-tag>
    <tiny-tag size="mini"> 超小标签 </tiny-tag>
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
