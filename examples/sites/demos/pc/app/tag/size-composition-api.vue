<template>
  <div class="tiny-tag-demo">
    <tiny-tag size="medium" type="success"> 中等标签 </tiny-tag>
    <tiny-tag type="success"> 默认标签 </tiny-tag>
    <tiny-tag size="small" type="success"> 小型标签 </tiny-tag>
    <br /><br />
    <tiny-tag size="medium" type="success" only-icon> <tiny-icon-heartempty /> </tiny-tag>
    <tiny-tag type="success" only-icon> <tiny-icon-heartempty /> </tiny-tag>
    <tiny-tag size="small" type="success" only-icon> <tiny-icon-heartempty /> </tiny-tag>
  </div>
</template>

<script setup lang="jsx">
import { TinyTag } from '@opentiny/vue'
import { IconHeartempty } from '@opentiny/vue-icon'

const TinyIconHeartempty = IconHeartempty()
</script>

<style scoped>
.tiny-tag-demo .tiny-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
