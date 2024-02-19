<template>
  <tiny-scroll-text :time="10">设置 time 自定义滚动所用的时间为 10s</tiny-scroll-text>
</template>

<script>
import { ScrollText } from '@opentiny/vue'

export default {
  components: {
    TinyScrollText: ScrollText
  }
}
</script>
