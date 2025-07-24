<template>
  <div class="tiny-tag-demo">
    <div class="mb5">color 预设值：</div>
    <tiny-tag color="red">red 标签</tiny-tag>
    <tiny-tag color="orange">orange 标签</tiny-tag>
    <tiny-tag color="green">green 标签</tiny-tag>
    <tiny-tag color="blue">blue 标签</tiny-tag>
    <tiny-tag color="purple">purple 标签</tiny-tag>
    <tiny-tag color="brown">brown 标签</tiny-tag>
    <tiny-tag color="grey">grey 标签</tiny-tag>
    <tiny-tag color="gold">gold 标签</tiny-tag>
    <div class="mb5">自定义背景：</div>
    <tiny-tag color="rgba(82,196,26,0.8)">自定义背景色</tiny-tag>
    <div class="mb5">自定义背景和文本色：</div>
    <tiny-tag :color="['linear-gradient(to right, #e8cda4, #f8eddb)', '#8f3c00']">自定义背景色和文本色</tiny-tag>
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
