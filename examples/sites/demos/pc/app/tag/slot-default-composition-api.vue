<template>
  <div class="tiny-tag-demo">
    <tiny-tag size="small" :disabled="disabled" class="first">
      <tiny-icon-fileupload class="tiny-svg-size left" />标签 <tiny-icon-chevron-right class="tiny-svg-size right" />
    </tiny-tag>
    <tiny-tag size="small" :disabled="disabled" closable> <tiny-icon-time class="tiny-svg-size" />标签 </tiny-tag>
    <tiny-tag :disabled="disabled" closable> <tiny-icon-time class="tiny-svg-size" />标签 </tiny-tag>
    <tiny-tag size="medium" :disabled="disabled" closable>
      <tiny-icon-time class="tiny-svg-size medium" />标签
    </tiny-tag>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Tag as TinyTag } from '@opentiny/vue'
import { iconTime, iconFileupload, iconChevronRight } from '@opentiny/vue-icon'

const disabled = ref(false)

const TinyIconTime = iconTime()
const TinyIconFileupload = iconFileupload()
const TinyIconChevronRight = iconChevronRight()
</script>

<style scoped>
.first {
  color: #a25203;
}
.first svg {
  fill: #a25203;
}
.first .right {
  margin-right: -2px;
}
.tiny-svg-size {
  fill: #595959;
  margin-right: 4px;
  font-size: 16px;
}
.medium {
  font-size: 20px;
}
</style>
