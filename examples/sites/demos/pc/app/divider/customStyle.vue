<template>
  <p>自定义分隔线颜色</p>
  <tiny-divider color="#7693f5"></tiny-divider>
  <p>自定义分隔线的样式</p>
  <tiny-divider border-style="dashed"></tiny-divider>
  <p>自定义文案的颜色</p>
  <tiny-divider content-color="#7693f5">文案</tiny-divider>
  <p>文案的背景颜色</p>
  <tiny-divider content-color="#ffffff" content-background-color="#7693f5">文案</tiny-divider>
</template>

<script lang="jsx">
import { Divider } from '@opentiny/vue'

export default {
  components: {
    TinyDivider: Divider
  }
}
</script>
