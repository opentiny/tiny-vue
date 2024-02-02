<template>
  <div class="tiny-tag-demo">
    <tiny-tag color="default"> 默认 </tiny-tag>
    <tiny-tag color="default" mini> 小尺寸 </tiny-tag>
  </div>
</template>

<script>
import { Tag } from '@opentiny/vue'

export default {
  components: {
    TinyTag: Tag
  }
}
</script>

<style>
.tiny-tag-demo {
  padding: 10px;
}

.tiny-mobile-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
