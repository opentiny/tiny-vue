<template>
  <div class="tiny-tag-demo">
    <tiny-tag size="small">
      <tiny-icon-fileupload class="tiny-svg-size left" />标签 <tiny-icon-chevron-right class="tiny-svg-size right" />
    </tiny-tag>
    <tiny-tag closable> <tiny-icon-time class="tiny-svg-size" />标签 </tiny-tag>
  </div>
</template>

<script lang="jsx">
import { Tag } from '@opentiny/vue'
import { IconTime, IconFileupload, IconChevronRight } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTag: Tag,
    TinyIconTime: IconTime(),
    TinyIconFileupload: IconFileupload(),
    TinyIconChevronRight: IconChevronRight()
  }
}
</script>

<style scoped>
.tiny-tag {
  margin-right: 10px;
}
</style>
