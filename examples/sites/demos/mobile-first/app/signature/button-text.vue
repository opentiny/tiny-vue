<template>
  <div class="h-72">
    <tiny-signature rewrite-button-text="取消" submit-button-text="提交"></tiny-signature>
  </div>
</template>

<script>
import { TinySignature } from '@opentiny/vue'

export default {
  components: {
    TinySignature
  }
}
</script>
