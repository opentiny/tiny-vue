<template>
  <div class="tag-round-demo">
    <h4>Round 属性示例</h4>

    <tiny-tag type="primary" round>圆角标签</tiny-tag>
    <tiny-tag type="success" round>成功标签</tiny-tag>
    <tiny-tag type="warning" round>警告标签</tiny-tag>
    <tiny-tag type="danger" round>危险标签</tiny-tag>

    <tiny-tag type="info" round only-icon>
      <tiny-icon-heartempty />
    </tiny-tag>
  </div>
</template>

<script setup>
import { TinyTag } from '@opentiny/vue'
import { IconHeartempty } from '@opentiny/vue-icon'

const tinyIconHeartempty = IconHeartempty()
</script>

<style scoped>
.tiny-tag {
  margin-right: 12px;
  margin-bottom: 12px;
}

h4 {
  margin-bottom: 16px;
  color: #333;
}
</style>
