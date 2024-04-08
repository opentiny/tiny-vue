<template>
  <div class="tiny-tag-demo">
    <div class="mb5">hit：</div>
    <tiny-tag hit>标签一</tiny-tag>
    <tiny-tag type="success" hit>标签二</tiny-tag>
    <tiny-tag type="info" hit>标签三</tiny-tag>
    <tiny-tag type="warning" hit>标签四</tiny-tag>
    <tiny-tag type="danger" hit>标签五</tiny-tag>
    <div class="mb5">color 预设值：</div>
    <tiny-tag color="red">red标签</tiny-tag>
    <tiny-tag color="orange">orange标签</tiny-tag>
    <tiny-tag color="green">green标签</tiny-tag>
    <tiny-tag color="blue">blue标签</tiny-tag>
    <tiny-tag color="purple">purple标签</tiny-tag>
    <tiny-tag color="brown">brown标签</tiny-tag>
    <tiny-tag color="grey">grey标签</tiny-tag>
    <div class="mb5">自定义 color 值：</div>
    <tiny-tag color="rgba(82,196,26,0.8)" hit>自定义背景色</tiny-tag>
    <tiny-tag :color="['linear-gradient(to right, #e8cda4, #f8eddb)', '#8f3c00']" hit>自定义背景色和文本色</tiny-tag>
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
  border-radius: 0px 8px 0px 8px;
}
</style>
