<template>
  <div class="h-72">
    <tiny-signature placeholder="自定义占位符"></tiny-signature>
  </div>
</template>

<script>
import { Signature } from '@opentiny/vue'

export default {
  components: {
    TinySignature: Signature
  }
}
</script>
