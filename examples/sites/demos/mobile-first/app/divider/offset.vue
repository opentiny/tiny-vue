<template>
  <div>
    <tiny-divider content-position="left" offset="20%"> 分割线 </tiny-divider>
    <tiny-divider content-position="left" offset="-14px"> 文本左偏移 </tiny-divider>
    <tiny-divider content-position="right" offset="-14px"> 文本右偏移 </tiny-divider>
  </div>
</template>

<script>
import { Divider } from '@opentiny/vue'

export default {
  components: {
    TinyDivider: Divider
  }
}
</script>
