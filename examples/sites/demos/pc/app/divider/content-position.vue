<template>
  <div>
    <p>文案在左侧</p>
    <tiny-divider content-position="left" offset="20%">左侧且偏移20%</tiny-divider>
    <p>文案在中间</p>
    <tiny-divider content-position="center">中间</tiny-divider>
    <p>文案在右侧</p>
    <tiny-divider content-position="right" offset="80px">右侧且偏移80px</tiny-divider>
  </div>
</template>

<script>
import { TinyDivider } from '@opentiny/vue'

export default {
  components: {
    TinyDivider
  }
}
</script>
