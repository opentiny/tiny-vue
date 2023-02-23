<template>
  <tiny-scroll-text :hover-stop="true">设置 hover-stop 为 false 鼠标悬停后不会停止滚动</tiny-scroll-text>
</template>

<script>
import { ScrollText } from '@opentiny/vue'

export default {
  components: {
    TinyScrollText: ScrollText
  }
}
</script>
