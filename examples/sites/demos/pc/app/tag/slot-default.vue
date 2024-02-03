<template>
  <div class="tiny-tag-demo">
    <tiny-tag size="small" :disabled="disabled" class="first">
      <icon-fileupload class="tiny-svg-size left" />标签 <icon-chevron-right class="tiny-svg-size right" />
    </tiny-tag>
    <tiny-tag size="small" :disabled="disabled" closable> <icon-time class="tiny-svg-size" />标签 </tiny-tag>
    <tiny-tag :disabled="disabled" closable> <icon-time class="tiny-svg-size" />标签 </tiny-tag>
    <tiny-tag size="medium" :disabled="disabled" closable> <icon-time class="tiny-svg-size medium" />标签 </tiny-tag>
  </div>
</template>

<script lang="jsx">
import { Tag } from '@opentiny/vue'
import { IconTime, IconFileupload, IconChevronRight } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTag: Tag,
    IconTime: IconTime(),
    IconFileupload: IconFileupload(),
    IconChevronRight: IconChevronRight()
  },
  data() {
    return {
      disabled: false
    }
  }
}
</script>

<style scoped>
.tiny-tag {
  margin-right: 10px;
}
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
