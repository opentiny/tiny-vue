<template>
  <div>
    <tiny-divider> 分割线 </tiny-divider>
    <tiny-divider content-position="left"> 分割线 </tiny-divider>
    <tiny-divider content-position="right"> 分割线 </tiny-divider>
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
