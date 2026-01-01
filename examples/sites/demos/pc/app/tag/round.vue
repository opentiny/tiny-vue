<template>
  <div class="tag-round-demo">
    <h4>Round 属性示例</h4>

    <tiny-tag type="primary" :round="true">圆角标签</tiny-tag>
    <tiny-tag type="success" :round="true">成功标签</tiny-tag>
    <tiny-tag type="warning" :round="true">警告标签</tiny-tag>
    <tiny-tag type="danger" :round="true">危险标签</tiny-tag>

    <tiny-tag type="info" :round="true" :only-icon="true">
      <tiny-icon-heartempty />
    </tiny-tag>
  </div>
</template>

<script>
import { TinyTag } from '@opentiny/vue'
import { IconHeartempty } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTag,
    TinyIconHeartempty: IconHeartempty()
  }
}
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
