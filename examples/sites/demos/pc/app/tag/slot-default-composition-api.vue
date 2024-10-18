<template>
  <div class="tiny-tag-demo">
    <tiny-tag size="small">
      <tiny-icon-fileupload class="tiny-svg-size left" />标签 <tiny-icon-chevron-right class="tiny-svg-size right" />
    </tiny-tag>
    <tiny-tag closable> <tiny-icon-time class="tiny-svg-size" />标签 </tiny-tag>
  </div>
</template>

<script setup>
import { Tag as TinyTag } from '@opentiny/vue'
import { iconTime, iconFileupload, iconChevronRight } from '@opentiny/vue-icon'

const TinyIconTime = iconTime()
const TinyIconFileupload = iconFileupload()
const TinyIconChevronRight = iconChevronRight()
</script>

<style scoped>
.tiny-tag {
  margin-right: 10px;
}
</style>
