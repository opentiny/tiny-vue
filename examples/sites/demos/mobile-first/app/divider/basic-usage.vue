<template>
  <div>
    <p>基础使用</p>
    <tiny-divider> </tiny-divider>
    <br />
    <p>带文本分割线</p>
    <tiny-divider> 分割线 </tiny-divider>
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
