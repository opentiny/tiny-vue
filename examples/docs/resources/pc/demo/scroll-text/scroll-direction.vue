<template>
  <div>
    <tiny-scroll-text direction="left">文字向左滚动</tiny-scroll-text>
    <br />
    <tiny-scroll-text direction="right">文字向右滚动</tiny-scroll-text>
    <br />
    <tiny-scroll-text direction="up">文字向上滚动</tiny-scroll-text>
    <br />
    <tiny-scroll-text direction="down">文字向下滚动</tiny-scroll-text>
  </div>
</template>

<script lang="jsx">
import { ScrollText } from '@opentiny/vue'

export default {
  components: {
    TinyScrollText: ScrollText
  }
}
</script>
