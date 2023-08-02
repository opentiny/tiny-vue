<template>
  <div>
    <tiny-tag size="small" disabled closable> <icon-time class="tiny-svg-size" />标签 </tiny-tag>
    <tiny-tag disabled closable> <icon-time class="tiny-svg-size" />标签 </tiny-tag>
    <tiny-tag size="medium" disabled closable> <icon-time class="tiny-svg-size medium" />标签 </tiny-tag>
  </div>
</template>

<script lang="jsx">
import { Tag, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTag: Tag
  }
}
</script>

<style scoped>
.tiny-tag {
  margin-right: 10px;
}
.medium {
  font-size: 20px;
}
</style>
