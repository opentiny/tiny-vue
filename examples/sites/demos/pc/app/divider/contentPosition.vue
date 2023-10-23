<template>
  <p>文案在左侧</p>
  <tiny-divider content-position="left">文案</tiny-divider>
  <p>文案在中间</p>
  <tiny-divider content-position="center">文案</tiny-divider>
  <p>文案在右侧</p>
  <tiny-divider content-position="right">文案</tiny-divider>
</template>

<script lang="jsx">
import { Divider } from '@opentiny/vue'

export default {
  components: {
    TinyDivider: Divider
  }
}
</script>
