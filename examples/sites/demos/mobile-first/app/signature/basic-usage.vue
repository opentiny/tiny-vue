<template>
  <div class="h-72">
    <tiny-signature></tiny-signature>
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
