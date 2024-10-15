<template>
  <tiny-tag type="success" only-icon><tiny-icon-heartempty /> </tiny-tag>
  <tiny-tag type="success"><tiny-icon-heartempty /> 默认标签 </tiny-tag>
  <tiny-tag type="info" value="配置式标签"></tiny-tag>
</template>

<script>
import { Tag } from '@opentiny/vue'
import { IconHeartempty } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTag: Tag,
    TinyIconHeartempty: IconHeartempty()
  }
}
</script>

<style scoped>
.tiny-tag {
  margin-right: 16px;
}
</style>
