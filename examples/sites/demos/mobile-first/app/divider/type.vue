<template>
  <div>
    <tiny-divider> 分割线 </tiny-divider>
    <tiny-divider border-style="dashed"> dash线 </tiny-divider>
    <tiny-divider border-style="dotted"> dotted线 </tiny-divider>
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
