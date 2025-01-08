<template>
  <p>自定义分隔线颜色</p>
  <tiny-divider color="#1476ff"></tiny-divider>
  <p>自定义文案的颜色及字体大小</p>
  <tiny-divider content-color="#1476ff">字体颜色</tiny-divider>
  <tiny-divider content-color="#ffffff" content-background-color="#1476ff">文案背景</tiny-divider>
  <tiny-divider font-size="16px">字体大小</tiny-divider>
  <p>自定义分割线整体内容高度及边距</p>
  <tiny-divider height="40px" margin="8px 0">高度及边距</tiny-divider>
</template>

<script setup>
import { TinyDivider } from '@opentiny/vue'
</script>
