<template>
  <div>
    <tiny-scroll-text>
      <span>通过插槽设置滚动的文本内容</span>
    </tiny-scroll-text>
  </div>
</template>

<script>
import { ScrollText } from '@opentiny/vue'

export default {
  components: {
    TinyScrollText: ScrollText
  }
}
</script>
