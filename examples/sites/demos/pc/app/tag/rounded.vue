<template>
  <div class="tiny-tag-demo">
    <tiny-tag type="success" effect="light" round> 圆角按钮1 </tiny-tag>
    <tiny-tag type="danger" effect="dark" round> 圆角按钮2 </tiny-tag>
    <tiny-tag type="warning" effect="plain" round> 圆角按钮3 </tiny-tag>
  </div>
</template>

<script lang="jsx">
import { TinyTag } from '@opentiny/vue'

export default {
  components: {
    TinyTag
  }
}
</script>

<style scoped>
.tiny-tag-demo .tiny-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
